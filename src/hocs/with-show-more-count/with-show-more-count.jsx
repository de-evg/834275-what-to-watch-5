import React, {useCallback, useState} from "react";
import {DEFAULT_MOVIES_COUNT} from "../../const.js";

const SHOW_MORE_STEP = 8;

const withShowMoreCount = (Component) => {

  const WithShowMoreCount = (props) => {
    const [showedMoviesCount, setShowedMoviesCount] = useState(DEFAULT_MOVIES_COUNT);

    const handleShowMoreClick = useCallback((currentCount) => {
      setShowedMoviesCount(currentCount + SHOW_MORE_STEP);
    });

    const resetShowedMovies = useCallback(() => {
      setShowedMoviesCount(DEFAULT_MOVIES_COUNT);
    });

    return (
      <Component
        {...props}
        onShowMoreClick={handleShowMoreClick}
        resetShowedMovies={resetShowedMovies}
        showedMoviesCount={showedMoviesCount}
      />
    );
  };

  return WithShowMoreCount;
};

export default withShowMoreCount;
