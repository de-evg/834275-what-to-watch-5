
import React, {useCallback} from "react";
import {Link} from "react-router-dom";
import smallMovieCardProps from "./small-movie-card.props";

const SmallMovieCard = ({movie, onMouseOver, onMouseOut, id}) => {
  const {title, previewURL} = movie;

  const handleMouseOver = useCallback((evt) => {
    let target = evt.target;
    if (target.tagName === `IMG` || target.tagName === `A`) {
      target = evt.target.parentElement;
    }
    onMouseOver(+target.parentElement.id);
  }, [onMouseOver]);

  return (
    <article
      key={`smallCard-${id}`}
      id={id}
      className="small-movie-card catalog__movies-card"
      onMouseOver={handleMouseOver}
      onMouseOut={onMouseOut}>
      <div className="small-movie-card__image">
        <Link
          to={`/films/${id}`}
          style={{display: `block`, zIndex: 4}}
          className="small-movie-card__image" >
          <img src={previewURL} alt={title} width="280" height="175" />
        </Link>
      </div>
      <h3 className="small-movie-card__title">
        <Link
          to={`/films/${id}`}
          className="small-movie-card__link">{title}
        </Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = smallMovieCardProps;

export default SmallMovieCard;
