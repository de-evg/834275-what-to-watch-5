import PropTypes from "prop-types";
import {movieProps} from "../../prop-types/prop-types";

const playerScreenProps = {
  movie: movieProps,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  movies: PropTypes.arrayOf(movieProps)
};

export default playerScreenProps;
