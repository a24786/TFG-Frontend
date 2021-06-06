<template>
  <div class="offers" id="offers">
    <Header></Header>
    <OfferCard></OfferCard>
    <!-- <div>
        <input type="range" min="0" max="100" @input="addEvent" />
    </div> -->
  </div>
</template>
<script>

import Header from '@/components/Header.vue'
import OfferCard from '@/components/OfferCard.vue' 

export default {
  name: 'offers',
  components: {
    Header,
    OfferCard
  },
  // data(){
  //     return {
  //         // valor: 1,
  //         // events: []
  //     }
  // },
  created() {
    this.$store.dispatch('fetchOffers')
  },
}
</script>