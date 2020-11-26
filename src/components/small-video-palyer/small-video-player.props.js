import PropTypes from "prop-types";

const smallVideoPlayerProps = {
  movie: PropTypes.shape({
    previewURL: PropTypes.string.isRequired,
    videoURL: PropTypes.string.isRequired
  }),
  id: PropTypes.number.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default smallVideoPlayerProps;
