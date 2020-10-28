
import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {typesMap} from "../../prop-types/prop-types";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentWillUnmount() {
    this.props.removeTimeDelay();
  }

  handleMouseOut() {
    this.props.onMouseOut();
  }

  handleMouseOver(evt) {
    let target = evt.target;
    if (target.tagName === `IMG` || target.tagName === `A`) {
      target = evt.target.parentElement;
    }
    this.props.onMouseOver(+target.parentElement.id);
  }

  render() {
    const {movie, onMouseOut, id} = this.props;
    const {title, previewURL} = movie;

    return (
      <article
        id={id}
        className="small-movie-card catalog__movies-card"
        onMouseOver={this.handleMouseOver}
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
  }
}

SmallMovieCard.propTypes = {
  movie: typesMap.movie,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  id: typesMap.id,
  removeTimeDelay: PropTypes.func.isRequired
};

export default SmallMovieCard;
