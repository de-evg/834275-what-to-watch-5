import React from "react";
import reviewProps from "./review.props";

const Review = (props) => {
  const {text, date, author, userRating} = props.movieReview;
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  const updatedData = date.toLocaleDateString(`en-US`, {year: `numeric`, month: `long`, day: `numeric`});

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={`${year}-${month}-${day}`}>{updatedData}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{userRating}</div>
    </div>
  );
};

Review.propTypes = reviewProps;

export default Review;
