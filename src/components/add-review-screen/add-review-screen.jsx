import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {typesMap} from "../../prop-types/prop-types";
import {movies} from "../../mocks/movies";

const reviewLength = {
  MIN: 50,
  MAX: 400
};

class AddReviewScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      textReview: ``,
      rating: null
    };

    this.handleTextReviewChange = this.handleTextReviewChange.bind(this);
    this.handlerRatingInputChange = this.handlerRatingInputChange.bind(this);
  }

  handleTextReviewChange(evt) {
    this.setState({
      textReview: evt.target.value
    });
  }

  handlerRatingInputChange(evt) {
    this.setState({
      rating: evt.target.value
    });
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    const {id} = this.props.match.params;
    const currentMovie = movies.filter((movie) => movie.id === +id)[0];
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

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={posterURL} alt={title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={this.handleFormSubmit}>
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={this.handlerRatingInputChange} />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={this.handlerRatingInputChange} />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={this.handlerRatingInputChange} />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={this.handlerRatingInputChange} />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={this.handlerRatingInputChange} />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text" id="review-text"
                onInput={this.handleTextReviewChange}
                minLength={reviewLength.MIN}
                maxLength={reviewLength.MAX}
                placeholder="Review text">{this.state.value}</textarea>
              <div className="add-review__submit">
                {this.state.textReview.length > reviewLength.MIN && this.state.textReview.length <= reviewLength.MAX
                  ? <button className="add-review__btn" type="submit">Post</button>
                  : <button className="add-review__btn" type="submit" disabled>Post</button>
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
  match: typesMap.match
};

export default AddReviewScreen;
