import React, {useCallback} from "react";
import {connect} from "react-redux";
import {getFilteredMovies} from "../../store/selectors";

import MovieList from "../movie-list/movie-list";
import GenreList from "../genre-list/genre-list";
import ShowMore from "../show-more/show-more";
import UserBlock from "../user-block/user-block";

import withActiveMovie from "../../hocs/with-active-movie/with-active-movie";

import {ActionCreator} from "../../store/action";
import {Link} from "react-router-dom";
import {changeFavoriteStatus} from "../../store/api-actions";
import mainScreenProps from "./main-screen.props";
import {AppRoute, AuthorizationStatus} from "../../const";

const MovieListHOC = withActiveMovie(MovieList);

const MainScreen = ({showedMoviesCount, onShowMoreClick, onGenreFilterChange, resetShowedMovies,
  onFavoriteStatusChange, promo, filteredMovies, currentGenre, genres, authorizationStatus, history}) => {
  const {title, genre, release, posterURL, previewURL, id, isInWatchList} = promo;

  const handleShowMoreClick = useCallback(() => {
    onShowMoreClick(showedMoviesCount);
  }, [showedMoviesCount, onShowMoreClick]);

  const handleFilterChange = useCallback((filter) => {
    resetShowedMovies();
    onGenreFilterChange(filter);
  }, [onGenreFilterChange, resetShowedMovies]);

  const handleFavoriteBtnClick = useCallback(() => {
    switch (authorizationStatus) {
      case AuthorizationStatus.AUTH:
        const updatedStatus = Number(!isInWatchList);
        onFavoriteStatusChange(id, updatedStatus);
        break;
      case AuthorizationStatus.NO_AUTH:
        history.push(AppRoute.LOGIN);
        break;
    }
  }, [onFavoriteStatusChange, isInWatchList, id, authorizationStatus]);

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={previewURL} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <UserBlock />
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={posterURL} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{release}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${id}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                <button onClick={handleFavoriteBtnClick} className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    {
                      isInWatchList && authorizationStatus === AuthorizationStatus.AUTH
                        ? <use xlinkHref="#in-list" />
                        : <use xlinkHref="#add" />
                    }
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList
            genres={genres}
            currentGenre={currentGenre}
            onGenreFilterChange={handleFilterChange} />

          <MovieListHOC movies={filteredMovies.slice(0, showedMoviesCount)} />
          {
            filteredMovies.length > showedMoviesCount
              ? <ShowMore onClick={handleShowMoreClick} />
              : null
          }
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

MainScreen.propTypes = mainScreenProps;

const mapStateToProps = (state) => ({
  filteredMovies: getFilteredMovies(state),
  promo: state.MOVIE.promo,
  genres: state.MOVIE.genres,
  currentGenre: state.MOVIE.currentGenre,
  authorizationStatus: state.USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onGenreFilterChange(filter) {
    dispatch(ActionCreator.changeFilter(filter));
  },
  onFavoriteStatusChange(id, status) {
    dispatch(changeFavoriteStatus(id, status));
    dispatch(ActionCreator.changePromoFavoriteStatus());
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
