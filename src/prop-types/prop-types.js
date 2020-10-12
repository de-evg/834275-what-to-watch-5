import PropTypes from "prop-types";

const movieType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  ratingLevel: PropTypes.string.isRequired,
  ratingCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.array.isRequired,
  video: PropTypes.string.isRequired
});

const typesMap = {
  movieType,
  moviesType: PropTypes.arrayOf(movieType)
};

export {typesMap};
