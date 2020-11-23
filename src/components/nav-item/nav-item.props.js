import PropTypes from "prop-types";

const navItemProps = {
  navItem: PropTypes.shape({
    activeItem: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onNavItemChange: PropTypes.func.isRequired
  })
};

export default navItemProps;
