import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {UserBlock} from "./user-block";

it(`Should UserBlock render correctly on authorisation`, () => {
  const tree = renderer
    .create(
        <BrowserRouter><UserBlock
          authorizationStatus={`AUTH`}
          userAvatar={`img/avatar.jpg`}
        />
        </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
