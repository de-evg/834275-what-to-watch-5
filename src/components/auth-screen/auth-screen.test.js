import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {AuthScreen} from "./auth-screen";

describe(`Render AuthScreen`, () => {
  it(`Should AuthScreen onError render correctly`, () => {
    const tree = renderer
      .create(<BrowserRouter>
        <AuthScreen
          authError={true}
          onSubmit={() => {}}
        />
      </BrowserRouter>, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should AuthScreen onSuccess render correctly`, () => {
    const tree = renderer
      .create(<BrowserRouter>
        <AuthScreen
          authError={false}
          onSubmit={() => {}}
        />
      </BrowserRouter>, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
