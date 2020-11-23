import React, {useCallback, useRef, useState} from "react";
import {typesMap} from "../../prop-types/prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const MAX_DURATION_PERCENT = 100;

const PlayerScreen = () => {
  const initialState = {
    isFullScreen: false,
      duration: 0,
      currentPercent: 0,
      isPlaying: false
  };
  const [playerProperties, setPlayerProperties] = useState(initialState);
  const {isFullScreen, duration, currentPercent, isPlaying} = playerProperties;
  const videoRef = useRef();

  const togglePlayPause = useCallback(() => {
    return video.paused ? video.play() : video.pause();
  }, [video]);

  const changeToFullScreen = useCallback(() => {
    video.requestFullscreen();
  }, [video]);

  const handelBtnPlayClick = useCallback(() => {
    togglePlayPause(videoRef.current);
    setPlayerProperties(Object.assign(
      {},
      playerProperties,
      {isPlaying: !isPlaying}
    ), [setPlayerProperties, playerProperties, isPlaying]);
  });

  const handleVideoClick = useCallback((evt) => {
    if (evt.target.tagName === `VIDEO`) {
      togglePlayPause(evt.target);
      setPlayerProperties(Object.assign(
        {},
        playerProperties,
        {isPlaying: !isPlaying}
      ), [setPlayerProperties, playerProperties, isPlaying]);
    }
  });

  const handleDurationChange = useCallback((evt) => {
    const {duration, currentTime} = evt.target;
    const currentPercent = currentTime * MAX_DURATION_PERCENT / duration;
    setPlayerProperties(Object.assign(
      {},
      playerProperties,
      currentPercent
    ), [setPlayerProperties, playerProperties, currentPercent]);
  });

  const handleMoiveCanPlay = useCallback((evt) => {
    const {duration} = evt.target;
    setPlayerProperties(Object.assign(
      {},
      playerProperties,
      duration
    ), [setPlayerProperties, playerProperties, duration]);
  });

  const handleFullScreenChange = useCallback(() => {
    this.changeToFullScreen(videoRef.current);
  }, [videoRef]);

  const {movies, match: {params: {id}}} = props;
  const currentMovie = movies.find((movie) => movie.id === +id);
  const {videoURL, previewURL, title} = currentMovie;
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor(duration % 3600 / 60);
  const seconds = Math.floor(duration % 3600 % 60);

  return (
    <div className="player">
      <video
        ref={this.videoRef}
        className="player__video"
        poster={previewURL}
        src={videoURL}
        onClick={this.handleVideoClick}
        onTimeUpdate={this.handleDurationChange}
        onCanPlay={this.handleMoiveCanPlay}
        autoPlay={true}
      />

      <Link to={`/`} type="button" className="player__exit" style={{textDecoration: `none`}}>Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={this.state.currentPercent} max="100"></progress>
            <div className="player__toggler" style={{left: `${this.state.currentPercent}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{`${hours}:${minutes}:${seconds}`}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={this.handelBtnPlayClick} type="button" className="player__play">
            {
              isPlaying
                ? (
                  <>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </>
                )
                : (
                  <>
                    <svg viewBox="0 0 14 21" width="14" height="21">
                      <use xlinkHref="#pause"></use>
                    </svg>
                    <span>Pause</span>
                  </>
                )
            }
          </button>
          <div className="player__name">{title}</div>

          <button onClick={this.handleFullScreenChange} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerScreen.propTypes = {
  movie: typesMap.movie,
  match: typesMap.match,
  movies: typesMap.movies
};

const mapStateToProps = (state) => ({
  movies: state.DATA.movies
});

export {PlayerScreen};
export default connect(mapStateToProps)(PlayerScreen);
