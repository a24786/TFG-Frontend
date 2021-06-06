<template>
  <div>
    <HeaderBarDet></HeaderBarDet>
    <input type="date" v-model="date" name="date" id="" class="fechaReservas">
    <div class="barInfoCardRes" v-for="item in tables" :key="item.idTable">
     
      <div>
   

        <div class="barInfo">
          <div class="leftInfo">
            <img class="svgInfo" :src="info" alt="%" />
            <h2 class="mesa-Aforo">
              MESA INTERIOR | AFORO:
               {{item.capacity}}
            </h2>
          </div>
          <div class="rightInfo" v-if="item.scheduleTableReservations.length!==0">
            <router-link :to="{name: 'BarResDet', params: { id:  urlBar, idMesa: item.idTable}}">
              <img class="reserve_disponible" :src="resv_verde" alt="%" />
            </router-link>
          </div>
          <div class="rightInfo" v-else>
            <img class="reserve_disponible" :src="resv_rojo" alt="%" />
          </div>
        </div>

        <hr class="hr" />

        <div class="icons">
          <div class="leftIcons">
            <img class="svgUser" :src="user" alt="%" />
            {{item.capacity}}
            <img class="svgHome" :src="home" alt="%" />
          </div>
          <div class="rightIconDis" v-if="item.scheduleTableReservations.length!==0">
            Disponible
          </div>
          <div class="rightIconNoDis" v-else>
            No disponible
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBarDet from "@/components/HeaderBarDet.vue";

import home from "../assets/home.svg";
import user from "@/assets/user.svg";
import stopwatch from "@/assets/stopwatch.svg";
import info from "@/assets/info.svg";
import resv_verde from "@/assets/resv_verde.svg";
import resv_rojo from "@/assets/resv_rojo.svg";

export default {
  name: "barOffers",
  components: {
    HeaderBarDet,
  },
  props: {
    msg: String,
  },
  data() {
    return{
      date: '', // Coge la fecha de hoy por defecto
      user: user,
      home: home,
      stopwatch: stopwatch,
      info: info,
      resv_verde: resv_verde,
      resv_rojo: resv_rojo,
      tables: [],
      urlBar: null,
    } 
  },
  mounted() {
    this.getDate()
    this.$store.dispatch("getBarReservations", { id: this.$route.params.id, date : this.formatDate(this.date)} ).then((res) => {
            this.tables = res
        })
  },
  beforeMount() {
    this.urlBar = this.$route.params.id
  },
  methods:{
    getDate(){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = yyyy + '-' + mm + '-' + dd;
      this.date = today;
    },
    formatDate(date){
      let splited = date.split('-')
      let reversed = splited.reverse()
      let day = reversed[0]
      let mm = reversed[1]
      let yy = reversed[2]
      console.log(reversed)
      return day + '-' + mm + '-' +yy
    }
  }
};

</script>
<style>
.fechaReservas {
    visibility: hidden;
}
.rightIconDis {
    color: green;
    margin-right: 5%;
    margin-bottom: 1%;
}
.rightIconNoDis {
    color: red;
    margin-right: 5%;
    margin-bottom: 1%;
}
.barInfoCardRes{
  align-items: center;
    background-color: #f3f3f3;
    border: solid silver 1px;
    border-radius: 4px;
    margin-bottom: 10px;
    color: black;
    margin-left: 10%;
    width: 80%;
}
</style>