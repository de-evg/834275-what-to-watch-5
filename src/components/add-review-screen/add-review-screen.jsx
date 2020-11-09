import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import {typesMap} from "../../prop-types/prop-types";
import {postReview} from "../../store/api-actions";
import {UserBlock} from "../user-block/user-block";

const reviewLength = {
  MIN: 50,
  MAX: 400
};

class AddReviewScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const {onFormSubmit, textReview, rating, match: {params: {id}}} = this.props;
    onFormSubmit(id, {rating, comment: textReview});
    this.props.history.push(`${AppRoute.FILM}${id}`);
  }

  render() {
    const {movies, renderRatingStars, renderReviewText, textReview, rating, match: {params: {id}}} = this.props;
    const currentMovie = movies.find((movie) => movie.id === +id);
    const {title, previewURL, posterURL} = currentMovie;

    return (
      <section className="movie-card movie-card--full">
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

            <UserBlock />
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={posterURL} alt={title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={this.handleFormSubmit}>
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
                    disabled={textReview.length < reviewLength.MIN || textReview.length >= reviewLength.MAX}
                  >
                    Post
                  </button>
                }
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}

AddReviewScreen.propTypes = {
  match: typesMap.match,
  renderRatingStars: typesMap.renderRatingStars,
  renderReviewText: typesMap.renderReviewText,
  textReview: typesMap.textReview,
  rating: typesMap.rating,
  movies: typesMap.movies,
  onFormSubmit: typesMap.onFormSubmit,
  onReviewReset: typesMap.onReviewReset
};

const mapStateToProps = (state) => ({
  movies: state.DATA.movies
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(id, body) {
    dispatch(postReview(id, body));
  }
});

export {AddReviewScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewScreen);
