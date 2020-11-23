import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus, AppRoute} from "../../const";
import privateRouteProps from "./private-route.props";

const PrivateRoute = ({render, path, exact, authorizationStatus}) => (
  <Route
    path={path}
    exact={exact}
    render={(routeProps) => {
      return (
        authorizationStatus === AuthorizationStatus.AUTH
          ? render(routeProps)
          : <Redirect to={AppRoute.LOGIN} />
      );
    }}
  />
);

PrivateRoute.propTypes = privateRouteProps;

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
