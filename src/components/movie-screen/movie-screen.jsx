import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {typesMap} from "../../prop-types/prop-types";

import MovieList from "../movie-list/movie-list";
import Tabs from "../tabs/tabs";

import withActiveTab from "../../hocs/with-active-tab";
import withActiveMovie from "../../hocs/with-active-movie";

const TabsHOC = withActiveTab(Tabs);
const MovieListHOC = withActiveMovie(MovieList);

const SIMILAR_COUNT = 4;

const MovieScreen = ({movies, match: {params: {id}}}) => {
  const currentMovie = movies.find((movie) => movie.id === +id);
  const {
    title,
    genre,
    release,
    posterURL,
    previewURL
  } = currentMovie;
  const similarMovies = movies.filter((movie) => movie.genre === genre && movie.id !== currentMovie.id).slice(0, SIMILAR_COUNT);

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

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{release}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
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

            <TabsHOC movie={currentMovie}/>
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

MovieScreen.propTypes = {
  match: typesMap.match,
  movies: typesMap.movies
};


const mapStateToProps = (state) => ({
  movies: state.DATA.movies
});

export {MovieScreen};
export default connect(mapStateToProps)(MovieScreen);
