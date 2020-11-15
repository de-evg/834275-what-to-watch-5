import React from "react";
import renderer from "react-test-renderer";
import Genre from "./genre";


describe(`Render Genre`, () => {
  it(`Should active NavItem render correctly`, () => {
    const tree = renderer
          .create(<Genre
            genre={``}
            isActive={true}
            onGenreFilterChang={() => {}}
          />)
          .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should unactive NavItem render correctly`, () => {
    const tree = renderer
          .create(<Genre
            genre={``}
            isActive={false}
            onGenreFilterChang={() => {}}
          />)
          .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

