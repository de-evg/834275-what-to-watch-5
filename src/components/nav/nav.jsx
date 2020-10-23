import React, {PureComponent} from "react";
import {typesMap} from "../../prop-types/prop-types";
import NavItem from "../nav-item/nav-item";

class Nav extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {navItems, activeItem} = this.props;
    return (
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            navItems.map((item, i) => <NavItem
              title={item}
              onNavItemChange={this.props.onNavItemChange}
              isActive={activeItem === item}
              key={`nav_item-${i}`} />)
          }
        </ul>
      </nav>
    );
  }
}

Nav.propTypes = {
  navItems: typesMap.navItems,
  activeItem: typesMap.activeItem,
  onNavItemChange: typesMap.onNavItemChange
};

export default Nav;
