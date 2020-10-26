import React from "react";
import {typesMap} from "../../prop-types/prop-types";

const NavItem = (props) => {
  const {isActive, title} = props;
  const acitveClass = isActive ? `movie-nav__item--active` : ``;
  const classes = [`movie-nav__item`, acitveClass];

  const handleNavItemClick = (evt) => {
    evt.preventDefault();
    props.onNavItemChange(title);
  };

  return (
    <li className={classes.join(` `)}>
      <a href="#" className="movie-nav__link" onClick={handleNavItemClick}>{title}</a>
    </li>
  );
};

NavItem.propTypes = {
  isActive: typesMap.isActive,
  title: typesMap.title,
  onNavItemChange: typesMap.onNavItemChange
};

export default NavItem;
