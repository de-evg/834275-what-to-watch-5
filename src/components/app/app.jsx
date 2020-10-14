import React, {PureComponent} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import MovieScreen from "../movie-screen/movie-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";

import {typesMap} from "../../prop-types/prop-types";


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  filterMovieInWhatchList() {
    return this.props.movies.filter((movie) => movie.isInWhatchList);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainScreen
              promoMovie={this.props.promoMovie}
              movies={this.props.movies}
            />
          </Route>
          <Route exact path="/login">
            <AuthScreen />
          </Route>
          <Route exact path="/myList">
            <MyListScreen movies={this.filterMovieInWhatchList()} />
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

App.propTypes = {
  promoMovie: typesMap.promo,
  movies: typesMap.movies
};

export default App;
