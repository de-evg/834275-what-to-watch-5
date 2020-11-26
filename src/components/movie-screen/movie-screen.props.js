import PropTypes from "prop-types";
import {movieProps} from "../../prop-types/prop-types";

const movieScreenProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  movies: PropTypes.arrayOf(movieProps),
  reviews: PropTypes.oneOfType([PropTypes.array, PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    author: PropTypes.string.isRequired,
    userRating: PropTypes.string.isRequired
  }))]).isRequired,
  loadReviews: PropTypes.func.isRequired,
  resetReviews: PropTypes.func.isRequired,
  onFavoriteStatusChange: PropTypes.func.isRequired
};

export default movieScreenProps;
