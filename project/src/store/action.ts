import {ActionType, SetActiveCity, FillOffers} from '../types/action';
import {Cities} from '../const';

export const setActiveCity = (activeCity: Cities): SetActiveCity => ({
  type: ActionType.ChangeCity,
  payload: activeCity,
});

export const fillOffers = (activeCity: Cities): FillOffers => ({
  type: ActionType.FillOffers,
  payload: activeCity,
});
