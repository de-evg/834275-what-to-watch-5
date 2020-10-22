import React from "react";
import {typesMap} from "../../prop-types/prop-types";

const NavItem = (props) => {
  const {activeItem, itemTitle} = props;
  const isActive = activeItem === itemTitle;
  const acitveClass = isActive ? `movie-nav__item--active` : ``; 
  const classes = [`movie-nav__item`, acitveClass];

  const handleNavItemClick = (evt) => {
    evt.preventDefault();
    props.onNavItemChange(itemTitle);
  }

  return (
    <li className={classes.join(` `)} key={`nav-${i}`}>
      <a href="#" className="movie-nav__link" onCLick={handleNavItemClick}>{itemTitle}</a>
    </li>
  );
};

// NavItem.propTypes = {
//   isActive: typesMap.isActive,
//   activeItem: typesMap.activeItem,
//   itemTitle: typesMap.itemTitle,
//   onNavItemChange: typesMap.onNavItemChange
// };

export default NavItem;
