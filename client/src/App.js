import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, AddTodo, EditTodo, Todos } from "./pages";
import { Navbar } from './components'
import { Provider } from "react-redux";
import store from "./store/index";
import './assets/scss/styles.scss'

const routes = [
  {
    exact: true,
    path: "/",
    children: <Home />
  },
  {
    path: "/todos",
    children: <Todos />
  },
  {
    path: "/addTOdo",
    children: <AddTodo />
  },
  {
    path: "/editTodo/:id",
    children: <EditTodo />
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
