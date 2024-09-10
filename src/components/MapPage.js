import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const MapPage = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnlhaXZhYiIsImEiOiJjbTB1ZmQ2cDkweHJkMmtzajJldjU3NG9nIn0.aZVGdFJj4d-4FePNeG2EAw';

    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.005974, 40.712776], //default Centre map of New York City
        zoom: 10,
      });

      //zoom controls
      mapRef.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

      // Geocoder control
      mapRef.current.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
        }),
        'top-left' 
      );

      mapRef.current.on('load', () => {
        console.log('Map loaded successfully');

        // Fetch GeoJSON data from an external source
        fetch('https://services3.arcgis.com/j23k6iptiIkpZyy4/arcgis/rest/services/Oil_spill_data/FeatureServer/0')
          .then((response) => response.json())
          .then((data) => {
            setGeojsonData(data);

            //external GeoJSON data as source
            mapRef.current.addSource('external-geojson', {
              type: 'geojson',
              data: data,
            });

            //  fill layer 
            mapRef.current.addLayer({
              id: 'external-geojson-fill',
              type: 'fill',
              source: 'external-geojson',
              layout: {},
              paint: {
                'fill-color': '#0080ff',
                'fill-opacity': 0.5,
              },
            });

            // outline layer 
            mapRef.current.addLayer({
              id: 'external-geojson-outline',
              type: 'line',
              source: 'external-geojson',
              layout: {},
              paint: {
                'line-color': '#000',
                'line-width': 3,
              },
            });
          })
          .catch((error) => console.error('Error fetching GeoJSON data:', error));

        //  polygon layer 
        mapRef.current.addSource('custom-polygon', {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [-67.13734, 45.13745],
                  [-66.96466, 44.8097],
                  [-68.03252, 44.3252],
                  [-69.06, 43.98],
                  [-70.11617, 43.68405],
                  [-70.64573, 43.09008],
                  [-70.75102, 43.08003],
                  [-70.79761, 43.21973],
                  [-70.98176, 43.36789],
                  [-70.94416, 43.46633],
                  [-71.08482, 45.30524],
                  [-70.66002, 45.46022],
                  [-70.30495, 45.91479],
                  [-70.00014, 46.69317],
                  [-69.23708, 47.44777],
                  [-68.90478, 47.18479],
                  [-68.2343, 47.35462],
                  [-67.79035, 47.06624],
                  [-67.79141, 45.70258],
                  [-67.13734, 45.13745],
                ],
              ],
            },
          },
        });

        mapRef.current.addLayer({
          id: 'custom-polygon-fill',
          type: 'fill',
          source: 'custom-polygon',
          layout: {},
          paint: {
            'fill-color': '#FF0000',
            'fill-opacity': 0.3,
          },
        });

        mapRef.current.addLayer({
          id: 'custom-polygon-outline',
          type: 'line',
          source: 'custom-polygon',
          layout: {},
          paint: {
            'line-color': '#FF0000',
            'line-width': 2,
          },
        });
      });

      //  Popup with custom tags 
      mapRef.current.on('click', (e) => {
        const features = mapRef.current.queryRenderedFeatures(e.point, {
          layers: ['external-geojson-fill', 'external-geojson-outline'],
        });

        if (features.length > 0) {
          const feature = features[0];
          const { properties } = feature;

          const popupContent = `
            <strong>${properties.name || 'GeoJSON Feature'}</strong><br>
            <p>${properties.description || 'No description available.'}</p>
            <p>Tags: ${properties.tags ? properties.tags.join(', ') : 'No tags'}</p>
          `;

          new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(popupContent)
            .addTo(mapRef.current);
        }
      });

      mapRef.current.on('error', (e) => {
        console.error('Mapbox GL error:', e);
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div>
      <div
        style={{ height: '100vh', width: '100vw', transitionDuration: '200ms' }}
        ref={mapContainerRef}
        className="map-container"
      />
    </div>
  );
};

export default MapPage;
