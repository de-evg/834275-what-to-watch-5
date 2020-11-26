import React, {useCallback, useState} from "react";
import RatingStars from "../../components/rating-stars/rating-stars";
import ReviewText from "../../components/review-text/review-text";


const withReviewState = (Component) => {
  const WithReviewState = (props) => {
    const initialState = {
      textReview: ``,
      rating: ``
    };

    const [review, setReview] = useState(initialState);
    const {textReview, rating} = review;

    const handleTextReviewChange = useCallback((value) => {
      setReview(Object.assign(
          {},
          review,
          {textReview: value}
      ));
    });

    const handlerRatingInputChange = useCallback((value) => {
      setReview(Object.assign(
          {},
          review,
          {rating: value}
      ));
    });

    const resetReview = useCallback(() => {
      setReview(initialState);
    });

    const checkRating = useCallback(() => {
      return rating !== ``;
    }, [rating]);

    return (
      <Component
        {...props}
        textReview={textReview}
        rating={rating}
        onReviewReset={resetReview}
        renderRatingStars={(value) => (
          <RatingStars
            activeStar={value}
            onRatingInputChange={handlerRatingInputChange}
            checkRating={checkRating}
          />
        )}
        renderReviewText={(value) => (
          <ReviewText
            value={value}
            onTextInput={handleTextReviewChange}
          />
        )}
      />
    );
  };

  return WithReviewState;
};

export default withReviewState;
