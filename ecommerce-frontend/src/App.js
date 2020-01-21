import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Container></Container>
      </Switch>
    </Router>
  );
}

export default App;
