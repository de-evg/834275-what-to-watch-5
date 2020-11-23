import PropTypes from "prop-types";

const mainScreenProps = {
  currentGenre: PropTypes.string.isRequired,
  promo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    posterURL: PropTypes.string.isRequired,
    previewURL: PropTypes.string.isRequired,
  }),
  filteredMovies: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreFilterChange: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  showedMoviesCount: PropTypes.number.isRequired,
  resetShowedMovies: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onFavoriteStatusChange: PropTypes.func.isRequired
};

export default mainScreenProps;
