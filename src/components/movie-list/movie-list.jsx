import React, {PureComponent} from "react";
import {typesMap} from "../../prop-types/prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card";
import SmallVideoPlayer from "../small-video-palyer/small-video-player";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.state = {
      activeMovieID: -1,
      isPlaying: false
    };
  }

  handleMouseEnter(movieID) {
    setTimeout(() => {
      this.setState({
        activeMovieID: movieID,
        isPlaying: true
      });
    }, 1000);
  }

  handleMouseLeave() {
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
              activeMovieID !== i
                ? <SmallMovieCard
                  key={`movie-${i}`}
                  id={movie.id}
                  movie={movie}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                />
                : <SmallVideoPlayer
                  key={`movie-${i}`}
                  id={movie.id}
                  movie={movie}
                  isPlaying={this.state.isPlaying}
                  onMouseLeave={this.handleMouseLeave}
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
