import PropTypes from "prop-types";
import {movieProps} from "../../prop-types/prop-types";

const smallVideoPlayerProps = {
  movie: movieProps,
  id: PropTypes.number.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default smallVideoPlayerProps;
