import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker?worker';


mapboxgl.workerClass = MapboxWorker;

interface MapProps {
  origin: string;
  destination: string;
}

const Map = ({ origin, destination }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(36.8219);
  const [lat, setLat] = useState(-1.2921);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // initialize map only once

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on('move', () => {
      if (map.current) {
        setLng(Number(map.current.getCenter().lng.toFixed(4)));
        setLat(Number(map.current.getCenter().lat.toFixed(4)));
        setZoom(Number(map.current.getZoom().toFixed(2)));
      }
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
      controls: {
        inputs: true, // Disable input boxes
        instructions: true, // Disable instructions
      },
    });

    map.current.addControl(directions, 'top-left');
    
    // Store directions instance in ref for later use
    (map.current as any)._directions = directions;

  }, [lat, lng, zoom]);

  useEffect(() => {
    if (!map.current || !(map.current as any)._directions) return;

    const directions = (map.current as any)._directions;

    if (origin) {
      directions.setOrigin(origin);
    }
    if (destination) {
      directions.setDestination(destination);
    }
  }, [origin, destination]);

  return (
    <div
      ref={mapContainer}
      className="map-container"
      style={{ height: '100%', width: '100%' }}
    />
  );
};

export default Map;
