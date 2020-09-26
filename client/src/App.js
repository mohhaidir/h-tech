import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const routes = [
  {
    exact: true,
    path: "/",
    children: <Home />
  }
];

const NoMatch = ({ location }) => (
  <div style={{ textAlign: "center", marginTop: "20%" }}>
    <h1>404 page</h1>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map(route => (
          <Route key={route} {...route} />
        ))}
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
