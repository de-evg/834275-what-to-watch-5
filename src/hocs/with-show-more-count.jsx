import React, {PureComponent} from "react";
import {DEFAULT_MOVIES_COUNT} from "../const.js";

const SHOW_MORE_STEP = 8;

const withShowMoreCount = (Component) => {
  class WithShowMoreCount extends PureComponent {
    constructor(props) {
      super(props);

      this.handleShowMoreClick = this.handleShowMoreClick.bind(this);

      this.state = {
        showedMoviesCount: DEFAULT_MOVIES_COUNT
      };
    }

    handleShowMoreClick(currentCount) {
      this.setState({
        showedMoviesCount: currentCount + SHOW_MORE_STEP
      });
    }

    render() {
      const {showedMoviesCount} = this.state;
      return (
        <Component
          {...this.props}
          onShowMoreClick={this.handleShowMoreClick}
          showedMoviesCount={showedMoviesCount}
        />
      );
    }
  }

  return WithShowMoreCount;
};

export default withShowMoreCount;
