import React from "react";
import {typesMap} from "../../prop-types/prop-types";
import NavItem from "../nav-item/nav-item";

const Nav = (props) => {
  const {navItems, activeItem, onNavItemChange} = props;
  return (
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
};

Nav.propTypes = {
  navItems: typesMap.navItems,
  activeItem: typesMap.activeItem,
  onNavItemChange: typesMap.onNavItemChange
};

export default Nav;
