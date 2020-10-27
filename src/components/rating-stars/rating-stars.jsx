import React from "react";
import {typesMap} from "../../prop-types/prop-types";
import Star from "../rating-star/rating-star";

const stars = new Array(5).fill(``);

const RatingStars = (props) => {
  const {activeStar, onRatingInputChange} = props;
  return (
    <div className="rating__stars">
      {
        stars.map((star, i) => (
          <Star
            key={`star-${i}`}
            isActive={+activeStar === i}
            onRatingInputChange={onRatingInputChange}
            starId={`star-${i}`}
            starValue={i}
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
