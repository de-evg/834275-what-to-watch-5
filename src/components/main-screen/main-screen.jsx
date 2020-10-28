import React, {PureComponent} from "react";
import {connect} from "react-redux";

import MovieList from "../movie-list/movie-list";
import GenreList from "../genre-list/genre-list";
import ShowMore from "../show-more/show-more";

import withActiveMovie from "../../hocs/with-active-movie";

import {typesMap} from "../../prop-types/prop-types";
import {ActionCreator} from "../../store/action";

const MovieListHOC = withActiveMovie(MovieList);

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
  }

  handleShowMoreClick() {
    const {showedMoviesCount} = this.props;
    this.props.onShowMoreClick(showedMoviesCount);
  }

  render() {
    const {movies, promo, currentGenre, genres, onGenreFilterChange, showedMoviesCount} = this.props;
    const {title, genre, release, posterURL, previewURL} = promo;

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

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
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
              onGenreFilterChange={onGenreFilterChange} />

            <MovieListHOC movies={movies.slice(0, showedMoviesCount)} />
            {
              movies.length > showedMoviesCount 
                ? <ShowMore onClick={this.handleShowMoreClick} /> 
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
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  promo: state.promo,
  genres: state.genres,
  currentGenre: state.currentGenre
});

const mapDispatchToProps = (dispatch) => ({
  onGenreFilterChange(filter) {
    dispatch(ActionCreator.changeFilter(filter));
    dispatch(ActionCreator.filterMovies(filter));
  }
});

MainScreen.propTypes = {
  currentGenre: typesMap.currentGenre,
  promo: typesMap.promo,
  movies: typesMap.movies,
  genres: typesMap.genres,
  onGenreFilterChange: typesMap.onGenreFilterChange,
  onShowMoreClick: typesMap.onShowMoreClick,
  showedMoviesCount: typesMap.showedMoviesCount
};

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
