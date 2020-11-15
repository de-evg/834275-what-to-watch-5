import React from "react";
import Nav from "../nav/nav";
import tabsProps from "./tabs.props";

const NAV_ITEMS = [`Overview`, `Details`, `Reviews`];

const Tabs = ({renderTab, movie, activeNavItem, handleNavItemChange, reviews}) => (
  <div className="movie-card__desc">
    <Nav onNavItemChange={handleNavItemChange} navItems={NAV_ITEMS} activeItem={activeNavItem} />
    {renderTab(movie, reviews)}
  </div>
);

Tabs.propTypes = tabsProps;

export default Tabs;
