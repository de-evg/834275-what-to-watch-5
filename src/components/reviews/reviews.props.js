import PropTypes from "prop-types";

const reviewsProps = {
  movieReviews: PropTypes.oneOfType([PropTypes.array, PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    author: PropTypes.string.isRequired,
    userRating: PropTypes.string.isRequired
  }))]).isRequired
};

export default reviewsProps;
