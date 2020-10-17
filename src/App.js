import React from "react";
import "./App.less";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { commonRoutes, privateRoutes } from "./router";
import { localStorageUtils } from "./utils";
import { user_ls_key } from "./config/constants";
import BasicLayout from "./components/BasicLayout";

const AdminApp = () => {
  return (
    <BasicLayout>
      <Router>
        <Switch>
          {privateRoutes.map((route) => {
            return (
              <Route
                key={route.pathname}
                path={route.pathname}
                component={route.comp}
              />
            );
          })}
          <Redirect from="/admin" to="/admin/dashboard" exact />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </BasicLayout>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/admin"
          render={() => {
            // check access
            const userLogin = localStorageUtils.read(user_ls_key);
            if (!userLogin || !userLogin._id) {
              return <Redirect to="/login" />;
            }
            return <AdminApp />;
          }}
        />
        {commonRoutes.map((route) => {
          if (route.pathname === "/login") {
            // check login status
            const userLogin = localStorageUtils.read(user_ls_key);
            if (userLogin && userLogin._id) {
              return <Redirect key={route.pathname} to="/" />;
            }
          }

          return (
            <Route
              key={route.pathname}
              path={route.pathname}
              component={route.comp}
            />
          );
        })}

        <Redirect from="/" to="/admin" exact />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
