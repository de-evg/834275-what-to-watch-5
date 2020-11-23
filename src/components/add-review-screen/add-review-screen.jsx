import React, {PureComponent} from "react";
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

class AddReviewScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const {onFormSubmit, textReview, rating, match: {params: {id}}} = this.props;
    onFormSubmit(id, {rating, comment: textReview});
    this.props.history.push(`${AppRoute.FILMS}/${id}`);
  }

  componentDidMount() {
    const {loadMovie, match: {params: {id}}} = this.props;
    loadMovie(id);
  }

  render() {
    if (this.props.movie === ``) {
      return null;
    }
    const {movie, renderRatingStars, renderReviewText, textReview, rating, user} = this.props;
    const {title, previewURL, posterURL, id} = movie;
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
  }
}

AddReviewScreen.propTypes = AddReviewScreenProps;

const mapStateToProps = (state) => ({
  movie: state.DATA.movie,
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
