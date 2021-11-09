import {ActionType, SetActiveCity, FillOffers, FilterOffers, SetSortOption} from '../types/action';
import {Cities, SortingOptions} from '../const';

export const setActiveCity = (activeCity: Cities): SetActiveCity => ({
  type: ActionType.SetActiveCity,
  payload: activeCity,
});

export const fillOffers = (activeCity: Cities): FillOffers => ({
  type: ActionType.FillOffers,
  payload: activeCity,
});

export const filterOffers = (option: SortingOptions): FilterOffers => ({
  type: ActionType.FilterOffers,
  payload: option,
});

export const setSortOption = (option: SortingOptions): SetSortOption => ({
  type: ActionType.SetSortOption,
  payload: option,
});
