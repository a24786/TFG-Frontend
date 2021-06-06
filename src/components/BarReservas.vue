<template>
  <div>
    <HeaderBarDet></HeaderBarDet>
     <input type="date" v-model="date" name="date" id="">
    <div class="barInfoCard" v-for="item in tables" :key="item.idTable">
     
      <div>
   

        <div class="barInfo">
          <div class="leftInfo">
            <img class="svgInfo" :src="info" alt="%" />
            <h2 class="mesa-Aforo">
              MESA INTERIOR | AFORO:
               {{item.capacity}}
            </h2>
          </div>
          <div class="rightInfo">
            <h1 class="barName">
              
            </h1>
          </div>
        </div>

        <hr class="hr" />

        <div class="icons">
          <div class="leftIcons">
            <img class="svgUser" :src="user" alt="%" />
            
            <img class="svgHome" :src="home" alt="%" />
          </div>
          <div class="rightIcon">
            <img class="svgWatch" :src="stopwatch" alt="%" />

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
      tables: []
    } 
  },
  mounted() {
    this.getDate()
    this.$store.dispatch("getBarReservations", { id: this.$route.params.id, date : this.formatDate(this.date)} ).then((res) => {
            this.tables = res
        })
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
</style>