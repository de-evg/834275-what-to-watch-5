import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import {postReview, fetchMovie} from "../../store/api-actions";
import {UserBlock} from "../user-block/user-block";
import AddReviewScreenProps from "./add-review-screen.props";

const reviewLength = {
  MIN: 50,
  MAX: 400
};

const AddReviewScreen = (props) => {
  const {
    movie,
    renderRatingStars,
    renderReviewText,
    textReview,
    rating,
    user,
    history,
    onFormSubmit,
    match: {params: {id}},
    loadMovie
  } = props;

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();
    onFormSubmit(id, {rating, comment: textReview});
    history.push(`${AppRoute.FILMS}/${id}`);
  }, [history, onFormSubmit, textReview, rating, id]);

  useEffect(() => {
    loadMovie(id);
  }, [loadMovie, id]);

  const {title, previewURL, posterURL} = movie;
  const isDisabled = textReview.length < reviewLength.MIN || textReview.length >= reviewLength.MAX || rating === ``;

  return (<section className="movie-card movie-card--full">
    <div className="movie-card__header">
      <div className="movie-card__bg">
        <img src={previewURL} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link
                to={`/films/${id}`}
                className="breadcrumbs__link">{title}
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>

        <UserBlock authorizationStatus={user.authorizationStatus} userAvatar={user.userAvatar}/>
      </header>

      <div className="movie-card__poster movie-card__poster--small">
        <img src={posterURL} alt={title} width="218" height="327" />
      </div>
    </div>

    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
        <div className="rating">
          {renderRatingStars(rating)}
        </div>

        <div className="add-review__text">
          {renderReviewText(textReview)}
          <div className="add-review__submit">
            {
              <button
                className="add-review__btn"
                type="submit"
                disabled={isDisabled}
              >
              Post
              </button>
            }
          </div>

        </div>
      </form>
    </div>
  </section>);
};

AddReviewScreen.propTypes = AddReviewScreenProps;

const mapStateToProps = (state) => ({
  movie: state.MOVIE.movie,
  user: state.USER
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(id, body) {
    dispatch(postReview(id, body));
  },
  loadMovie(id) {
    dispatch(fetchMovie(id));
  }
});

export {AddReviewScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewScreen);
