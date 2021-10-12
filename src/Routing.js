import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { renderRoutes } from "config/routes";
import { NotFound, Container } from "components/Global";

function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutes.map(([key, route]) => (
          <Route
            key={key}
            path={route.path}
            exact={true}
            render={() => (
              <Container pageTitle={route.pageTitle} route={route} />
            )}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routing;
