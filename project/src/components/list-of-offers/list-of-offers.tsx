import React from 'react';
import {Offers} from '../../types/offers';
import Card from '../card/card';

type ListOfOffersProps = {
  offers: Offers;
};

function ListOfOffers({offers}: ListOfOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card key={offer.id} offer={offer} />)}
    </div>
  );
}

export default ListOfOffers;