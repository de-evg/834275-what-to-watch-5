import React from "react";
import {typesMap} from "../../prop-types/prop-types";

const Review = (props) => {
  const {text, date, author, userRating} = props.review;
  const month = date.getMonth();
  const day = date.getDate();
  const yeat = date.getYear();
  const updatedData = `${month} ${day}, ${year}`;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}}</cite>
          <time className="review__date" dateTime="2016-12-24">{updatedData}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{userRating}</div>
    </div>
  );
};

export default Review;
