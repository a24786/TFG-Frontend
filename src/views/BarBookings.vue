<template>
  <div class="bars" id="bars">
    <Header></Header>
    <router-link to="/bars"><BackButton></BackButton></router-link>
    <router-link to="/barOffers"><OffersButton></OffersButton></router-link>
  </div>
</template>
<script>

import Header from '@/components/Header.vue'

import BackButton from '@/components/BackButton.vue'
import OffersButton from '@/components/OffersButton.vue'

export default {
  name: 'bars',
  components: {
    Header,
    BackButton,
    OffersButton
  },
  created() {
    
  },
}
</script>