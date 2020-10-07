import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import MovieScreen from "../movie-screen/movie-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";


const App = (props) => {
  const {promoTitle, promoGenre, promoRelease, films} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            promoTitle={promoTitle}
            promoGenre={promoGenre}
            promoRelease={promoRelease}
            films={films}
          />
        </Route>

        <Route exact path="/login">
          <AuthScreen />
        </Route>

        <Route exact path="/myList">
          <MyListScreen />
        </Route>

        <Route exact path="/films/:id">
          <MovieScreen />
        </Route>

        <Route exact path="/films/:id/review">
          <AddReviewScreen />
        </Route>

        <Route exact path="/player/:id">
          <PlayerScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoRelease: PropTypes.number.isRequired
};

export default App;
