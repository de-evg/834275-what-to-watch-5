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
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    posterURL: PropTypes.string.isRequired,
    previewURL: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired,
    videoURL: PropTypes.string.isRequired,
    isInWatchList: PropTypes.bool.isRequired
  }), PropTypes.object]),
  onFormSubmit: PropTypes.func.isRequired,
  onReviewReset: PropTypes.func.isRequired,
  user: PropTypes.shape({
    authorizationStatus: PropTypes.string.isRequired,
    userID: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    userAvatar: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    authError: PropTypes.bool.isRequired
  }),
  loadMovie: PropTypes.func.isRequired,
  movieIsLoaded: PropTypes.bool.isRequired
};

export default AddReviewScreenProps;
