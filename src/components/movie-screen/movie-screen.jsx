import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import movieScreenProps from "./movie-screen.props";

import MovieList from "../movie-list/movie-list";
import Tabs from "../tabs/tabs";

import withActiveTab from "../../hocs/with-active-tab/with-active-tab";
import withActiveMovie from "../../hocs/with-active-movie/with-active-movie";
import UserBlock from "../user-block/user-block";
import {fetchReviews} from "../../store/api-actions";
import {ActionCreator} from "../../store/action";
import {changeFavoriteStatus} from "../../store/api-actions";
import {AppRoute, AuthorizationStatus} from "../../const";

const TabsHOC = withActiveTab(Tabs);
const MovieListHOC = withActiveMovie(MovieList);

const SIMILAR_COUNT = 4;
const DEFAULT_FAVORITE = 0;

const MovieScreen = ({movies, reviews, onFavoriteStatusChange, loadReviews, resetReviews, authorizationStatus, history, match: {params: {id}}}) => {
  const currentMovie = movies.find((movie) => movie.id === +id);
  const {
    title,
    genre,
    release,
    posterURL,
    previewURL,
    isInWatchList
  } = currentMovie;
  const similarMovies = movies.filter((movie) => movie.genre === genre && movie.id !== currentMovie.id).slice(0, SIMILAR_COUNT);

  useEffect(() => {
    loadReviews(id);
    return () => resetReviews();
  }, [loadReviews, resetReviews, id]);

  const handleFavoriteBtnClick = useCallback(() => {
    switch (authorizationStatus) {
      case AuthorizationStatus.AUTH:
        onFavoriteStatusChange(id, Number(!isInWatchList));
        break;
      case AuthorizationStatus.NO_AUTH:
        onFavoriteStatusChange(id, DEFAULT_FAVORITE);
        history.push(AppRoute.LOGIN);
        break;
    }
  }, [id, isInWatchList, onFavoriteStatusChange, authorizationStatus]);

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={previewURL} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <UserBlock />
          </header>

          <div className="movie-card__wrap">
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
                <Link
                  to={`/films/${id}/review`}
                  className="btn movie-card__button">Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterURL} alt={title} width="218" height="327" />
            </div>

            <TabsHOC movie={currentMovie} reviews={reviews}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieListHOC movies={similarMovies} />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

MovieScreen.propTypes = movieScreenProps;

const mapStateToProps = (state) => ({
  movies: state.MOVIE.movies,
  reviews: state.REVIEWS.reviews,
  authorizationStatus: state.USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews(id) {
    dispatch(fetchReviews(id));
  },
  resetReviews() {
    dispatch(ActionCreator.resetReviews());
  },
  onFavoriteStatusChange(id, status) {
    dispatch(changeFavoriteStatus(id, status));
  }
});

export {MovieScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);
