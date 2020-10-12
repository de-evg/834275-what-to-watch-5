
import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter(evt) {
    let target = evt.target;
    if (target.tagName === `IMG` || target.tagName === `A`) {
      target = evt.target.parentElement;
    }
    this.props.onMouseEnter(target.parentElement.id);
  }

  render() {
    const {id, title, poster, onMouseLeave} = this.props;
    return (
      <article
        id={id}
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={onMouseLeave}>
        <div className="small-movie-card__image">
          <Link to={`/films/${id}`} style={{display: `block`}} className="small-movie-card__image">
            <img src={poster} alt={title} width="280" height="175" />
          </Link>
        </div>
        <h3 className="small-movie-card__title">
          <Link to={`/films/${id}`} className="small-movie-card__link">{title}</Link>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default SmallMovieCard;
