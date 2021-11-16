import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
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
    if (map) {
      map.markers.clearLayers();
      offers.forEach((offer) => {
        leaflet.marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          {
            icon: (currentOffer !== undefined && offer.id === currentOffer?.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          },
        ).addTo(map.markers);
      });
    }
  }, [map, offers, currentOffer, defaultCustomIcon, currentCustomIcon]);

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
