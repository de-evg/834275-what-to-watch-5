import PropTypes from "prop-types";
import {movieProps} from "../../prop-types/prop-types";

const AddReviewScreenProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    }),
  }),
  history: PropTypes.object.isRequired,
  renderRatingStars: PropTypes.func.isRequired,
  renderReviewText: PropTypes.func.isRequired,
  textReview: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  movie: PropTypes.oneOfType([movieProps, PropTypes.string]),
  onFormSubmit: PropTypes.func.isRequired,
  user: PropTypes.shape({
    authorizationStatus: PropTypes.string.isRequired,
    userID: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    userAvatar: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    authError: PropTypes.bool.isRequired
  }),
  loadMovie: PropTypes.func.isRequired
};

export default AddReviewScreenProps;
