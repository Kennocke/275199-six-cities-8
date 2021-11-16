import {Cities} from '../../const';

type ListOfCitiesProps = {
  activeCity: Cities;
  setActiveCity: (activeCity: Cities) => void;
  fillOffers: (activeCity: Cities) => void;
}

function ListOfCities({activeCity, setActiveCity, fillOffers}: ListOfCitiesProps): JSX.Element {
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
                  setActiveCity(city);
                  fillOffers(city);
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
