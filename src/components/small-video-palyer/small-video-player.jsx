import React from "react";
import {Link} from "react-router-dom";
import smallVideoPlayerProps from "./small-video-player.props";

const SmallVideoPlayer = ({movie: {videoURL, previewURL}, isPlaying, onMouseOut, id}) => (
  <article
    key={`smallPlayer-${id}`}
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
          <source src={videoURL} type={`video/mp4`}/>
        </video>
      }
    </Link>
  </article>
);

SmallVideoPlayer.propTypes = smallVideoPlayerProps;

export default SmallVideoPlayer;
