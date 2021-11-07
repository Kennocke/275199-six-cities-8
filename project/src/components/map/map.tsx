import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';
import {Offers} from '../../types/offers';
import '../../const';
import { URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  offers: Offers;
};

function Map({offers}: MapProps): JSX.Element {
  const activeCity = (offers.length) ? offers[0].city : null;
  const mapRef = useRef(null);
  const mapObject = useMap(mapRef, activeCity);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (mapObject) {
      mapObject.markers.clearLayers();
      offers.forEach((offer) => {
        leaflet.marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          {
            icon: defaultCustomIcon,
          },
        ).addTo(mapObject.markers);
      });
    }
  }, [mapObject, offers, defaultCustomIcon]);

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
      ref={mapRef}
    />
  );
}

export default Map;
