import React, {PureComponent} from "react";

import Overview from "../../components/overview/overview";
import Details from "../../components/details/details";
import Reviews from "../../components/reviews/reviews";
const DEFAULT_ACTIVE = `Overview`;

const TabMap = {
  [`Overview`]: Overview,
  [`Details`]: Details,
  [`Reviews`]: Reviews
};

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
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
      return (
        <Component
          {...this.props}
          activeNavItem={this.state.activeNavItem}
          onNavItemChange={this.handleNavItemChange}
          renderTab={(currentMovie, movieReviews) => (
            <Tab
              movie={currentMovie}
              movieReviews={movieReviews}
            />
          )}
        />
      );
    }
  }

  return WithActiveTab;
};

export default withActiveTab;
