import PropTypes from "prop-types";

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
  movie: PropTypes.oneOfType([PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    genre: PropTypes.string,
    release: PropTypes.number,
    posterURL: PropTypes.string.isRequired,
    previewURL: PropTypes.string.isRequired,
    rating: PropTypes.string,
    ratingLevel: PropTypes.string,
    ratingCount: PropTypes.number,
    description: PropTypes.string,
    director: PropTypes.string,
    actors: PropTypes.array,
    videoURL: PropTypes.string,
    isInWatchList: PropTypes.bool
  }), PropTypes.string]),
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
