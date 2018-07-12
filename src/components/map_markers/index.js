/* eslint no-unused-vars: [1] */
import template from './template.html';

export default {
  name: 'map-markers',
  template,
  props: {
    google: Object, // Provided by "components/google_map_loader".
    map: Object, // Provided by "components/google_map_loader".
    markers: Array, // Given directly from "views/map".
  },
  data() {
    return {};
  },
  mounted() {
    const { google, map } = this;
    const { Marker } = this.google.maps;
    const tmp = [];
    this.markers.forEach((marker) => {
      const { name: title, lat, lng } = marker || {};
      const position = { lat, lng };
      const x = new Marker({ title, map, position });
    });
  },
};
