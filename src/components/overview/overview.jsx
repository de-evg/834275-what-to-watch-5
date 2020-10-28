import React from "react";
import {typesMap} from "../../prop-types/prop-types";

const Overview = ({movie: {rating, ratingLevel, ratingCount, description, director, actors}}) => (
  <>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{ratingLevel}</span>
        <span className="movie-rating__count">{ratingCount} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{description}</p>
      <p className="movie-card__director"><strong>Director: {director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {actors.join(`, `)} and other</strong></p>
    </div>
  </>
);

Overview.propTypes = {
  movie: typesMap.movie
};

export default Overview;
