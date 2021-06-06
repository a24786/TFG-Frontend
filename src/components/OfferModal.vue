<template>
  <div class="offerModal" >
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
                  <img :src="'https://gotherestorage.blob.core.windows.net'+Offer.offerImage">
                  <div class="infoOfferModal">
                    <div class="difuminado">
                      <h3>{{Offer.bar.name}}</h3>
                    </div>
                    <p class="title_offerModal">{{Offer.offerTitle}}</p>
                    <p class="priceModal">{{Offer.offerPrice}}€</p>
                    <p class="redeemOfferModal">CODIGO: {{Code}}</p>
                    <div class="adviseModal">
                      <p>Debes enseñar este código en el bar para validarlo</p>
                    </div>
                  </div> 
              <button class="modal-default-button" @click="$emit('close')">X</button>
            </div>
          </div>
        </div>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'offerModal',
     props: {
        Offer: {
        type: Object,
        required: true
        },
         Code: {
        type: String,
        required: true
        },

    },
  data() {
    return{
      showModal: false,
    }
  },
  methods : {
    submit(){   
      }
    },
    
}
</script>
<style> 
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  height: 440px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 33%);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  position: absolute;
  top: 175px;
  right: 32%;
  color: white;
  background: none;
  border: none;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


.modal-container img {
    width: 100%;
    height: 150px!important;
    border-radius: 38px 38px 0px 0px;
    object-fit: cover;
}

.infoOfferModal h3 {
    font-size: 42px!important;
    margin-top: -65px!important;
    margin-left: 25px;
}

.title_offerModal {
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    width: 90%;
    margin-left: 5%;
    margin-bottom: 2%;
    margin-top: -15px;
}

.priceModal {
    color: #FEA701;
    width: 90%;
    font-size: 65px;
    margin-top: 0%;
    margin-left: 5%;
    text-align: center;
    margin-bottom: 5%;
}

.redeemOfferModal {
    background-color: #FEA701;
    border-radius: 12px;
    color: black;
    border: 2px solid black;
    height: 35px;
    width: 60%;
    margin-left: 20%;
    font-weight: 600;
    padding-top: 10px;
    font-size: 25px;
    margin-bottom: 0px;
}

.adviseModal {
    font-size: 15px;
}

@media only screen and (max-width: 1440px) {
  .back_difuminado {
    height: 5px;
  }
  .infoOffer h3 {
    top: 5%;
  }
}
</style>