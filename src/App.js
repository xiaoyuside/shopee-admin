import React from "react";
import "./App.less";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { commonRoutes, privateRoutes } from "./router";
import { localStorageUtils } from "./utils";
import { LS_KEY_USER_LOGIN } from "./config/constants";
import BasicLayout from "./components/BasicLayout";

const AdminApp = () => {
  return (
    <BasicLayout>
      <Router>
        <Switch>
          {privateRoutes.map((route) => {
            return (
              <Route exact
                key={route.pathname}
                path={route.pathname}
                component={route.comp}
              />
              // <>
              //   <Route
              //     key={route.pathname}
              //     path={route.pathname}
              //     component={route.comp}
              //   />
              //   {route.children &&
              //     route.children.map((child) => (
              //       <Route
              //         key={child.pathname}
              //         path={child.pathname}
              //         component={child.comp}
              //       />
              //     ))}
              // </>
            );
          })}
          {privateRoutes.map((route) => {
            if (route.children) {
              return route.children.map((child) => (
                <Route exact
                  key={child.pathname}
                  path={child.pathname}
                  component={child.comp}
                />
              ));
            } 
            return null;
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
            const userLogin = localStorageUtils.read(LS_KEY_USER_LOGIN);
            if (!userLogin || !userLogin._id) {
              return <Redirect to="/login" />;
            }
            return <AdminApp />;
          }}
        />
        {commonRoutes.map((route) => {
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
