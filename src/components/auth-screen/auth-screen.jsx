import React, {PureComponent, createRef} from "react";
import {Link} from "react-router-dom";
import {login} from "../../store/api-actions";
import {connect} from "react-redux";
import {typesMap} from "../../prop-types/prop-types";

class AuthScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.validateEmail = this.validateEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      emailValid: false
    };
  }

  validateEmail() {
    this.setState({
      emailValid: this.loginRef.current.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value
    });
  }

  render() {
    const {emailValid} = this.state;
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
          <form onSubmit={this.handleSubmit} action="#" className="sign-in__form">
            {
              !emailValid && this.loginRef.current
                ? (
                  <div className="sign-in__message">
                    <p>Please enter a valid email address</p>
                  </div>
                )
                : null
            }
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input ref={this.loginRef} onInput={this.validateEmail} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input ref={this.passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
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
  }
}

AuthScreen.propTypes = {
  onSubmit: typesMap.onSubmit
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {AuthScreen};
export default connect(null, mapDispatchToProps)(AuthScreen);
