<template>
  <div class="offers" id="offers">
    <Header></Header>
    <OfferCard></OfferCard>
      <router-link to="/">
        <BackButton></BackButton>
      </router-link>
    <!-- <div>
        <input type="range" min="0" max="100" @input="addEvent" />
    </div> -->
  </div>
</template>
<script>

import Header from '@/components/Header.vue'
import OfferCard from '@/components/OfferCard.vue' 
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'offers',
  components: {
    Header,
    OfferCard,
    BackButton
  },
  // data(){
  //     return {
  //         // valor: 1,
  //         // events: []
  //     }
  // },
  created() {
    this.$store.dispatch('fetchOffers', 5)
  },
}
</script>