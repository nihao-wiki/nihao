<script>
import Map from './Map.vue';
export default {
  props: [
    'center',
    'points',
    'walking',
    'transit',
    'driving',
    'line',
    'divesites',
    'height',
    'zoom',
    'padding',
  ],
  computed: {
    _class: function () {
      return this.fullscreen ? 'map-wrapper map-fullscreen' : 'map-wrapper';
    },
    _points: function () {
      return typeof this.points === 'string'
        ? this.points.split(/[;|]/).map((point) => {
            const [lng, lat, address] = point.split(',');
            return { latitude: lat, longitude: lng, address };
          })
        : [];
    },
    _divesites: function () {
      return typeof this.divesites === 'string'
        ? this.divesites.split(/[;|]/).map((site) => {
            const [lng, lat, name] = site.split(',');
            return { latitude: lat, longitude: lng, name };
          })
        : [];
    },
    _center: function () {
      const [longitude, latitude] = typeof this.center === 'string' ? this.center.split(',') : [];
      return latitude && longitude
        ? { latitude, longitude }
        : // try using points as center
          this._points[0] && {
            latitude: this._points[0].latitude,
            longitude: this.points[0].longitude,
          };
    },
    _walking: function () {
      return typeof this.walking === 'string'
        ? this.walking.split(/[;|]/).map((point) => {
            const [lng, lat, address] = point.split(',');
            return { latitude: lat, longitude: lng, address };
          })
        : [];
    },
    _transit: function () {
      return typeof this.transit === 'string'
        ? this.transit.split(/[;|]/).map((point) => {
            const [lng, lat, address] = point.split(',');
            return { latitude: lat, longitude: lng, address };
          })
        : [];
    },
    _driving: function () {
      return typeof this.driving === 'string'
        ? this.driving.split(/[;|]/).map((point) => {
            const [lng, lat, address] = point.split(',');
            return { latitude: lat, longitude: lng, address };
          })
        : [];
    },
    _line: function () {
      return typeof this.line === 'string'
        ? this.line.split(/[;|]/).map((point) => {
            const [lng, lat] = point.split(',');
            return { latitude: lat, longitude: lng };
          })
        : [];
    },
  },
  components: {
    'v-map': Map,
  },
};
</script>

<template>
  <div class="map-wrapper">
    <v-map
      :center="_center"
      :points="_points"
      :divesites="_divesites"
      :walking="_walking"
      :transit="_transit"
      :driving="_driving"
      :line="_line"
      :height="height"
      :padding="padding"
      :zoom="zoom"
    ></v-map>
  </div>
</template>

<style scoped>
.map-wrapper {
  position: relative;
}

.map-wrapper .map {
  width: 100%;
  height: 100%;
}
</style>
