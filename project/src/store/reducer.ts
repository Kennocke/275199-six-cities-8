import { ActionType, Actions } from '../types/action';
import {State} from '../types/state';
import {Cities, SortingOptions} from '../const';
import {offers} from '../mocks/offers';
import { Offer } from '../types/offers';

const initialState = {
  activeCity: Cities.Paris,
  offersForActiveCity: offers.filter((offer) => offer.city.name === Cities.Paris),
  sortOption: SortingOptions.Popular,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetActiveCity:
      return {...state, activeCity: action.payload};
    case ActionType.FillOffers:
      return {
        ...state,
        offersForActiveCity: offers.filter((offer) => offer.city.name === action.payload),
      };
    case ActionType.FilterOffers:
      return {
        ...state,
        offersForActiveCity: state.offersForActiveCity.sort((a: Offer, b:Offer) => {
          switch (action.payload) {
            case SortingOptions.HighToLow:
              return (b.price - a.price);
            case SortingOptions.LowToHigh:
              return (a.price - b.price);
            case SortingOptions.TopRatedFirst:
              return (b.rating - a.rating);
            default:
              return 0;
          }
        }),
      };
    case ActionType.SetSortOption:
      return {...state, sortOption: action.payload};
    default:
      return state;
  }
};

export {reducer};
