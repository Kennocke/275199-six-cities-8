import MainPage from '../main-page/main-page';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import OfferPage from '../offer-page/offer-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus} from '../../const';

type AppProps = {
  offersCount: number;
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage
            offersCount = {props.offersCount}
          />
        </Route>
        <Route exact path='/login'>
          <LoginPage/>
        </Route>
        <PrivateRoute
          exact
          path='/favorites'
          render={() => <FavoritesPage/>}
          authorizationStatus={AuthorizationStatus.Auth}
        />
        <Route exact path='/offer/:id'>
          <OfferPage/>
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
