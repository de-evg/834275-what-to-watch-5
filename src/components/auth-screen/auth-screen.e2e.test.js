import React from "react";
import {BrowserRouter} from "react-router-dom";
import {configure, mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AuthScreen} from "./auth-screen";

configure({adapter: new Adapter()});

describe(`auth handlers`, () => {
  it(`on auth form submit`, () => {
    const handleFormSubmit = jest.fn();
    const screen = mount(
        <BrowserRouter>
          <AuthScreen
            authError={false}
            onSubmit={() => {}}
          />
        </BrowserRouter>);

    const authForm = screen.find(`form`);
    authForm.simulate(`submit`, {
      preventDefault: handleFormSubmit
    });

    expect(handleFormSubmit).toHaveBeenCalledTimes(1);
  });

  it(`on email input validate`, () => {
    const screen = shallow(
        <AuthScreen
          authError={false}
          onSubmit={() => {}}
        />
    );
    const emailInput = screen.find(`[type="email"]`);
    emailInput.simulate(`change`);

    expect(screen.state().emailValid).toEqual(false);
  });
});
