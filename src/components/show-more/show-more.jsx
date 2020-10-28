import React, {useCallback} from "react";
import {typesMap} from "../../prop-types/prop-types";

const ShowMore = (props) => {
  const {onClick} = props;

  const handleClick = useCallback(() => {
    onClick();
  });

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleClick}>Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  onClick: typesMap.onClick
};

export default ShowMore;
