import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage.js";

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
