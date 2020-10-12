import React from "react";
import {render} from "react-dom";
import App from "./components/app/app";
import {movies} from "./mocks/movies";

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  release: 2014,
  previewURL: `/img/bg-the-grand-budapest-hotel.jpg`,
  posterURL: `/img/the-grand-budapest-hotel-poster.jpg`
};

render(
    <App
      promoMovie={promoMovie}
      movies={movies}
    />,
    document.getElementById(`root`)
);
