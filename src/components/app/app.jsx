import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Router} from "react-router-dom";

import MainScreen from "../main-screen/main-screen";

const App = (props) => {
  const {promoTitle, promoGenre, promoRelease} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Router exact path="/">
          <MainScreen
            promoTitle={promoTitle}
            promoGenre={promoGenre}
            promoRelease={promoRelease}
          />
        </Router>
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
