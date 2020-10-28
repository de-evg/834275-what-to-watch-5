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

    handleMouseOut() {
      this.removeTimeDelay();
      this.setState({
        activeMovieID: -1,
        isPlaying: false
      });
    }

    timeDelay(movieID) {
      this.delay = setTimeout(() => {
        this.setState({
          activeMovieID: movieID,
          isPlaying: true
        });
      }, 1000);
    }

    removeTimeDelay() {
      clearTimeout(this.delay);
    }

    render() {
      const {activeMovieID, isPlaying} = this.state;
      return (
        <Component
          {...this.props}
          activeMovieID={activeMovieID}
          renderSmallVideoPlayer={(currentMovie, id) => (
            <SmallVideoPlayer
              movie={currentMovie}
              id={id}
              key={`player-${id}`}
              isPlaying={isPlaying}
              onMouseOut={this.handleMouseOut}
              removeTimeDelay={this.removeTimeDelay}
            />
          )}
          renderSmallMovieCard={(currentMovie, id) => (
            <SmallMovieCard
              movie={currentMovie}
              id={id}
              key={`card-${id}`}
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
              removeTimeDelay={this.removeTimeDelay}
            />
          )}
        />
      );
    }
  }

  return WithActiveMovie;
};

export default withActiveMovie;
