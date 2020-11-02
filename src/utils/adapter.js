import {Rating, RatingRange} from "../const";

const adaptServerToClient = (movie) => {
  const getRatingLevel = (rating) => {
    let textRating = ``;
    if (rating <= RatingRange.BAD) {
      textRating = Rating.BAD;
    }
    if (rating > RatingRange.BAD && rating <= RatingRange.NORMAL) {
      textRating = Rating.NORMAL;
    }
    if (rating > RatingRange.NORMAL && rating <= RatingRange.GOOD) {
      textRating = Rating.GOOD;
    }
    if (rating > RatingRange.GOOD && rating <= RatingRange.VERY_GOOD) {
      textRating = Rating.VERY_GOOD;
    }
    if (rating > RatingRange.VERY_GOOD) {
      textRating = Rating.AWESOME;
    }
    return textRating;
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
        ratingLevel: getRatingLevel(movie.scores_count)
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
