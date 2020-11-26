import PropTypes from "prop-types";

const smallVideoPlayerProps = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    genre: PropTypes.string,
    release: PropTypes.number,
    posterURL: PropTypes.string,
    previewURL: PropTypes.string.isRequired,
    rating: PropTypes.string,
    ratingLevel: PropTypes.string,
    ratingCount: PropTypes.number,
    description: PropTypes.string,
    director: PropTypes.string,
    actors: PropTypes.array,
    videoURL: PropTypes.string.isRequired,
    isInWatchList: PropTypes.bool
  }),
  id: PropTypes.number.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default smallVideoPlayerProps;
