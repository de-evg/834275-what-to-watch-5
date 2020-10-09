import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card";


class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.state = {
      hoveredMovie: null
    };
  }

  handleMouseEnter(movieID) {
    this.setState({
      hoveredMovie: movieID
    });
  }

  handleMouseLeave() {
    this.setState({
      hoveredMovie: null
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
              poster={film.poster}
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
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired,
    video: PropTypes.string.isRequired
  }))
};

export default MovieList;
