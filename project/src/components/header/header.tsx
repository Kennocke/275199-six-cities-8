import React from 'react';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import { State } from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import { logoutAction } from '../../store/api-actions';
import { Actions } from '../../types/action';

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions | AnyAction>) => bindActionCreators({
  logoutAction: logoutAction,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

function Header(props: PropsFromRedux): JSX.Element {
  return (
    <header className="header" data-testid="header-component">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left" data-testid="header-logo">
            <Link to='/' className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {props.authorizationStatus === AuthorizationStatus.Auth ?
                <React.Fragment>
                  <li className="header__nav-item user">
                    <Link to='/favorite' className="header__nav-link header__nav-link--profile">
                      <div
                        className="header__avatar-wrapper user__avatar-wrapper"
                        style={{width: '30px', height: '30px'}}
                      >
                      </div>
                      <span className="header__user-name user__name" data-testid="header-email">test@gmail.com</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <a
                      className="header__nav-link"
                      href="#"
                      onClick={(evt) => props.logoutAction()}
                    >
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </React.Fragment> :
                <li className="header__nav-item user">
                  <Link to='/login' className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export {Header};
export default connector(Header);
