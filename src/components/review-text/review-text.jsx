import React, {useCallback} from "react";
import {typesMap} from "../../prop-types/prop-types";

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

ReviewText.propTypes = {
  value: typesMap.value,
  onTextInput: typesMap.onTextInput
};

export default ReviewText;
