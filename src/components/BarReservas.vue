<template>
  <div>
    <div
      class="barInfoCard"
    >
      <input type="date" v-model="date"/>
      <div>
        <HeaderBarDet></HeaderBarDet>

        <div class="barInfo">
          <div class="leftInfo">
            <img class="svgInfo" :src="info" alt="%" />
            <h2 class="mesa-Aforo">
              MESA INTERIOR | AFORO:
              
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
      date: new Date().toISOString().substr(0, 10) // Coge la fecha de hoy por defecto
    } 
  }
};

</script>
<style>
</style>