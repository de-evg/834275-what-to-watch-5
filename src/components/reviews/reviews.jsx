import React from "react";
import Review from "../review/review";
import reviewsProps from "./reviews.props";

const Reviews = ({movieReviews}) => (
  <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {
        movieReviews.map((movieReview, i) => <Review movieReview={movieReview} key={`review-${i}`} />)
      }
    </div>
  </div>
);

Reviews.propTypes = reviewsProps;

export default Reviews;
