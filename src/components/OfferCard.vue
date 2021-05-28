<template>
  <div class="offerCard">
    <div class="tarjeta">
        <img src="../assets/cafe_croissant.jpg">
        <div class="infoOffer">
            <h3>J-85</h3>
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
    mix-blend-mode: multiply;
    object-fit: cover;
}

.infoOffer h3 {
    position: absolute;
    top: 11%;
    left: 8%;
    color: white;
    font-size: 28px;
    font-weight: 600;
    width: 85%;
    text-align: left;
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
</style>