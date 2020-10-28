import React, {useCallback} from "react";
import {typesMap} from "../../prop-types/prop-types";

const RatingStar = ({starId, starValue, isActive, onRatingInputChange}) => {
  const handlerRatingInputChange = useCallback((evt) => {
    onRatingInputChange(evt.target.value);
  });

  return (
    <>
      <input className="rating__input" id={starId} type="radio" name="rating" value={starValue} checked={isActive} onChange={handlerRatingInputChange} />
      <label className="rating__label" htmlFor={starId}>Rating {starValue}</label>
    </>
  );
};

RatingStar.propTypes = {
  starId: typesMap.starId,
  starValue: typesMap.starValue,
  onRatingInputChange: typesMap.onRatingInputChange,
  isActive: typesMap.isActive
};

export default RatingStar;
