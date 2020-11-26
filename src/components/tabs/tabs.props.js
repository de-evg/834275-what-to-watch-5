import PropTypes from "prop-types";
import {movieProps} from "../../prop-types/prop-types";

const tabsProps = {
  movie: movieProps,
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
