import React from "react";
import Genre from "../genre/genre";
import genreListProps from "./genre-list.props";

const MAX_GENRES_COUNT = 11;

const GenreList = ({currentGenre, genres, onGenreFilterChange}) => (
  <ul className="catalog__genres-list">
    {
      genres.slice(0, MAX_GENRES_COUNT).map((genre, i) => {
        return (
          <Genre
            key={`genre-${i}`}
            genre={genre}
            isActive={currentGenre === genre}
            onGenreFilterChange={onGenreFilterChange}
          />
        );
      })
    }
  </ul>
);

GenreList.propTypes = genreListProps;

export default GenreList;
