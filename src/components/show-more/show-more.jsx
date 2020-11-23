import React from "react";
import showMoreProps from "./show-more.props";

const ShowMore = ({onClick}) => (
  <div className="catalog__more">
    <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
  </div>
);

ShowMore.propTypes = showMoreProps;

export default ShowMore;
