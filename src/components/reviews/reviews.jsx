import React from "react";
import {typesMap} from "../../prop-types/prop-types";
import Review from "../review/review";

const Reviews = (props) => {
  const {reviews} = props;
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {
          reviews.map((review, i) => <Review review={review} key={`review-${i}`} />)
        }
      </div>
    </div>
  );
};


Reviews.propTypes = {
  reviews: typesMap.reviews
};

export default Reviews;
