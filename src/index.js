import React from "react";
import {render} from "react-dom";
import App from "./components/app/app";

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
    />,
    document.getElementById(`root`)
);
