import React, {PureComponent} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import MovieScreen from "../movie-screen/movie-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainScreen />
          </Route>
          <Route exact path="/login">
            <AuthScreen />
          </Route>
          <Route exact path="/myList">
            <MyListScreen />
          </Route>
          <Route exact path="/films/:id" component={MovieScreen} />
          <Route exact path="/films/:id/review" component={AddReviewScreen} />
          <Route exact path="/player/:id">
            <PlayerScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {};

export default App;
