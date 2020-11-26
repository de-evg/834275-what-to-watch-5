import PropTypes from "prop-types";
import {movieProps} from "../../prop-types/prop-types";

const smallMovieCardProps = {
  movie: movieProps,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default smallMovieCardProps;
