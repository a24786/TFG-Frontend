<template>
  <div class="bars" id="bars">
    <Header></Header>
    <BarOffers></BarOffers>
    <router-link to="/bars">
      <BackButton></BackButton>
    </router-link>
    <router-link :to="{name: 'BarBookings', params: { id:  urlBar}}">
      <TablesButton></TablesButton>
    </router-link>
  </div>
</template>
<script>

import Header from '@/components/Header.vue'
import BarOffers from '@/components/BarOffers.vue'
import BackButton from '@/components/BackButton.vue'
import TablesButton from '@/components/TablesButton.vue'

export default {
  name: 'bars',
  components: {
    Header,
    BarOffers,
    BackButton,
    TablesButton
  },
  created() {
    
  },
  beforeMount() {
    this.urlBar = this.$route.params.id
    this.$store.dispatch('fetchOffersBar', this.urlBar)
  }
}
</script>