import React from "react";
import { Redirect } from "react-router-dom";
import { routes } from "config/routes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

function Container({ authToken, route, pageTitle }) {
  if (!authToken?.access_token && route?.secure) {
    return <Redirect to={routes.loginPage.path} />;
  }
  if (authToken?.access_token && route?.authRoute) {
    return <Redirect to={routes.homePage.path} />;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Xendit - {pageTitle}</title>
      </Helmet>
      <route.component />
    </React.Fragment>
  );
}

const mapStateToProps = ({ auth }) => ({
  authToken: auth.authToken,
});

export default connect(mapStateToProps, {})(Container);
