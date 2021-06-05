<template>
  <div>
    <div class="barInfoCard" v-for="item in $store.state.userReservations"  :key="item.idReservationBook"
    >
    <div>
      <HeaderBarDet></HeaderBarDet>
      
      <div class="barInfo">
        <div class="leftInfo">
          <img class="svgInfo" :src="info" alt="%" />
          <h2 class="mesa-Aforo">
            MESA INTERIOR | AFORO:
            {{ item.scheduleTableReservation.table.capacity }}
          </h2>
        </div>
        <div class="rightInfo">
          <h1 class="barName">
            {{ item.scheduleTableReservation.table.bar.name }}
          </h1>
        </div>
      </div>

      <hr class="hr">

      <div class="icons">
        <div class="leftIcons">
          <img class="svgUser" :src="user" alt="%" />
          {{ item.scheduleTableReservation.table.capacity }}
          <img class="svgHome" :src="home" alt="%" />
        </div>
        <div class="rightIcon">
          
          <img class="svgWatch" :src="stopwatch" alt="%" />
          
            {{ item.reservationDate }} |
            {{ item.scheduleTableReservation.schedule.checkInHour }}
          
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBarDet from '@/components/HeaderBarDet.vue'

export default {
  name: 'barOffers',
  components:{
    HeaderBarDet,
  },
  props: {
    msg: String
  },    
}
</script>
<style> 

</style>