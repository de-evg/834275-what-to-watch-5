import PropTypes from "prop-types";
import {movieProps} from "../../prop-types/prop-types";

const myListScreenProps = {
  movies: PropTypes.arrayOf(movieProps)
};

export default myListScreenProps;
