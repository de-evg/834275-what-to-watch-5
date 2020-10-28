import React from "react";
import {typesMap} from "../../prop-types/prop-types";

const Details = (props) => {
  const {release, genre, runTime, director, actors} = props.movie;
  const hours = Math.floor(runTime / 60);
  const minutes = runTime - hours * 60;
  const updatedTime = `${hours}h ${minutes}m`;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {actors.map((actor, i) => <React.Fragment key={`actors-${i}`}>{actor} <br /></React.Fragment>)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{updatedTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{release}</span>
        </p>
      </div>
    </div>
  );
};

Details.propTypes = {
  movie: typesMap.movie
};

export default Details;
