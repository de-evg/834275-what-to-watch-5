import React, {useCallback} from "react";
import genreProps from "./genre.props";

const Genre = ({onGenreFilterChange, genre, isActive}) => {
  const handleGenreClick = useCallback((evt) => {
    evt.preventDefault();
    onGenreFilterChange(evt.target.id);
  }, [onGenreFilterChange]);

  const isActiveGenre = isActive ? `catalog__genres-item--active` : ``;
  const classes = [`catalog__genres-item`, isActiveGenre];

  return (
    <li className={`${classes.join(` `)}`}>
      <a href="#" className="catalog__genres-link" id={genre} onClick={handleGenreClick}>{genre}</a>
    </li>
  );
};

Genre.propTypes = genreProps;

export default Genre;
