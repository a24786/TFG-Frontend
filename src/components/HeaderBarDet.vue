<template>
  <div>
    <div class="headerBarDet" >
      <div class="banner_bar">
        <img src="../assets/cafe_croissant.jpg">
      </div>

      <div class="icono_bar">
        <img src="../assets/cafe_croissant.jpg">
      </div>

      <div class="infoBar">
        <div class="difuminado_bar">
          <h3></h3>
          <div class="back_difuminado_bar trans"></div>
        </div>
        <p class="direccion_bar"></p>
         {{bar.name}}
        <!-- <div><img :src="telefono">{{$store.state.bar.phone}}</div> -->
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
    return { 
      telefono: telefono,
      name: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      userToken: "",
      data: null,
      bar: {}
      };
  },
  created(){
    this.$store.dispatch("loadBarData", this.$route.params.id ).then((data) =>{
      this.bar =  data
    })
  },
  methods: {

  }
}
</script>
<style> 

</style>