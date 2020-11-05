import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {typesMap} from "../../prop-types/prop-types";

import MovieList from "../movie-list/movie-list";
import UserBlock from "../user-block/user-block";

import withActiveMovie from "../../hocs/with-active-movie";

const MovieListHOC = withActiveMovie(MovieList);

const MyListScreen = ({movies}) => {
  const filteredMovies = movies.filter((movie) => movie.isInWhatchList);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieListHOC movies={filteredMovies} />
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
  );
};

MyListScreen.propTypes = {
  movies: typesMap.movies
};

const mapStateToProps = (state) => ({
  movies: state.DATA.movies,
});

export {MyListScreen};
export default connect(mapStateToProps)(MyListScreen);
