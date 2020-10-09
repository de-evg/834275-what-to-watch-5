import React from "react";
import {render} from "react-dom";
import App from "./components/app/app";
import {movies} from "./mocks/movies";

const promoMovie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE: 2014
};

render(
    <App
      promoTitle={promoMovie.TITLE}
      promoGenre={promoMovie.GENRE}
      promoRelease={promoMovie.RELEASE}
      movies={movies}
    />,
    document.getElementById(`root`)
);
