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
        <button>RESERVAR</button>
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
  name: 'barOffers',
  props: {
    msg: String
  },    
}
</script>
<style> 

</style>