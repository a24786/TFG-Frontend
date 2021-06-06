<template>
  <div class="offerCard" >
    <div class="tarjeta" v-for="item in $store.state.offers" :key="item.idOffer">
      <img src="../assets/cafe_croissant.jpg">
      <div class="infoOffer">
        <div class="difuminado">
          <h3>{{item.bar.name}}</h3>
          <div class="back_difuminado trans"></div>
        </div>
        <p class="title_offer">{{item.offerTitle}}</p>
        <p class="price">{{item.offerPrice}}€</p>
        <button class="redeemOffer"  id="show-modal" @click="showModal = true">Canjear</button>
      </div> 
    </div>
    <!-- <OfferModal></OfferModal> -->
  </div>
</template>

<script>
// import OfferModal from "@/components/OfferModal.vue";
export default {
  name: 'offerCard',
  props: {
    msg: String
  },
  components: {
    // OfferModal,
  },
  data() {
    return{
    }
  },
  methods : {
    submit(){   
      }
    },
    
}
</script>
<style> 
.offerCard {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    height: 100%;
}

.tarjeta {
    width: 17%;
    height: 28%;
    background-color: white;
    border-radius: 38px;
    box-shadow: 0px 5px 10px 0px grey;
    margin-left: 5%;
    margin-bottom: 5%;
}

.tarjeta img {
    width: 100%;
    height: 100px;
    border-radius: 38px 38px 0px 0px;
    object-fit: cover;
}

.infoOffer h3 {
    color: white;
    font-size: 28px;
    font-weight: 600;
    text-align: left;
    padding: 10px;
    margin-top: -45px;
    z-index: 1;
}

.infoOffer .title_offer {
    font-size: larger;
    font-weight: 600;
    text-align: center;
    width: 90%;
    margin-left: 5%;
    margin-bottom: 2%;
    margin-top: 4%;
}

.infoOffer .price {
    color: #FEA701;
    width: 90%;
    font-size: 35px;
    margin-top: 5%;
    margin-left: 5%;
    text-align: center;
    margin-bottom: 5%;
}

.back_difuminado {
    height: 10px;
    background-color: black;
    padding: 10px;
    box-shadow: 0.5px -4px 5px 1px black;
    margin-top: -69px;
    z-index: 1;
}

.trans {
    opacity: 0.3;
}

.redeemOffer{
  background-color: #FEA701;
  border-radius: 20%;
  color:white;
  border: 0px;
}

@media only screen and (max-width: 1440px) {
  .back_difuminado {
    height: 5px;
  }
  .infoOffer h3 {
    top: 5%;
  }
}

@media only screen and (max-width: 1300px) {
  .back_difuminado {
    width: 89%;
  }

}
</style>