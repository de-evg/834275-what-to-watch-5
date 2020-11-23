import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import {PlayerScreen} from "./player-screen";
import {Router, Route} from "react-router-dom";
import {createBrowserHistory} from "history";

describe(`Render PlayerScreen`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let PlayerScreenComponent = null;
  const history = createBrowserHistory();
  history.push(`/player/1`);

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

  beforeEach(() => {
    store = mockStore({
      DATA: {
        movies: [movie]
      }
    });

    store.dispatch = jest.fn();

    const withProps = (Component) => {
      return <Component
        movies={[movie]}
        match={{params: {id: `0`}}}
      />;
    };

    PlayerScreenComponent = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Route
                exact
                component={() => withProps(PlayerScreen)}
                path={`/player/:id`}
                route={`/player/1`}
              />
            </Router>
          </Provider>
      );
  });

  it(`Should PlayerScreen connected to store render correctly`, () => {
    expect(PlayerScreenComponent.toJSON()).toMatchSnapshot();
  });
});
