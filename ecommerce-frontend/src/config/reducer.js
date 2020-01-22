import {
  POST_CATEGORY,
  GET_CATEGORIES,
  GET_PRODUCTS,
  POST_USER,
  POST_PRODUCTS,
  GET_USER,
  GET_CURRENCY
} from "./values";

export default (state, action) => {
  switch (action.type) {
    case GET_CURRENCY:
      return {
        ...state,
        currency: action.payload
      };
    case POST_USER:
      return {
        ...state,
        user: action.payload
      };
    case POST_CATEGORY:
      return {
        ...state,
        categories: action.payload
      };
    case POST_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };

    default:
      return state;
  }
};
