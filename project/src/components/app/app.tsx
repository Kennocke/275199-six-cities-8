import MainPage from '../main-page/main-page';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import OfferPage from '../offer-page/offer-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus} from '../../const';
import {Offers} from '../../types/offers';
import { offers } from '../../mocks/offers';

type AppProps = {
  offersCount: number;
  offers: Offers;
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage
            offersCount = {props.offersCount}
            offers = {props.offers}
          />
        </Route>
        <Route exact path='/login'>
          <LoginPage/>
        </Route>
        <PrivateRoute
          exact
          path='/favorites'
          render={() => <FavoritesPage offers={props.offers}/>}
          authorizationStatus={AuthorizationStatus.Auth}
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


export default App;
