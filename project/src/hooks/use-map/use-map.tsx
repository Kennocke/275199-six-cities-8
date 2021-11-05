import React, { useEffect, useState } from 'react';
import leaflet from 'leaflet';
import {City} from '../../types/offers';
import { URL_COPYRIGHT_MAP, URL_TYPE_MAP } from '../../const';

function useMap(mapRef: React.MutableRefObject<null>, city: City): (leaflet.Map | null) {
  const [map, setMap] = useState<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current,{
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

      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
