import React, {PureComponent} from "react";
import RatingStars from "../../components/rating-stars/rating-stars";
import ReviewText from "../../components/review-text/review-text";

const withReviewState = (Component) => {
  class WithReviewState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        textReview: ``,
        rating: ``
      };

      this.handleTextReviewChange = this.handleTextReviewChange.bind(this);
      this.handlerRatingInputChange = this.handlerRatingInputChange.bind(this);
      this.resetReview = this.resetReview.bind(this);
      this.checkRating = this.checkRating.bind(this);
    }

    handleTextReviewChange(value) {
      this.setState({
        textReview: value
      });
    }

    handlerRatingInputChange(value) {
      this.setState({
        rating: value
      });
    }

    resetReview() {
      this.setState({
        textReview: ``,
        rating: ``
      });
    }

    checkRating() {
      return this.state !== ``;
    }

    render() {
      const {textReview, rating} = this.state;
      return (
        <Component
          {...this.props}
          textReview={textReview}
          rating={rating}
          onReviewReset={this.resetReview}
          renderRatingStars={(value) => (
            <RatingStars
              activeStar={value}
              onRatingInputChange={this.handlerRatingInputChange}
              checkRating={this.checkRating}
            />
          )}
          renderReviewText={(value) => (
            <ReviewText
              value={value}
              onTextInput={this.handleTextReviewChange}
            />
          )}
        />
      );
    }
  }

  return WithReviewState;
};

export default withReviewState;
