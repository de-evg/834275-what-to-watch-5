import React from "react";
import Nav from "../nav/nav";
import tabsProps from "./tabs.props";
import {NAV_ITEMS} from "../../const";

const Tabs = ({renderTab, movie, activeNavItem, handleNavItemChange, reviews}) => (
  <div className="movie-card__desc">
    <Nav onNavItemChange={handleNavItemChange} navItems={NAV_ITEMS} activeItem={activeNavItem} />
    {renderTab(movie, reviews)}
  </div>
);

Tabs.propTypes = tabsProps;

export default Tabs;
