import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';
import {City, Location} from '../../types/offers';
import '../../const';
import { URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  city: City;
  points: Location[];
};

function Map({city, points}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet.marker(
          {
            lat: point.latitude,
            lng: point.longitude,
          },
          {
            icon: defaultCustomIcon,
          },
        ).addTo(map);
      });
    }
  }, [map, points]);

  return (
    <div
      style={{height: '752px'}}
      ref={mapRef}
    />
  );
}

export default Map;
