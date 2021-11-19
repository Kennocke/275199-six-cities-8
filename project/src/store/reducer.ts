import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';
import { Cities, SortingOptions, AuthorizationStatus } from '../const';
import { offers } from '../mocks/offers';
import { Offer } from '../types/offers';

const initialState = {
  activeCity: Cities.Paris,
  offers: [],
  favoriteOffers: [],
  sortOption: SortingOptions.Popular,
  authorizationStatus: AuthorizationStatus.Unknow,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetActiveCity:
      return {...state, activeCity: action.payload};
    case ActionType.LoadOffers:
      return {...state, offers: action.payload};
    case ActionType.LoadFavoriteOffers:
      return {...state, favoriteOffers: action.payload};
    case ActionType.FillOffers:
      return {
        ...state,
        offers: offers.filter((offer) => offer.city.name === action.payload),
      };
    case ActionType.FilterOffers:
      return {
        ...state,
        offers: state.offers.sort((a: Offer, b:Offer) => {
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
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload, isDataLoaded: true};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};

export {reducer};
