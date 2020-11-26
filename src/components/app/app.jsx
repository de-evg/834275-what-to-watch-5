import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import appProps from "./app.props";

import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import MovieScreen from "../movie-screen/movie-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";

import withReviewState from "../../hocs/with-review-state/with-review-state";
import withShowMoreCount from "../../hocs/with-show-more-count/with-show-more-count";

import PrivateRoute from "../private-route/private-route";

const AddReviewScreenHOC = withReviewState(AddReviewScreen);
const MainScreenHOC = withShowMoreCount(MainScreen);

const App = ({authorizationStatus}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <MainScreenHOC history={props.history}/>
          )}>

        </Route>

        <Route exact path="/login">
          {
            authorizationStatus === `AUTH`
              ? <Redirect to="/myList" />
              : <AuthScreen />
          }
        </Route>

        <PrivateRoute
          exact
          path="/mylist"
          render={() => (
            <MyListScreen />
          )}
        />
        <Route exact path="/films/:id" component={MovieScreen} />
        <PrivateRoute
          exact
          path="/films/:id/review"
          render={(props) => (
            <AddReviewScreenHOC match={props.match} history={props.history} />
          )}
        />
        <Route exact path="/player/:id" component={PlayerScreen} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = appProps;

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus
});

export {App};
export default connect(mapStateToProps)(App);
