import React, {useCallback, useRef, useState} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import playerScreenProps from "./player-screen.props";

const MAX_DURATION_PERCENT = 100;

const PlayerScreen = (props) => {
  const initialState = {
    duration: 0,
    currentPercent: 0,
    playedTime: 0,
    isPlaying: false
  };
  const [playerProperties, setPlayerProperties] = useState(initialState);
  const {playedTime, currentPercent, isPlaying} = playerProperties;
  const videoRef = useRef();

  const togglePlayPause = useCallback(() => {
    const video = videoRef.current;
    return video.paused ? video.play() : video.pause();
  }, [videoRef]);

  const changeToFullScreen = useCallback(() => {
    videoRef.current.requestFullscreen();
  }, [videoRef]);

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
      togglePlayPause();
      setPlayerProperties(Object.assign(
          {},
          playerProperties,
          {isPlaying: !isPlaying}
      ), [setPlayerProperties, playerProperties, isPlaying]);
    }
  });

  const handleDurationChange = useCallback((evt) => {
    const {currentTime} = evt.target;
    const percent = runTime
      ? currentTime * MAX_DURATION_PERCENT / runTime
      : 0;
    setPlayerProperties(Object.assign(
        {},
        playerProperties,
        {
          currentPercent: percent,
          playedTime: currentTime
        }
    ), [setPlayerProperties, playerProperties, runTime]);
  });

  const handleMoiveCanPlay = useCallback(() => {
    setPlayerProperties(Object.assign(
        {},
        playerProperties,
        {playedTime: runTime}
    ), [setPlayerProperties, playerProperties, runTime]);
  });

  const handleFullScreenChange = useCallback(() => {
    changeToFullScreen();
  });

  const {movies, match: {params: {id}}} = props;
  const currentMovie = movies.find((movie) => movie.id === +id);
  const {videoURL, previewURL, title, runTime} = currentMovie;
  const hours = Math.floor(runTime / 3600) - Math.floor(playedTime / 3600);
  const minutes = Math.floor(runTime % 3600 / 60) - Math.floor(playedTime % 3600 / 60);
  const seconds = Math.floor(runTime % 3600 % 60) - Math.floor(playedTime % 3600 % 60);

  return (
    <div className="player">
      <video
        ref={videoRef}
        className="player__video"
        poster={previewURL}
        src={videoURL}
        onClick={handleVideoClick}
        onTimeUpdate={handleDurationChange}
        onCanPlay={handleMoiveCanPlay}
        autoPlay={true}
      />

      <Link to={`/`} type="button" className="player__exit" style={{textDecoration: `none`}}>Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={currentPercent} max="100"></progress>
            <div className="player__toggler" style={{left: `${currentPercent}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{`${hours}:${minutes}:${seconds}`}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={handelBtnPlayClick} type="button" className="player__play">
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

          <button onClick={handleFullScreenChange} type="button" className="player__full-screen">
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

PlayerScreen.propTypes = playerScreenProps;

const mapStateToProps = (state) => ({
  movies: state.DATA.movies
});

export {PlayerScreen};
export default connect(mapStateToProps)(PlayerScreen);
