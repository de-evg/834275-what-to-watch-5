import {getRandomInteger} from "../utils/common";

const MOVIES_COUNT = 10;

const genres = [
  `Drama`,
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-fi`,
  `Thrillers`
];

const generateMovie = (id) => {
  return {
    id,
    title: `The Grand Budapest - ${id}`,
    genre: genres[getRandomInteger(0, genres.length - 1)],
    release: 2014,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    rating: `8,9`,
    ratingLevel: `Good`,
    ratingCount: 10,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege. Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    isInWhatchList: Math.random() <= 1
  };
};

const generateMovies = () => {
  const films = [];
  for (let i = 0; i < MOVIES_COUNT; i++) {
    films.push(generateMovie(i));
  }

  return films;
};

const movies = generateMovies();

export {movies};
