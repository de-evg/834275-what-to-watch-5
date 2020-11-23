import React from "react";
import NavItem from "../nav-item/nav-item";
import navProps from "./nav.props";

const Nav = ({navItems, activeItem, onNavItemChange}) => (
  <nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {
        navItems.map((item, i) =>
          <NavItem
            title={item}
            onNavItemChange={onNavItemChange}
            isActive={activeItem === item}
            key={`nav_item-${i}`} />
        )
      }
    </ul>
  </nav>
);

Nav.propTypes = navProps;

export default Nav;
