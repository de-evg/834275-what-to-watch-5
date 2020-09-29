import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen";

const App = (props) => {
  const {promoTitle, promoGenre, promoRelease} = props;
  return (
    <MainScreen
      promoTitle={promoTitle}
      promoGenre={promoGenre}
      promoRelease={promoRelease}
    />
  );
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoRelease: PropTypes.number.isRequired
};

export default App;
