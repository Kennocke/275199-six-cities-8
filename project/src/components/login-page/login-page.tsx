import React, {useRef, FormEvent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import { Redirect } from 'react-router';
import {loginAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import {AuthData} from '../../types/auth-data';
import {AuthorizationStatus} from '../../const';
import { State } from '../../types/state';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authData: AuthData) {
    dispatch(loginAction(authData));
  },
});

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function LoginPage(props: PropsFromRedux): JSX.Element {
  const {onSubmit} = props;

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);


  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={loginRef}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
      {props.authorizationStatus === AuthorizationStatus.Auth ? <Redirect to='/'/> : ''}
    </div>
  );
}

export {LoginPage};
export default connector(LoginPage);
