import PropTypes from "prop-types";

const ratingStarProps = {
  starId: PropTypes.string.isRequired,
  starValue: PropTypes.number.isRequired,
  onRatingInputChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default ratingStarProps;
