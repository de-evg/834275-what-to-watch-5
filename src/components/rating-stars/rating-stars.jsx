import React from "react";
import Star from "../rating-star/rating-star";
import ratingStarsProps from "./rating-stars.props";

const stars = new Array(5)
  .fill()
  .map((star, i) => {
    star = {value: i + 1};
    return star;
  });

const RatingStars = ({activeStar, onRatingInputChange}) => (
  <div className="rating__stars">
    {
      stars.map((star, i) => (
        <Star
          key={`star-${i}`}
          isActive={+activeStar === star.value}
          onRatingInputChange={onRatingInputChange}
          starId={`star-${i}`}
          starValue={star.value}
        />)
      )
    }
  </div>
);

RatingStars.propTypes = ratingStarsProps;

export default RatingStars;
