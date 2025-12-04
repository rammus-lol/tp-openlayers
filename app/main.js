import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import {fromLonLat} from 'ol/proj.js';
import StadiaMaps from 'ol/source/StadiaMaps.js';
import TileWMS from 'ol/source/TileWMS';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new StadiaMaps({
        layer: 'stamen_terrain',
        // apiKey: 'OPTIONAL'
      })
    }),
    new TileLayer({
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {
          'LAYERS': 'land_matrix:deals_by_country', 
          'TILED': true
        },
        serverType: 'geoserver',
        transition: 0,
      }),
    }),
    new TileLayer({
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {
          'LAYERS': 'land_matrix:deals_by_country_centroid', 
          'TILED': true
        },
        serverType: 'geoserver',
        transition: 0,
      }),
    }),
    new TileLayer({
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {
          'LAYERS': 'land_matrix:deals', 
          'TILED': true
        },
        serverType: 'geoserver',
        transition: 0,
      }),
    }),
  ],
  view: new View({
    center: fromLonLat([4.8322222, 45.7577778]),
    zoom: 2
  })
});