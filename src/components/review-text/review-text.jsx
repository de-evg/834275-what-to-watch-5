import React, {useCallback} from "react";
import reviewTextProps from "./review-text.props";

const reviewLength = {
  MIN: 50,
  MAX: 400
};

const ReviewText = ({value, onTextInput}) => {
  const handleTextReviewChange = useCallback((evt) => {
    onTextInput(evt.target.value);
  });

  return (
    <textarea
      className="add-review__textarea"
      name="review-text" id="review-text"
      onInput={handleTextReviewChange}
      minLength={reviewLength.MIN}
      maxLength={reviewLength.MAX}
      placeholder="Review text"
      defaultValue={value}
    >
    </textarea>
  );
};

ReviewText.propTypes = reviewTextProps;
export default ReviewText;
