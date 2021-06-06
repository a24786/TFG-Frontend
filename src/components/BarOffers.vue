<template>
<div>
    <HeaderBarDet></HeaderBarDet>
    <Offer class="tarjeta" v-for="item in $store.state.offers" :key="item.idOffer" :Offer="item"></Offer>
  </div>
</template>

<script>
import HeaderBarDet from "@/components/HeaderBarDet.vue";
import Offer from "@/components/Offer.vue";
export default {
  name: 'barOffers',
  props: {
    msg: String
  }, 
  components: {
    HeaderBarDet,
    Offer
  },   
}
</script>
<style> 

</style>