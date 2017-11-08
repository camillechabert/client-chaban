import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import SinglePage from "./pages/single";
// import TestPage from "./pages/test";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/details/:id" component={SinglePage} />
        </Switch>
      </Router>
    );
  }
}

// <Route path="/test" component={TestPage} />

export default App;
