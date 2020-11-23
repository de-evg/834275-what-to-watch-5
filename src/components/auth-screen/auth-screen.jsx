import React, {useRef, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import {login} from "../../store/api-actions";
import {connect} from "react-redux";
import authScreenProps from "./auth-screen.props";

const AuthScreen = ({authError, onSubmit}) => {
  const [emailValid, setEmailValid] = useState(false);

  const loginRef = useRef();
  const passwordRef = useRef();

  const validateEmail = useCallback(() => {
    setEmailValid({
      emailValid: loginRef.current.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    });
  }, [emailValid, loginRef, setEmailValid]);

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value
    });
  }, [loginRef, passwordRef]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form onSubmit={handleSubmit} action="#" className="sign-in__form">
          {
            !emailValid && loginRef.current
              ? (
                <div className="sign-in__message">
                  <p>Please enter a valid email address</p>
                </div>
              )
              : null
          }
          {
            authError
              ? (
                <div className="sign-in__message">
                  <p>We can’t recognize this email <br /> and password combination. Please try again.</p>
                </div>
              )
              : null
          }
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={loginRef} onInput={validateEmail} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

AuthScreen.propTypes = authScreenProps;

const mapStateToProps = (state) => ({
  authError: state.USER.authError
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {AuthScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
