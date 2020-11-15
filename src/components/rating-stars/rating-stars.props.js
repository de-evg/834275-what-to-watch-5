import PropTypes from "prop-types";

const ratingStarsProps = {
  activeStar: PropTypes.string.isRequired,
  onRatingInputChange: PropTypes.func.isRequired
};

export default ratingStarsProps;
