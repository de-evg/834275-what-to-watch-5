import PropTypes from "prop-types";

const detailsProps = {
  movie: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired
  }),
};

export default detailsProps;
