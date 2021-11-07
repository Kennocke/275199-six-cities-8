import {Cities} from '../../const';

type ListOfCitiesProps = {
  activeCity: Cities;
  onSetActiveCity: (activeCity: Cities) => void;
  onFillOffers: (activeCity: Cities) => void;
}

function ListOfCities({activeCity, onSetActiveCity, onFillOffers}: ListOfCitiesProps): JSX.Element {
  const orderedCities = [
    Cities.Paris,
    Cities.Colgone,
    Cities.Brussels,
    Cities.Amsterdam,
    Cities.Hamburg,
    Cities.Dusseldorf,
  ];

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {orderedCities.map((city) => {
          const elementKey = `${orderedCities}-${city}`;
          return (
            <li key={elementKey} className="locations__item">
              <a
                className={`locations__item-link tabs__item${(activeCity === city) ? ' tabs__item--active' : ''}`}
                href="/#"
                onClick={() => {
                  onSetActiveCity(city);
                  onFillOffers(city);
                }}
              >
                <span>{city}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ListOfCities;
