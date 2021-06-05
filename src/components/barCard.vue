<template>
  <div class="barCards" >
    <!-- <div>{{$store.state.bars}}</div> -->
    <div class="tarjetaBar" v-for="item in $store.state.bars" :key="item.idbar">
      <div class="banner_bar">
        <img src="../assets/cafe_croissant.jpg">
      </div>
      <div class="icono_bar">
        <img src="../assets/cafe_croissant.jpg">
      </div>
      <div class="infoBar">
        <div class="difuminado_bar">
          <h3>{{item.name}}</h3>
          <div class="back_difuminado_bar trans"></div>
        </div>
        <p class="direccion_bar">{{item.address}}</p>
      </div> 
      <div class="button_reservarBar">
        <router-link :to="{name: 'BarBookings', params: { id:  item.idbar}}">
          <button>RESERVAR</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'barCard',
  props: {
    msg: String
  },    
}
</script>
<style> 
.barCards {
    display: grid;
    width: 100%;
    height: 100%;
}

.tarjetaBar {
    width: 50%;
    height: 85%;
    background-color: white;
    border-radius: 30px 30px 0px 0px;
    box-shadow: 0px 30px 20px -30px grey;
    margin-left: 5%;
    margin-bottom: 5%;
}

.banner_bar img {
    width: 100%;
    height: 120px;
    border-radius: 30px 30px 0px 0px;
    -o-object-fit: cover;
    object-fit: cover;
}

.icono_bar img {
    margin-left: -68%;
    margin-top: -11%;
    width: 20%;
    height: 140px;
    border-radius: 50%;
}

.difuminado_bar h3 {
    color: white;
    font-size: 32px;
    font-weight: 600;
    text-align: left;
    padding: 1%;
    margin-top: -16%;
    margin-left: 28%;
    z-index: 13;
    font-family: 'Roboto';
}

/* .back_difuminado_bar {
    height: 40px;
    background-color: black;
    padding: 10px;
    box-shadow: 0px -4px 4px 2px black;
    margin-top: -12.7%;
    margin-left: 3px;
    z-index: 1;
    width: 96.7%;
} */

p.direccion_bar {
    width: 31%;
    margin-left: 29%;
    margin-top: -3%;
    text-align: left;
    color: grey;
    font-family: 'Roboto';
}

.button_reservarBar button {
    background-color: white;
    color: #FEA701;
    border: 2px #FEA701 solid;
    border-radius: 20px;
    height: 38px;
    width: 25%;
    font-weight: 400;
    font-size: 28px;
    margin-top: 20px;
    font-family: 'Roboto';
}

.button_reservarBar button:hover {
    cursor: pointer;
    background-color: black;
    border: 0px;
}

@media only screen and (max-width: 1050px) {
  .difuminado_bar h3 {
    margin-top: -17%;
    font-size: 26px;
  }
  .icono_bar img {
    height: 12vh;
  }
  .button_reservarBar button {
    font-weight: 500;
    font-size: 20px;
  }
  .banner_bar img {
    height: 13vh;
  }
  p.direccion_bar {
    font-size: 15px;
  }
}
@media only screen and (max-width: 1450px) {
  .difuminado_bar h3 {
    margin-top: -16%;
  }
  .icono_bar img {
    height: 17vh;
  }
  .tarjetaBar {
    width: 45%;
  }
}
@media only screen and (max-width: 750px) {
  .icono_bar img {
    height: 10vh;
  }
  .button_reservarBar button {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .difuminado_bar h3 {
    margin-top: -20%;
    font-size: 26px;
  }
}
@media only screen and (max-width: 450px) {
  .tarjetaBar {
    width: 85%;
  }
  .icono_bar img {
    height: 12vh;
    width: 30%;
    margin-left: -58%;
    margin-top: -17%;
  }
  .difuminado_bar h3 {
    margin-top: -22%;
    margin-left: 40%;
  }
  .button_reservarBar button {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 30px;
    height: 5vh;
    width: 48%;
  }
  p.direccion_bar {
    font-size: 15px;
    margin-left: 41%;
    width: 36%;
  }
  .banner_bar img {
    height: 10vh;
  }
}
@media only screen and (max-height: 750px) {
  .banner_bar img {
    height: 14vh;
  }
  .icono_bar img {
    height: 15vh;
  }
  .difuminado_bar h3 {
    margin-top: -17%;
  }
}
</style>