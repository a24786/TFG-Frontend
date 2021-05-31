<template>
  <div class="offers" id="offers">
    <div>
        <OfferCard></OfferCard>
    </div>
    <div>
        <input type="range" min="0" max="100" @input="addEvent" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import OfferCard from '@/components/OfferCard.vue' 

export default {
  name: 'offers',
  components: {
    OfferCard
  },
  data(){
      return {
          valor: 1,
          events: [],
      }
  },
  created() {
    this.$store.dispatch('fetchOffers', this.data.valor)
  },
}
</script>