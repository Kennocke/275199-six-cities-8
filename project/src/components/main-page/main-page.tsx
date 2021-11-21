import ListOfOffers from '../list-of-offers/list-of-offers';
import Map from '../map/map';
import ListOfCities from '../list-of-cities/list-of-cities';
import {connect, ConnectedProps} from 'react-redux';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import { Actions } from '../../types/action';
import { setActiveCity, fillOffers, filterOffers, setSortOption } from '../../store/action';
import { fetchOfferAction } from '../../store/api-actions';
import {State} from '../../types/state';
import SortOptions from '../sort-options/sort-options';
import {useState} from 'react';
import {Offer} from '../../types/offers';
import Header from '../header/header';

const mapStateToProps = ({activeCity, offers, sortOption}: State) => ({
  activeCity,
  offers,
  sortOption,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions | AnyAction>) => bindActionCreators({
  setActiveCity: setActiveCity,
  fillOffers: fillOffers,
  filterOffers: filterOffers,
  setSortOption: setSortOption,
  fetchOfferAction: fetchOfferAction,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainPage(props: PropsFromRedux): JSX.Element {
  const [selectedOffer, setSelectedCity] = useState<Offer | undefined>(undefined);

  const onListItemHover = (cityId: string | undefined) => {
    setSelectedCity(props.offers.find((offer) => offer.id.toString() === cityId));
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <ListOfCities
            activeCity={props.activeCity}
            setActiveCity={props.setActiveCity}
            fetchOfferAction={props.fetchOfferAction}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{props.offers.length} places to stay in {props.activeCity}</b>
              <SortOptions
                activeOption={props.sortOption}
                setSortOption={props.setSortOption}
                filterOffers={props.filterOffers}
              />
              <ListOfOffers
                offers={props.offers}
                onListItemHover={onListItemHover}
              />
            </section>
            <div className="cities__right-section">
              <section
                className="cities__map map"
                style={{
                  position: 'relative',
                }}
              >
                <Map
                  offers={props.offers}
                  currentOffer={selectedOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

}

export {MainPage};
export default connector(MainPage);

