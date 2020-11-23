import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";
import {getRandomInteger} from "../../utils/common";

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

const movie = {
  id: 5,
  title: `The Grand Budapest - ${5}`,
  genre: genres[getRandomInteger(0, genres.length - 1)],
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

const generateReview = (id) => ({
  id,
  text: `Some text review ${id}`,
  date: new Date(),
  author: `User ${id}`,
  userRating: `8,9`
});

const REVIEW_CONT = 10;
const reviews = [];
for (let i = 0; i >= REVIEW_CONT; i++) {
  reviews.push(generateReview());
}

it(`Should Tabs render correctly`, () => {
  const tree = renderer
    .create(<Tabs
      renderTab={() => {}}
      movie={movie}
      activeNavItem={`Overview`}
      handleNavItemChange={() => {}}
      reviews={reviews}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
