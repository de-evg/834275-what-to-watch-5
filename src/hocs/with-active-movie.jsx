import React, {PureComponent} from "react";
import SmallMovieCard from "../components/small-movie-card/small-movie-card";
import SmallVideoPlayer from "../components/small-video-palyer/small-video-player";


const withActiveMovie = (Component) => {
  class WithActiveMovie extends PureComponent {
    constructor(props) {
      super(props);

      this.handleMouseOver = this.handleMouseOver.bind(this);
      this.handleMouseOut = this.handleMouseOut.bind(this);

      this.state = {
        activeMovieID: -1,
        isPlaying: false
      };
    }

    handleMouseOver(movieID) {
      this.timeDelay(movieID);
    }

    timeDelay(movieID) {
      this.delay = setTimeout(() => {
        this.setState({
          activeMovieID: movieID,
          isPlaying: true
        });
      }, 1000);
    }

    handleMouseOut() {
      this.setState({
        activeMovieID: -1
      });
    }

    render() {
      const {activeMovieID, isPlaying} = this.state;
      return (
        <Component
          {...this.props}
          activeNavItem={this.state.activeNavItem}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          activeMovieID={activeMovieID}
          isPlaying={isPlaying}

          renderVideoPlayer={(currentMovie, id) => (
            <SmallVideoPlayer
              movie={currentMovie}
              id={id}
            />
          )}
          renderSmallMovieCard={(currentMovie, id) => (
            <SmallMovieCard
              movie={currentMovie}
              id={id}
            />
          )}
        />
      );
    }
  }

  return WithActiveMovie;
};

export default withActiveMovie;
