import React, {PureComponent} from "react";
import {typesMap} from "../../prop-types/prop-types";
import Nav from "../nav/nav";
import Overview from "../overview/overview";
import Details from "../details/details";
import Reviews from "../reviews/reviews";
import {review} from "../../mocks/review";

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

    this.handleNavItemChange = this.handleNavItemChange.bind(this);

    this.state = {
      activeNavItem: DEFAULT_ACTIVE
    };
  }

  handleNavItemChange(newActiveItem) {
    this.setState({
      activeNavItem: newActiveItem
    });
  }

  render() {
    const Tab = TabMap[this.state.activeNavItem];
    const {movie} = this.props;
    const movieReviews = review[movie.id];
    return (
      <div className="movie-card__desc">
        <Nav onNavItemChange={this.handleNavItemChange} navItems={NAV_ITEMS} activeItem={this.state.activeNavItem} />        
        <Tab movie={movie} movieReviews={movieReviews}/>
      </div>
    );
  }
}

Tabs.propTypes = {
  movie: typesMap.movie
};

export default Tabs;
