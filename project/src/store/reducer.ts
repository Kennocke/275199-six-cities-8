import { ActionType, Actions } from '../types/action';
import {State} from '../types/state';
import {Cities} from '../const';
import {offers} from '../mocks/offers';

const initialState = {
  activeCity: Cities.Paris,
  offersForActiveCity: offers.filter((offer) => offer.city.name === Cities.Paris),
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, activeCity: action.payload};
    case ActionType.FillOffers:
      return {
        ...state,
        offersForActiveCity: offers.filter((offer) => offer.city.name === action.payload),
      };
    default:
      return state;
  }
};

export {reducer};
