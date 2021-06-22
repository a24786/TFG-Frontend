<template>
  <div>
     <div v-if="loading">
        Cargando...
    </div>
    <div v-else class="headerBarDet" >
     
      <div class="banner_barDet">
        <img :src="'https://gotherestorage.blob.core.windows.net'+bar.barImages[0].imgUrl">
      </div>

      <div class="icono_barDet">
        <img :src="'https://gotherestorage.blob.core.windows.net'+bar.barImages[1].imgUrl">
      </div>

      <div class="infoBarDet">
        <div class="titleBarDet">
          <h3>{{bar.name}}</h3>
        </div>
        <p class="direccion_barDet">
          {{bar.description}}
        </p>
        <div class="barPhone"><img :src="telefono">{{$store.state.bar.phone}}</div>
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
      loading: true,
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
      this.loading = false
    })
  },
  methods: {

  }
}
</script>
<style> 
.headerBarDet {
    width: 100%;
    height: 175px;
    margin-bottom: 8%;
} 
.banner_barDet img {
    width: 100%;
    height: 175px;
    object-fit: cover;
}
.icono_barDet img {
    margin-left: -68%;
    margin-top: -7%;
    width: 200px;
    height: 180px;
    border-radius: 50%;
}
.infoBarDet {
    color: black;
}
.titleBarDet h3 {
    color: white;
    font-size: 50px;
    position: absolute;
    top: 18%;
    left: 26%;
}
.direccion_barDet {
    position: absolute;
    left: 26%;
    top: 36%;
    font-size: 20px;
    width: 20%;
    text-align: initial;
    color: #828282;
    font-family: 'Roboto';
}
.barPhone {
    position: absolute;
    right: 20%;
    top: 40%;
    font-weight: 600;
    font-family: 'Roboto';
    font-size: 22px;
}
</style>