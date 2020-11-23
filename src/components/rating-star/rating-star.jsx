import React, {useCallback} from "react";
import ratingStarProps from "./rating-star.props";

const RatingStar = ({starId, starValue, isActive, onRatingInputChange}) => {
  const handlerRatingInputChange = useCallback((evt) => {
    onRatingInputChange(evt.target.value);
  });

  return (
    <>
      <input className="rating__input" id={starId} type="radio" name="rating" value={starValue} checked={isActive} onChange={handlerRatingInputChange} required/>
      <label className="rating__label" htmlFor={starId}>Rating {starValue}</label>
    </>
  );
};

RatingStar.propTypes = ratingStarProps;

export default RatingStar;
