<template>
  <div class="offerCard">
    <div class="tarjeta">
        <img src="../assets/cafe_croissant.jpg">
        <div class="infoOffer">
            <div class="difuminado">
              <h3>J-85</h3>
              <div class="back_difuminado trans"></div>
            </div>
            <p class="title_offer">Café y croissant</p>
            <p class="price">1,80€</p>
        </div> 
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pattaya&family=Roboto:wght@300;400;500&display=swap');
</style>
<script>
export default {
  name: 'footerGeneral',
  props: {
    msg: String
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
.tarjeta {
    width: 17%;
    height: 28%;
    background-color: white;
    border-radius: 38px;
    position: absolute;
    box-shadow: 0px 5px 10px 0px grey;
}

.tarjeta img {
    width: 100%;
    height: 38%;
    border-radius: 38px 38px 0px 0px;
    object-fit: cover;
}

.infoOffer h3 {
    position: absolute;
    top: 9%;
    left: 8%;
    color: white;
    font-size: 28px;
    font-weight: 600;
    width: 80%;
    text-align: left;
    z-index: 1;
}

.infoOffer .title_offer {
    font-size: larger;
    text-align: left;
    width: 58%;
    margin-left: 7%;
}

.infoOffer .price {
    color: #FEA701;
    width: 30%;
    font-size: x-large;
    margin-top: 17px;
}

.infoOffer {
    display: flex;
}

.back_difuminado {
    position: absolute;
    width: 241px;
    height: 10px;
    background-color: black;
    padding: 10px;
    top: 24%;
    box-shadow: 0px -6px 5px 0px black;
}

.trans {
    opacity: 0.5;
}
</style>