<template>
  <div>
      <img src="../assets/cafe_croissant.jpg">
      <div class="infoOffer">
        <div class="difuminado">
          <h3>{{Offer.bar.name}}</h3>
          <div class="back_difuminado trans"></div>
        </div>
        <p class="title_offer">{{Offer.offerTitle}}</p>
        <p class="price">{{Offer.offerPrice}}€</p>
        <button class="redeemOffer"  id="show-modal" @click="show">Canjear</button>
        <OfferModal v-if="showModal" @close="showModal = false" :Offer="Offer" :Code="code"></OfferModal>
      </div> 
  </div>
</template>

<script>
import OfferModal from "@/components/OfferModal.vue";
export default {
 components: {
    OfferModal,
  },
  data(){
      return {
          showModal: false,
          code: "a"
      }
  },
  methods: {
    show(){
        
        this.$store.dispatch("getOffer", this.Offer).then((res) => {
            console.log("respuesta componente", res)
            this.code = res
            this.showModal =  true
        })
    }   
  },
  props: {
        Offer: {
        type: Object,
        required: true
        },

    }
}
</script>

<style>

</style>