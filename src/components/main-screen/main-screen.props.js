import PropTypes from "prop-types";
import {movieProps} from "../../prop-types/prop-types";

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
  filteredMovies: PropTypes.arrayOf(movieProps),
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreFilterChange: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  showedMoviesCount: PropTypes.number.isRequired,
  resetShowedMovies: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onFavoriteStatusChange: PropTypes.func.isRequired
};

export default mainScreenProps;
