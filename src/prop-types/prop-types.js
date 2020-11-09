import PropTypes from "prop-types";

const movie = PropTypes.shape({
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
});

const movieReview = PropTypes.shape({
  text: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  author: PropTypes.string.isRequired,
  userRating: PropTypes.string.isRequired
});

const movieReviews = PropTypes.oneOfType([PropTypes.array, PropTypes.arrayOf(movieReview)]).isRequired;

const review = PropTypes.shape({
  movieReviews
});

const typesMap = {
  movie,
  movies: PropTypes.arrayOf(movie),
  filteredMovies: PropTypes.arrayOf(movie),
  promo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    posterURL: PropTypes.string.isRequired,
    previewURL: PropTypes.string.isRequired,
  }),
  location: PropTypes.shape({
    movieProps: PropTypes.shape({
      movie
    })
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  genre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  isActive: PropTypes.bool.isRequired,
  onGenreFilterChange: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onNavItemChange: PropTypes.func.isRequired,
  navItem: PropTypes.shape({
    activeItem: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onNavItemChange: PropTypes.func.isRequired
  }),
  navItems: PropTypes.arrayOf(PropTypes.string),
  activeItem: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  review,
  movieReviews,
  movieReview,
  renderTab: PropTypes.func.isRequired,
  activeNavItem: PropTypes.string.isRequired,
  handleNavItemChange: PropTypes.func.isRequired,
  renderRatingStars: PropTypes.func.isRequired,
  renderReviewText: PropTypes.func.isRequired,
  textReview: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onTextInput: PropTypes.func.isRequired,
  activeStar: PropTypes.string.isRequired,
  onRatingInputChange: PropTypes.func.isRequired,
  starId: PropTypes.string.isRequired,
  starValue: PropTypes.number.isRequired,
  defaultValue: PropTypes.string.isRequired,
  activeMovieID: PropTypes.number.isRequired,
  renderSmallVideoPlayer: PropTypes.func.isRequired,
  renderSmallMovieCard: PropTypes.func.isRequired,
  removeTimeDelay: PropTypes.func.isRequired,
  showedMoviesCount: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  renderBtn: PropTypes.func.isRequired,
  resetShowedMovies: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  userAvatar: PropTypes.string,
  authError: PropTypes.authError,
  resetReviews: PropTypes.func.isRequired,
  loadReviews: PropTypes.func.isRequired,
  onFavoriteStatusChange: PropTypes.func.isRequired,
  onFavoriteStatusChanges: PropTypes.func.isRequired,
};

export {typesMap};
