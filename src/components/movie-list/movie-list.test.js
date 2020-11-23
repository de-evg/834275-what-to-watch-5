import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import SmallVideoPlayer from "../small-video-palyer/small-video-player";
import {BrowserRouter} from "react-router-dom";

const movieFirst = {
  id: 0,
  title: `The Grand Budapest`,
  genre: `Horror`,
  release: 2014,
  posterURL: `/img/the-grand-budapest-hotel-poster.jpg`,
  previewURL: `/img/bg-the-grand-budapest-hotel.jpg`,
  rating: `8,9`,
  ratingLevel: `Good`,
  ratingCount: 10,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  director: `Wes Andreson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  videoURL: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  isInWatchList: Math.random() <= 1,
  runTime: 146
};

const movieSecond = Object.assign(
    {},
    movieFirst,
    {id: 1}
);

const movies = [movieFirst, movieSecond];

const cardWidthProps = (Component) => {
  return <Component
    movie={movies[1]}
    onMouseOut={() => {}}
    onMouseOver={() => {}}
    removeTimeDelay={() => {}}
    id={movies[1].id}
    key={movies[1].id}
  />;
};

const playerWidthProps = (Component) => {
  return <Component
    movie={movies[0]}
    isPlaying={false}
    onMouseOut={() => {}}
    id={movies[0].id}
    key={movies[0].id}
  />;
};

it(`Should MovieList render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MovieList
            movies={movies}
            activeMovieID={0}
            renderSmallMovieCard={() => cardWidthProps(SmallMovieCard)}
            renderSmallVideoPlayer={() => playerWidthProps(SmallVideoPlayer)}
          />
        </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
