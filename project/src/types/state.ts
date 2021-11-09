import {Offers} from '../types/offers';
import {Cities, SortingOptions} from '../const';

export type State = {
  activeCity: Cities,
  offersForActiveCity: Offers,
  sortOption: SortingOptions,
};
