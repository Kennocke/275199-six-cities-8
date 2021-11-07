import {Offers} from '../types/offers';
import {Cities} from '../const';

export type State = {
  activeCity: Cities,
  offersForActiveCity: Offers,
};
