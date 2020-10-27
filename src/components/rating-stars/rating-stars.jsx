import React from "react";
import {typesMap} from "../../prop-types/prop-types";
import Star from "../rating-star/rating-star";

const stars = new Array(5)
  .fill()
  .map((star, i) => {
    star = {value: i + 1};
    return star;
  });

const RatingStars = (props) => {
  const {activeStar, onRatingInputChange} = props;
  return (
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
};

RatingStars.propTypes = {
  activeStar: typesMap.activeStar,
  onRatingInputChange: typesMap.onRatingInputChange
};

export default RatingStars;
