<template>
  <div>

    <!-- :to="{name: 'Mesa', params: { id:  mesa.id}}"  ESTO TE LLEVA DESDE LA TARJETA A LA RESERVA EN CONCRETO, METER DENTRO DEL ROUTERLINK, TIENES QUE CREAR
    LA VISTA Y PONER EN EL ROUTER INDEX SU RUTA, HABLA CON RUBEN -->
    <div
      
      class="barInfoCard1"
      v-for="item in $store.state.userReservations"
      :key="item.idReservationBook"
    >
      <div class="barInfo1">
        <div class="leftInfo1">
          <img class="svgInfo1" :src="info" alt="%" />
          <h2 class="mesa-Aforo1">
            MESA INTERIOR | AFORO:
            {{ item.scheduleTableReservation.table.capacity }}
          </h2>
        </div>
        <div class="rightInfo1">
          <h1 class="barName1">
            <img class="svgCalendar1" :src="calendar" alt="%" />
          </h1>
        </div>
      </div>
      <hr class="hr1">
      <div class="icons1">
        <div class="leftIcons1">
          <img class="svgUser1" :src="user" alt="%" />
          {{ item.scheduleTableReservation.table.capacity }}
          <img class="svgHome1" :src="home" alt="%" />
        </div>
        <div class="rightIcon1">
          <label class="disponibilidad1">Disponible</label>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import home from "@/assets/home.svg";
import user from "@/assets/user.svg";
import calendar from "@/assets/calendar.svg";
import info from "@/assets/info.svg";
// import calendarRed from "@/assets/calendarRed.svg";

export default {
 name: "reservationsByBar",
  props: {
    msg: String,
  },
  data() {
    return {
      user: user,
      home: home,
      calendar: calendar,
      // calendarRed:calendarRed,
      info: info,
    };
  },
  methods: {
    submit() {},
  },
  created() {
    this.$store.dispatch("getReservations");
  },
};

</script>

<style>
.hr1{
  width: 100%;
}
.leftInfo1 {
  display: flex;
}
.rightInfo1 {
}
.barInfo1 {
  display: flex;
  justify-content: space-between;
}
.icons1 {
  justify-content: space-between;
  display: flex;
}
.rightIcon1 {
  align-content: right;
  display: flex;
}
.leftIcons1 {
  align-items: flex-start;
}
.svgInfo1 {
  margin-right: 15px;
  width: 20px;
  margin-left: 10px;
}
.svgHome1 {
  width: 20px;
  margin-left: 10px;
}
.svgUser1 {
  width: 20px;
  margin-left: 10px;
}
.svgCalendar1 {
  width: 35px;
  margin-right: 30px;
  border-color: limegreen;
}
.barInfoCard1 {
  align-items: center;
  background-color: #f3f3f3;
  border: solid silver 1px;
  border-radius: 4px;
  margin-bottom: 10px;
}
.barName1 {
  text-align: right;
  margin: 26px;
}
.mesa-Aforo1 {
  margin-top: 31px;
  text-align: left;
  color: #fea701;
}
.disponibilidad1{
  color: #33ed00e5;
  font-size: 25px;
  margin-right: 20px;
}
</style>