const getGenres = (movies) => {
  const genres = new Set();
  if (movies.length) {
    genres.add(`All genres`);
  }
  movies.forEach((movie) => genres.add(movie.genre));

  return Array.from(genres);
};

export {getGenres};
