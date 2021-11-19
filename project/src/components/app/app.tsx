import MainPage from '../main-page/main-page';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import OfferPage from '../offer-page/offer-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { offers } from '../../mocks/offers';
import { connect, ConnectedProps } from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import { State } from '../../types/state';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import { Actions } from '../../types/action';
import { fetchFavoriteAction } from '../../store/api-actions';


const mapStateToProps = ({authorizationStatus, isDataLoaded}: State) => ({
  authorizationStatus,
  isDataLoaded,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions | AnyAction>) => bindActionCreators({
  loadFavoriteOffers: fetchFavoriteAction,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

function App(props: PropsFromRedux): JSX.Element {
  if (!props.isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage/>
        </Route>
        <Route exact path='/login'>
          <LoginPage/>
        </Route>
        <PrivateRoute
          exact
          path='/favorites'
          render={() => <FavoritesPage />}
          authorizationStatus={props.authorizationStatus}
        />
        <Route exact path='/offer/:id'>
          <OfferPage offers={offers}/>
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export { App };
export default connector(App);
