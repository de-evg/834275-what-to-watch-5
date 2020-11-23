import PropTypes from "prop-types";

const genreListProps = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentGenre: PropTypes.string.isRequired,
  onGenreFilterChange: PropTypes.func.isRequired
};

export default genreListProps;
