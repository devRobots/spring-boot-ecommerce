import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { getTodayTime, getMonthName } from '../util/index';

var ROW = 4;
var COL = 3;

function noop() {}

var MonthTable = function (_Component) {
  _inherits(MonthTable, _Component);

  function MonthTable() {
    var _temp, _this, _ret;

    _classCallCheck(this, MonthTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MonthTable.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    if ('value' in props) {
      return { value: props.value };
    }
    return null;
  };

  MonthTable.prototype.setAndSelectValue = function setAndSelectValue(value) {
    this.setState({
      value: value
    });
    this.props.onSelect(value);
  };

  MonthTable.prototype.chooseMonth = function chooseMonth(month) {
    var next = this.state.value.clone();
    next.month(month);
    this.setAndSelectValue(next);
  };

  MonthTable.prototype.months = function months() {
    var value = this.state.value;
    var current = value.clone();
    var months = [];
    var index = 0;
    for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
      months[rowIndex] = [];
      for (var colIndex = 0; colIndex < COL; colIndex++) {
        current.month(index);
        var content = getMonthName(current);
        months[rowIndex][colIndex] = {
          value: index,
          content: content,
          title: content
        };
        index++;
      }
    }
    return months;
  };

  MonthTable.prototype.render = function render() {
    var _this2 = this;

    var props = this.props;
    var value = this.state.value;
    var today = getTodayTime(value);
    var months = this.months();
    var currentMonth = value.month();
    var prefixCls = props.prefixCls,
        locale = props.locale,
        contentRender = props.contentRender,
        cellRender = props.cellRender;

    var monthsEls = months.map(function (month, index) {
      var tds = month.map(function (monthData) {
        var _classNameMap;

        var disabled = false;
        if (props.disabledDate) {
          var testValue = value.clone();
          testValue.month(monthData.value);
          disabled = props.disabledDate(testValue);
        }
        var classNameMap = (_classNameMap = {}, _classNameMap[prefixCls + '-cell'] = 1, _classNameMap[prefixCls + '-cell-disabled'] = disabled, _classNameMap[prefixCls + '-selected-cell'] = monthData.value === currentMonth, _classNameMap[prefixCls + '-current-cell'] = today.year() === value.year() && monthData.value === today.month(), _classNameMap);
        var cellEl = void 0;
        if (cellRender) {
          var currentValue = value.clone();
          currentValue.month(monthData.value);
          cellEl = cellRender(currentValue, locale);
        } else {
          var content = void 0;
          if (contentRender) {
            var _currentValue = value.clone();
            _currentValue.month(monthData.value);
            content = contentRender(_currentValue, locale);
          } else {
            content = monthData.content;
          }
          cellEl = React.createElement(
            'a',
            { className: prefixCls + '-month' },
            content
          );
        }
        return React.createElement(
          'td',
          {
            role: 'gridcell',
            key: monthData.value,
            onClick: disabled ? null : function () {
              return _this2.chooseMonth(monthData.value);
            },
            title: monthData.title,
            className: classnames(classNameMap)
          },
          cellEl
        );
      });
      return React.createElement(
        'tr',
        { key: index, role: 'row' },
        tds
      );
    });

    return React.createElement(
      'table',
      { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
      React.createElement(
        'tbody',
        { className: prefixCls + '-tbody' },
        monthsEls
      )
    );
  };

  return MonthTable;
}(Component);

MonthTable.defaultProps = {
  onSelect: noop
};

MonthTable.propTypes = {
  onSelect: PropTypes.func,
  cellRender: PropTypes.func,
  prefixCls: PropTypes.string,
  value: PropTypes.object
};

polyfill(MonthTable);

export default MonthTable;