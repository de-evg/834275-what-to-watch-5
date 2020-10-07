const FILMS_COUNT = 10;

const generateFilm = (id) => {
  return {
    id,
    title: `The Grand Budapest - ${id}`,
    genre: `drama`,
    release: 2014,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    rating: `8,9`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege. Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  };
};

const generateFilms = () => {
  const films = [];
  for (let i = 0; i < FILMS_COUNT; i++) {
    films.push(generateFilm());
  }

  return films;
};

const films = generateFilms();

export {films};
