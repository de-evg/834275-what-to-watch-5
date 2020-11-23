import React from "react";
import renderer from "react-test-renderer";
import SmallVideoPlayer from "./small-video-player";
import {BrowserRouter} from "react-router-dom";

const movie = {
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


it(`Should SmallVideoPlayer render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <SmallVideoPlayer
            movie={movie}
            isPlaying={false}
            onMouseOut={() => {}}
            id={movie.id}
          />
        </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
