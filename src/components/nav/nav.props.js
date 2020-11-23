import PropTypes from "prop-types";

const navProps = {
  navItems: PropTypes.arrayOf(PropTypes.string),
  activeItem: PropTypes.string.isRequired,
  onNavItemChange: PropTypes.func.isRequired
};

export default navProps;
