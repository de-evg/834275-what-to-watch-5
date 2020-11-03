import {Rating, RatingRange} from "../const";

const adaptServerToClient = (movie) => {
  const getRatingLevel = (rating) => {
    if (rating >= RatingRange.VERY_GOOD) {
      return Rating.AWESOME;
    }
    if (rating >= RatingRange.GOOD) {
      return Rating.VERY_GOOD;
    }
    if (rating >= RatingRange.NORMAL) {
      return Rating.GOOD;
    }
    if (rating >= RatingRange.BAD) {
      return Rating.NORMAL;
    }
    return Rating.BAD;
  };

  const adaptedMovie = Object.assign(
      {},
      movie,
      {
        title: name,
        posterURL: movie.poster_image,
        previewURL: movie.preview_image,
        videoURL: movie.video_link,
        ratingCount: movie.scores_count,
        actors: movie.starring,
        runTime: movie.run_time,
        release: movie.released,
        isInWhatchList: movie.is_favorite,
        bgImage: movie.background_image,
        bgColor: movie.background_color,
        previewVideoLink: movie.preview_video_link,
        rating: `${movie.rating}`,
        ratingLevel: getRatingLevel(movie.rating)
      }
  );

  delete adaptedMovie.poster_image;
  delete adaptedMovie.preview_image;
  delete adaptedMovie.video_link;
  delete adaptedMovie.scores_count;
  delete adaptedMovie.run_time;
  delete adaptedMovie.background_image;
  delete adaptedMovie.background_color;
  delete adaptedMovie.preview_video_link;

  return adaptedMovie;
};

export {adaptServerToClient};
