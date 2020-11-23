import React, {PureComponent} from "react";
import genreProps from "./genre.props";

class Genre extends PureComponent {
  constructor(props) {
    super(props);
    this.handleGenreClick = this.handleGenreClick.bind(this);
  }

  handleGenreClick(evt) {
    const {onGenreFilterChange} = this.props;
    evt.preventDefault();
    onGenreFilterChange(evt.target.id);
  }

  render() {
    const {genre, isActive} = this.props;
    const isActiveGenre = isActive ? `catalog__genres-item--active` : ``;
    const classes = [`catalog__genres-item`, isActiveGenre];

    return (
      <li className={`${classes.join(` `)}`}>
        <a href="#" className="catalog__genres-link" id={genre} onClick={this.handleGenreClick}>{genre}</a>
      </li>
    );
  }
}

Genre.propTypes = genreProps;

export default Genre;
