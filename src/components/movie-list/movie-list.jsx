import React, {PureComponent} from "react";
import {typesMap} from "../../prop-types/prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.state = {
      activeMovie: null
    };
  }

  handleMouseEnter(movieID) {
    this.setState({
      activeMovie: movieID
    });
  }

  handleMouseLeave() {
    this.setState({
      activeMovie: null
    });
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {
          this.props.movies.map((film, i) => {
            return (<SmallMovieCard
              key={`movie-${i}`}
              id={i}
              title={film.title}
              previewURL={film.previewURL}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            />);
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
