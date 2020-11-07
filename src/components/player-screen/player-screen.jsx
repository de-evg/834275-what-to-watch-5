import React, {createRef, PureComponent} from "react";
import {typesMap} from "../../prop-types/prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const MAX_DURATION_PERCENT = 100;

class PlayerScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = createRef();

    this.handelBtnPlayClick = this.handelBtnPlayClick.bind(this);
    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleMoiveCanPlay = this.handleMoiveCanPlay.bind(this);
    this.handleFullScreenChange = this.handleFullScreenChange.bind(this);

    this.state = {
      isFullScreen: false,
      duration: 0,
      currentPercent: 0,
      isPlaying: false
    };
  }

  openFullScreen() {

  }

  togglePlayPause(video) {
    return video.paused ? video.play() : video.pause();
  }

  changeToFullScreen(video) {
    video.requestFullscreen();
  }

  handelBtnPlayClick() {
    this.togglePlayPause(this.videoRef.current);
    this.setState({
      isPlaying: !this.state.isPlaying
    });
  }

  handleVideoClick(evt) {
    if (evt.target.tagName === `VIDEO`) {
      this.togglePlayPause(evt.target);
      this.setState({
        isPlaying: !this.state.isPlaying
      });
    }
  }

  handleDurationChange(evt) {
    const {duration, currentTime} = evt.target;
    const currentPercent = currentTime * MAX_DURATION_PERCENT / duration;
    this.setState({
      currentPercent
    });
  }

  handleMoiveCanPlay(evt) {
    const {duration} = evt.target;
    this.setState({
      duration
    });
  }

  handleFullScreenChange() {
    this.changeToFullScreen(this.videoRef.current);
  }

  render() {
    const {movies} = this.props;
    const {id} = this.props.match.params;
    const currentMovie = movies.find((movie) => movie.id === +id);
    const {videoURL, previewURL, title} = currentMovie;
    const {duration, isPlaying} = this.state;
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
  }
}

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
