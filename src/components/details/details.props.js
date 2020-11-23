import PropTypes from "prop-types";

const detailsProps = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,
    posterURL: PropTypes.string,
    previewURL: PropTypes.string,
    rating: PropTypes.string,
    ratingLevel: PropTypes.string,
    ratingCount: PropTypes.number,
    description: PropTypes.string,
    director: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired,
    videoURL: PropTypes.string,
    isInWatchList: PropTypes.bool
  }),
};

export default detailsProps;
