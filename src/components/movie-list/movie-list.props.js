import PropTypes from "prop-types";
import {movieProps} from "../../prop-types/prop-types";

const movieListProps = {
  activeMovieID: PropTypes.number.isRequired,
  renderSmallMovieCard: PropTypes.func.isRequired,
  renderSmallVideoPlayer: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(movieProps)
};

export default movieListProps;
