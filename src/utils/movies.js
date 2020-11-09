const getGenres = (movies) => {
  const genres = new Set();
  if (movies.length) {
    genres.add(`All genres`);
  }
  movies.forEach((movie) => genres.add(movie.genre));

  return Array.from(genres);
};

const updateMovies = (state, updatedMovie) => {
  const {movies} = state;
  const id = movies.findIndex((movie) => movie.id === updatedMovie.id);

  const updatedMovies = [
    ...movies.slice(0, id),
    updatedMovie,
    ...movies.slice(id + 1)
  ];

  return updatedMovies;
};

export {getGenres, updateMovies};


