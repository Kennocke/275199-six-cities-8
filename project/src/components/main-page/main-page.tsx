import ListOfOffers from '../list-of-offers/list-of-offers';
import Map from '../map/map';
import ListOfCities from '../list-of-cities/list-of-cities';
import {connect, ConnectedProps} from 'react-redux';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import { Actions } from '../../types/action';
import { setActiveCity, fillOffers, filterOffers, setSortOption} from '../../store/action';
import {State} from '../../types/state';
import SortOptions from '../sort-options/sort-options';
import {useState} from 'react';
import {Offer} from '../../types/offers';

const mapStateToProps = ({activeCity, offersForActiveCity, sortOption}: State) => ({
  activeCity,
  offersForActiveCity,
  sortOption,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions | AnyAction>) => bindActionCreators({
  setActiveCity: setActiveCity,
  fillOffers: fillOffers,
  filterOffers: filterOffers,
  setSortOption: setSortOption,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux ;

function MainPage(props: ConnectedComponentProps): JSX.Element {
  const [selectedOffer, setSelectedCity] = useState<Offer | undefined>(undefined);

  const onListItemHover = (cityId: string | undefined) => {
    setSelectedCity(props.offersForActiveCity.find((offer) => offer.id.toString() === cityId));
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a href="/#" className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <ListOfCities
            activeCity={props.activeCity}
            setActiveCity={props.setActiveCity}
            fillOffers={props.fillOffers}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{props.offersForActiveCity.length} places to stay in {props.activeCity}</b>
              <SortOptions
                activeOption={props.sortOption}
                setSortOption={props.setSortOption}
                filterOffers={props.filterOffers}
              />
              <ListOfOffers
                offers={props.offersForActiveCity}
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
                  offers={props.offersForActiveCity}
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

