/* eslint no-unused-vars: [1] */
import GoogleMapLoader from '@/components/google_map_loader';
import Spot from '@/components/spot';
import MapOverlayTest from '@/components/map_overlay_test';

import template from './template.html';

const API_KEY = 'AIzaSyDtDdWEh0tzu4bbIic4Sa68iPOgYbkF3h8';
const CENTER_SPOT = { name: 'Raffles Hotel', lat: 1.2953139, lng: 103.8524867 };
const DEFAULT_ZOOM = 16;

// http://global.mapit.mysociety.org/area/973041.html
const SPOT_LIST = [
  { name: 'Blu Jaz', lat: 1.3006019, lng: 103.8587765 },
  { name: 'Candour Coffee', lat: 1.2960791, lng: 103.8557405 },
  { name: 'Book Point', lat: 1.2969103, lng: 103.8525092 },
];

export default {
  name: 'MyGoogleMap',
  template,
  data() {
    return {
      apiKey: API_KEY,
      spots: SPOT_LIST,
      config: {
        zoom: DEFAULT_ZOOM,
        center: CENTER_SPOT,
      },
    };
  },
  components: {
    GoogleMapLoader,
    Spot,
    MapOverlayTest,
  },
};
