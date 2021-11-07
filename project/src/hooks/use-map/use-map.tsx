import React, { useEffect, useState } from 'react';
import leaflet from 'leaflet';
import {City} from '../../types/offers';
import { URL_COPYRIGHT_MAP, URL_TYPE_MAP } from '../../const';

type MapState = {
  map: leaflet.Map;
  markers: leaflet.LayerGroup;
}

function useMap(mapRef: React.MutableRefObject<null>, city: City | null): (MapState | null) {

  const [map, setMapObject] = useState<MapState | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null && city !== null) {
      const instance = leaflet.map(mapRef.current, {
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

      const markers = new leaflet.LayerGroup().addTo(instance);

      setMapObject({map: instance, markers: markers});
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
