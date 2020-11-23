import PropTypes from "prop-types";

const reviewProps = {
  movieReview: PropTypes.shape({
    text: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    author: PropTypes.string.isRequired,
    userRating: PropTypes.string.isRequired
  })
};

export default reviewProps;
