import React, {PureComponent} from "react";
import {typesMap} from "../../prop-types/prop-types";
import Nav from "../movie-nav/movie-nav";
import Overview from "../overview/overview";
import Details from "../details/details";
import Reviews from "../reviews/reviews";


const NAV_ITEMS = [`Overview`, `Details`, `Reviews`];
const DEFAULT_ACTIVE = `Overview`;
const TabMap = {
  [`Overview`]: Overview,
  [`Details`]: Details,
  [`Reviews`]: Reviews
};

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeNavItem: DEFAULT_ACTIVE
    };
  }

  handleNavItemChange(newActiveItem) {
    this.setState = {
      activeNavItem: newActiveItem
    };
  }

  render() {
    const Tab = TabMap[this.state.activeNavItem];
    return (
      <div className="movie-card__desc">
        <Nav onNavItemChange={this.handleNavItemChange} navItems={NAV_ITEMS} activeItem={this.state.activeNavItem} />        
        <Tab />
      </div>
    );
  }
}

Tabs.propTypes = {
  movie: typesMap.movie
};

export default Tabs;
