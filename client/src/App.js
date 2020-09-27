import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Register, Login } from "./pages";
import { Navbar } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./store/index";

const routes = [
  {
    exact: true,
    path: "/",
    children: <Home />
  },
  {
    path: "/login",
    children: <Login />
  },
  {
    path: "/register",
    children: <Register />
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
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          {routes.map(route => (
            <Route key={route} {...route} />
          ))}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
