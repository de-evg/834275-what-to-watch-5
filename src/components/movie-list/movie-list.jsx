import React, {PureComponent} from "react";
import {typesMap} from "../../prop-types/prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card";
import SmallVideoPlayer from "../small-video-palyer/small-video-player";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);

    this.state = {
      activeMovieID: -1,
      isPlaying: false
    };
  }

  componentWillUnmount() {
    clearTimeout(this.delay);
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
    const {activeMovieID} = this.state;

    return (
      <div className="catalog__movies-list">
        {
          this.props.movies.map((movie, i) => {
            return (
              activeMovieID !== movie.id
                ? <SmallMovieCard
                  key={`movie-${i}`}
                  id={movie.id}
                  movie={movie}
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                />
                : <SmallVideoPlayer
                  key={`movie-${i}`}
                  id={movie.id}
                  movie={movie}
                  isPlaying={this.state.isPlaying}
                  onMouseOut={this.handleMouseOut}
                />
            );
          })
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: typesMap.movies
};

export default MovieList;
