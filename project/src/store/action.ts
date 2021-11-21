import { ActionType } from '../types/action';
import { Cities, SortingOptions, AuthorizationStatus } from '../const';
import { Offers } from '../types/offers';

export const setActiveCity = (activeCity: Cities) => ({
  type: ActionType.SetActiveCity,
  payload: activeCity,
} as const);

export const fillOffers = (activeCity: Cities) => ({
  type: ActionType.FillOffers,
  payload: activeCity,
} as const);

export const filterOffers = (option: SortingOptions) => ({
  type: ActionType.FilterOffers,
  payload: option,
} as const);

export const setSortOption = (option: SortingOptions) => ({
  type: ActionType.SetSortOption,
  payload: option,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const loadOffers = (offers: Offers) => ({
  type: ActionType.LoadOffers,
  payload: offers,
} as const);

export const loadFavoriteOffers = (favoriteOffers: Offers) => ({
  type: ActionType.LoadFavoriteOffers,
  payload: favoriteOffers,
} as const);

