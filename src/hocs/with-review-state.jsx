import React, {PureComponent} from "react";
import RatingStars from "../components/rating-stars/rating-stars";
import ReviewText from "../components/review-text/review-text";

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

    render() {
      const {textReview, rating} = this.state;
      return (
        <Component
          {...this.props}
          textReview={textReview}
          rating={rating}
          renderRatingStars={(value) => (
            <RatingStars
              activeStar={value}
              onRatingInputChange={this.handlerRatingInputChange}
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
