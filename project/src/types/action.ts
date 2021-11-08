import {Cities, SortingOptions} from '../const';

export enum ActionType {
  SetActiveCity = 'mainPage/changeCity',
  FillOffers = 'mainPage/fillOffers',
  FilterOffers = 'mainPage/filterOffers',
  SetSortOption = 'mainPage/setSortOption',
}

export type SetActiveCity = {
  type: ActionType.SetActiveCity;
  payload: Cities;
}

export type FillOffers = {
  type: ActionType.FillOffers;
  payload: Cities;
}

export type FilterOffers = {
  type: ActionType.FilterOffers;
  payload: SortingOptions;
}

export type SetSortOption = {
  type: ActionType.SetSortOption;
  payload: SortingOptions
}

export type Actions = SetActiveCity | FillOffers | FilterOffers | SetSortOption;
