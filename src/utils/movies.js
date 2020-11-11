const getGenres = (movies) => {
  const genres = new Set();
  if (movies.length) {
    genres.add(`All genres`);
  }
  movies.forEach((movie) => genres.add(movie.genre));

  return Array.from(genres);
};

const updateMovies = (movies, updatedMovie) => {
  const id = movies.findIndex((movie) => movie.id === updatedMovie.id);

  return [...movies.slice(0, id), updatedMovie, ...movies.slice(id + 1)];
};

export {getGenres, updateMovies};


