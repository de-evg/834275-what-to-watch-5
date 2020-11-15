import React from "react";
import renderer from "react-test-renderer";
import Genre from "./genre";


describe(`Render Genre`, () => {
  it(`Should active Genre render correctly`, () => {
    const tree = renderer
          .create(<Genre
            genre={``}
            isActive={true}
            onGenreFilterChange={() => {}}
          />)
          .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should unactive Genre render correctly`, () => {
    const tree = renderer
          .create(<Genre
            genre={``}
            isActive={false}
            onGenreFilterChange={() => {}}
          />)
          .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

