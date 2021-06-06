<template>
<div>
    <HeaderBarDet></HeaderBarDet>
    <div class="barOffersList">
    <Offer class="tarjeta" v-for="item in $store.state.offers" :key="item.idOffer" :Offer="item"></Offer>
    </div>
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
.barOffersList {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>