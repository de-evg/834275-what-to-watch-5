import React, {useCallback, useEffect, useState} from "react";
import SmallMovieCard from "../../components/small-movie-card/small-movie-card";
import SmallVideoPlayer from "../../components/small-video-palyer/small-video-player";

const withActiveMovie = (Component) => {
  const WithActiveMovie = (props) => {
    const initialState = {
      activeMovieID: -1,
      isPlaying: false,
      isMouseOver: false
    };

    const [movieSettings, setMovieSettings] = useState(initialState);
    const {activeMovieID, isPlaying, isMouseOver} = movieSettings;
    // const resetState = (timout) => {
    //   clearTimeout(timout);
    // };

    const handleMouseOver = useCallback((movieID) => {
      setMovieSettings(Object.assign(
          {},
          movieSettings,
          {
            activeMovieID: movieID,
            isMouseOver: true
          }
      ));
    });

    const handleMouseOut = useCallback(() => {
      setMovieSettings(initialState);
    });

    useEffect(() => {
      let delay = null;
      if (isMouseOver) {
        delay = setTimeout(() => {
          setMovieSettings(Object.assign(
              {},
              movieSettings,
              {isPlaying: true}
          ));
        }, 1000);
      }
      return () => clearTimeout(delay);
    }, [isMouseOver]);

    return (
      <Component
        {...props}
        activeMovieID={activeMovieID}
        renderSmallVideoPlayer={(currentMovie, id) => (
          <SmallVideoPlayer
            movie={currentMovie}
            id={id}
            key={`player-${id}`}
            isPlaying={isPlaying}
            onMouseOut={handleMouseOut}
          />
        )}
        renderSmallMovieCard={(currentMovie, id) => (
          <SmallMovieCard
            movie={currentMovie}
            id={id}
            key={`card-${id}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        )}
      />
    );
  };
  return WithActiveMovie;
};

export default withActiveMovie;
