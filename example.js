import * as React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

function TestComponent({text}) {
  return <div data-test-target="component">{text}</div>;
}

export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <TestComponent text="Home"/>
      </Route>
      <Route path="/page">
        <TestComponent text="Page"/>
      </Route>
    </Switch>
  );
}

