<template>
  <div>
    <div class="headerBarDet" v-for="item in $store.state.bars" :key="item.idbar"
    >
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
        <div><img :src="telefono">{{item.phone}}</div>
      </div>

    </div>
  </div>
</template>

<script>
import telefono from "@/assets/telefono.svg";
export default {
  name: 'headerBarDet',
  props: {
    msg: String
  },    
  data() {
    return { telefono: telefono};
  },
}
</script>
<style> 

</style>