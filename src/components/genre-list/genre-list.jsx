import React from "react";
import {typesMap} from "../../prop-types/prop-types";
import Genre from "../genre/genre";

const MAX_GENRES_COUNT = 11;

const GenreList = (props) => {
  const {currentGenre, genres, onGenreFilterChange} = props;

  return (
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
};

GenreList.propTypes = {
  genres: typesMap.genres,
  currentGenre: typesMap.genre,
  onGenreFilterChange: typesMap.onGenreFilterChange
};

export default GenreList;
