import { Offers } from '../types/offers';
import { Cities, SortingOptions, AuthorizationStatus} from '../const';

export type State = {
  activeCity: Cities,
  offers: Offers,
  favoriteOffers: Offers,
  sortOption: SortingOptions,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};
