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
        extent: [-13884991, 2870341, -7455066, 6338219],
        source: new TileWMS({
          url: 'http://localhost:8080/geoserver/wms',
          params: {'LAYERS': 'land_matrix:deals_by_country', 'TILED': false},
          serverType: 'geoserver',
          // Countries have transparency, so do not fade tiles:
          transition: 0,
        }),
      }),
    ],
  view: new View({
    center: fromLonLat([4.8322222, 45.7577778]),
    zoom: 2
  })
});
