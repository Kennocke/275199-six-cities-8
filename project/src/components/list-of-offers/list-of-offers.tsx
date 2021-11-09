import React from 'react';
import {Offers} from '../../types/offers';
import Card from '../card/card';

type ListOfOffersProps = {
  offers: Offers;
  onListItemHover?: (city: string | undefined) => void;
};

function ListOfOffers({offers, onListItemHover}: ListOfOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const elemKey = offer.id;
        return (
          <Card
            key={elemKey}
            offer={offer}
            onListItemHover={onListItemHover}
          />
        );
      })}
    </div>
  );
}

export default ListOfOffers;
