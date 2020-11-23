import PropTypes from "prop-types";

const tabsProps = {
  movie: PropTypes.shape({
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
  }),
  renderTab: PropTypes.func.isRequired,
  activeNavItem: PropTypes.string.isRequired,
  onNavItemChange: PropTypes.func.isRequired,
  reviews: PropTypes.oneOfType([PropTypes.array, PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    author: PropTypes.string.isRequired,
    userRating: PropTypes.string.isRequired
  }))]).isRequired
};

export default tabsProps;
