import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveMovie from "./with-active-movie";

const MockComponent = () => <div />;
MockComponent.displayName = `component`;
const MockComponentHOC = withActiveMovie(MockComponent);

configure({adapter: new Adapter()});

describe(`state active movie`, () => {
  it(`should activeMovie eq -1`, () => {
    const wrapper = shallow(<MockComponentHOC />);
    expect(wrapper.props().activeMovieID).toEqual(-1);
  });

  it(`should movie playing eq false`, () => {
    const wrapper = shallow(<MockComponentHOC />);
    const videoPlayer = wrapper.find(`component`).renderProp(`renderSmallVideoPlayer`)({previewURL: `someURL`, videoURL: `someURL`}, 0);
    expect(videoPlayer.props().isPlaying).toEqual(false);
  });
});
