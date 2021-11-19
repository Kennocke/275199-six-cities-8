import { useRef, useEffect } from 'react';
import leaflet, {Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';
import { Offers, Offer } from '../../types/offers';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

type MapProps = {
  offers: Offers;
  currentOffer?: Offer | undefined;
};

function Map({offers, currentOffer}: MapProps): JSX.Element {
  const activeCity = (offers.length) ? offers[0].city : null;
  const mapRef = useRef(null);
  const map = useMap(mapRef, activeCity);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      offers.forEach((offer) => {
        const {location} = offer;
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        markers.push(marker);

        marker
          .setIcon(
            offer.id === currentOffer?.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
    return () => markers.forEach((marker) => marker.remove());
  }, [map, offers, currentOffer, defaultCustomIcon, currentCustomIcon]);

  useEffect(() => {
    if (activeCity !== null) {
      map?.setView([activeCity.location.latitude, activeCity.location.longitude]);
    }
  });

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
