import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {typesMap} from "../../prop-types/prop-types";

class SmallVideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };
  }

  componentDidMount() {
    this.setState({
      isPlaying: true
    });
  }

  render() {
    const {isPlaying} = this.state;
    const {movie, onMouseLeave} = this.props;
    const {id, videoURL, previewURL} = movie;

    return (
      <article
        id={id}
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={onMouseLeave}>
        <Link
          to={`/films/${id}`}
          style={{display: `block`, zIndex: 4}}
          className="small-movie-card__image" >
          {isPlaying &&
          <video
            className="small-movie-card__image"
            poster={previewURL}
            autoPlay={isPlaying}
            muted
          >
            <source src={videoURL} width={480} type={`video/mp4`}/>
          </video>}
        </Link>
      </article>
    );
  }
}

SmallVideoPlayer.propTypes = {
  movie: typesMap.movie,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default SmallVideoPlayer;
