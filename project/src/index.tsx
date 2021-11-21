import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { createAPI } from './services/api';
import { requireAuthorization } from './store/action';
import { fetchOfferAction, checkAuthAction } from './store/api-actions';
import { ThunkAppDispatch } from './types/action';
import { AuthorizationStatus, Cities } from './const';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOfferAction(Cities.Paris));

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
