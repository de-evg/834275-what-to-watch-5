import React from "react";
import {typesMap} from "../../prop-types/prop-types";
import {review} from "../../mocks/review";
import Nav from "../nav/nav";

const NAV_ITEMS = [`Overview`, `Details`, `Reviews`];

const Tabs = (props) => {
  const {renderTab, movie, activeNavItem, handleNavItemChange} = props;
  const movieReviews = review[movie.id];

  return (
    <div className="movie-card__desc">
      <Nav onNavItemChange={handleNavItemChange} navItems={NAV_ITEMS} activeItem={activeNavItem} />
      {renderTab(movie, movieReviews)}
    </div>
  );
};

Tabs.propTypes = {
  movie: typesMap.movie,
  renderTab: typesMap.renderTab,
  activeNavItem: typesMap.activeNavItem,
  handleNavItemChange: typesMap.handleNavItemChange
};

export default Tabs;
