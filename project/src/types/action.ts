import {Cities} from '../const';

export enum ActionType {
  ChangeCity = 'mainPage/changeCity',
  FillOffers = 'mainPage/filterOffers',
}

export type SetActiveCity = {
  type: ActionType.ChangeCity;
  payload: Cities;
}

export type FillOffers = {
  type: ActionType.FillOffers;
  payload: Cities;
}

export type Actions = SetActiveCity | FillOffers;
