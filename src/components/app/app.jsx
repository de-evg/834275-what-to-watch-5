import React, {PureComponent} from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import MovieScreen from "../movie-screen/movie-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";

import withReviewState from "../../hocs/with-review-state";
import withShowMoreCount from "../../hocs/with-show-more-count";

import PrivateRoute from "../private-route/private-route";
import {typesMap} from "../../prop-types/prop-types";

const AddReviewScreenHOC = withReviewState(AddReviewScreen);
const MainScreenHOC = withShowMoreCount(MainScreen);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {authorizationStatus} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainScreenHOC />
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
          <Route exact path="/films/:id/review" component={AddReviewScreenHOC} />
          <Route exact path="/player/:id">
            <PlayerScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus
});

App.propTypes = {
  authorizationStatus: typesMap.authorizationStatus
};

export {App};
export default connect(mapStateToProps)(App);
