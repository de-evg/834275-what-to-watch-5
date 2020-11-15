import PropTypes from "prop-types";

const smallMovieCardProps = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    posterURL: PropTypes.string.isRequired,
    previewURL: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired,
    videoURL: PropTypes.string.isRequired,
    isInWatchList: PropTypes.bool.isRequired
  }),
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  removeTimeDelay: PropTypes.func.isRequired
};

export default smallMovieCardProps;
