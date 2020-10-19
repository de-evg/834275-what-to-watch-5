import React, {PureComponent} from "react";
import {typesMap} from "../../prop-types/prop-types";
import Genre from "../genre/genre";

class GenreList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentGenre, genres, onGenreFilterChange} = this.props;

    return (
      <ul className="catalog__genres-list">
        {
          genres.map((genre, i) => {
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
  }
}

GenreList.propTypes = {
  genres: typesMap.genres,
  currentGenre: typesMap.genre,
  onGenreFilterChange: typesMap.onGenreFilterChange
};

export default GenreList;
