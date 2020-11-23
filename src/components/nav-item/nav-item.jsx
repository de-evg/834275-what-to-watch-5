import React, {useCallback} from "react";
import navItemProps from "./nav-item.props";

const NavItem = ({isActive, title, onNavItemChange}) => {
  const acitveClass = isActive ? `movie-nav__item--active` : ``;
  const classes = [`movie-nav__item`, acitveClass];

  const handleNavItemClick = useCallback((evt) => {
    evt.preventDefault();
    onNavItemChange(title);
  }, [title]);

  return (
    <li className={classes.join(` `)}>
      <a href="#" className="movie-nav__link" onClick={handleNavItemClick}>{title}</a>
    </li>
  );
};

NavItem.propTypes = navItemProps;

export default NavItem;
