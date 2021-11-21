import { useEffect, useState, MutableRefObject } from 'react';
import leaflet, { Map, TileLayer } from 'leaflet';
import {City} from '../../types/offers';
import { URL_COPYRIGHT_MAP, URL_TYPE_MAP } from '../../const';

/*
type MapState = {
  map: Map;
  markers: leaflet.LayerGroup;
}
*/
function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City | null): (Map | null) {

  const [map, setMap] = useState<Map | null>(null);
  useEffect(() => {
    let instance: Map;
    if (mapRef.current !== null && map === null && city !== null) {
      instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet.tileLayer(
        URL_TYPE_MAP,
        {
          attribution: URL_COPYRIGHT_MAP,
        },
      ).addTo(instance);

      const layer = new TileLayer(
        URL_TYPE_MAP,
        {
          attribution: URL_COPYRIGHT_MAP,
        },
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
