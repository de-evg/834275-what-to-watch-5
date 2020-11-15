import PropTypes from "prop-types";

const genreProps = {
  genre: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onGenreFilterChange: PropTypes.func.isRequired
};

export default genreProps;
