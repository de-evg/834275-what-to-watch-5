import React from "react";
import {typesMap} from "../../prop-types/prop-types";
import Review from "../review/review";

const Reviews = (props) => {
  const {movieReviews} = props;
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {
          movieReviews.map((movieReview, i) => <Review movieReview={movieReview} key={`review-${i}`} />)
        }
      </div>
    </div>
  );
};


Reviews.propTypes = {
  movieReviews: typesMap.movieReviews
};

export default Reviews;
