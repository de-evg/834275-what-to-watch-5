import React from "react";
import {typesMap} from "../../prop-types/prop-types";

const ShowMore = ({onClick}) => (
  <div className="catalog__more">
    <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
  </div>
);

ShowMore.propTypes = {
  onClick: typesMap.onClick
};

export default ShowMore;
