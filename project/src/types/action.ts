import {
  setActiveCity,
  fillOffers,
  filterOffers,
  setSortOption,
  requireAuthorization,
  requireLogout,
  loadOffers,
  loadFavoriteOffers
} from '../store/action';

import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';

import {
  AxiosInstance
} from 'axios';

import { State } from '../types/state';


export enum ActionType {
  SetActiveCity = 'mainPage/changeCity',
  FillOffers = 'mainPage/fillOffers',
  FilterOffers = 'mainPage/filterOffers',
  SetSortOption = 'mainPage/setSortOption',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  LoadOffers = 'mainPage/loadOffers',
  LoadFavoriteOffers = 'favoritePage/loadFavoriteOffers',
}

export type Actions =
  | ReturnType<typeof setActiveCity>
  | ReturnType<typeof fillOffers>
  | ReturnType<typeof filterOffers>
  | ReturnType<typeof setSortOption>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof loadFavoriteOffers>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
