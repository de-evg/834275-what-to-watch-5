import React from "react";
import {typesMap} from "../../prop-types/prop-types";
import Nav from "../nav/nav";

const NAV_ITEMS = [`Overview`, `Details`, `Reviews`];

const Tabs = ({renderTab, movie, activeNavItem, handleNavItemChange, reviews}) => (
  <div className="movie-card__desc">
    <Nav onNavItemChange={handleNavItemChange} navItems={NAV_ITEMS} activeItem={activeNavItem} />
    {renderTab(movie, reviews)}
  </div>
);

Tabs.propTypes = {
  movie: typesMap.movie,
  renderTab: typesMap.renderTab,
  activeNavItem: typesMap.activeNavItem,
  handleNavItemChange: typesMap.handleNavItemChange,
  reviews: typesMap.movieReviews
};

export default Tabs;
