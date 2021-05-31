<template>

<div>
    <Header></Header>
  <GoogleMapLoader
    :mapConfig="mapConfig"
    apiKey="AIzaSyD7yHU3hoFHGh8liZIAHJTBUn_Ld7IYTaE"
  >
    <template slot-scope="{ google, map }">
      <GoogleMapMarker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      />

    </template>
  </GoogleMapLoader>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import GoogleMapLoader from "./GoogleMapLoader";
import GoogleMapMarker from "./GoogleMapMarker";
import { mapSettings } from "@/constants/mapSettings";

export default {
  components: {
    GoogleMapLoader,
    GoogleMapMarker,
    Header
  },

  data() {
    return {
      markers: [
        {
          id: "a",
          position: { lat: 3, lng: 101 }
        },
        {
          id: "b",
          position: { lat: 5, lng: 99 }
        },
        {
          id: "c",
          position: { lat: 6, lng: 97 }
        }
      ]
    };
  },

  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter
      };
    },

    mapCenter() {
      return { lat: this.$store.state.latitude, lng: this.$store.state.longitude};
    }
  }
};
</script>
<style>
    .google-map {
        position: absolute;
    }
</style>