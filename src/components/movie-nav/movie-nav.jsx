import React, {PureComponent} from "react";
import {typesMap} from "../../prop-types/prop-types";
import NavItem from "../nav-item/nav-item";

class Nav extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {navItmes} = this.props;
    return (
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            navItmes.map((item, i) => <NavItem title={item} key={`nav_item-${i}`} />)
          }
        </ul>
      </nav>
    );
  }
}

Nav.propTypes = {
  navItmes: typesMap.navItmes,
  onNavItemChange: typesMap.onNavItemChange
};

export default Nav;
