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
    const {movie, onMouseOut, id} = this.props;
    const {videoURL, previewURL} = movie;

    return (
      <article
        id={id}
        className="small-movie-card catalog__movies-card"
      >
        <Link
          to={`/films/${id}`}
          className="small-movie-card__image"
        >
          {
            <video
              className="small-movie-card__image"
              poster={previewURL}
              autoPlay={isPlaying}
              muted
              onMouseOut={onMouseOut}
            >
              <source src={videoURL} width={480} type={`video/mp4`}/>
            </video>
          }
        </Link>
      </article>
    );
  }
}

SmallVideoPlayer.propTypes = {
  movie: typesMap.movie,
  onMouseOut: PropTypes.func.isRequired,
  id: typesMap.id
};

export default SmallVideoPlayer;
