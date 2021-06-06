<template>
  <div>
    <div
      class="barInfoCard"
      v-for="item in $store.state.userReservations"
      :key="item.idReservationBook"
    >
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
</template>

<script>
import home from "@/assets/home.svg";
import user from "@/assets/user.svg";
import stopwatch from "@/assets/stopwatch.svg";
import info from "@/assets/info.svg";
import man from "@/assets/man.svg";

export default {
  name: "reservationsList",
  props: {
    msg: String,
  },
  data() {
    return {
      user: user,
      home: home,
      stopwatch: stopwatch,
      info: info,
      man: man,
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
.hr{
  width: 100%;
}
.leftInfo {
  display: flex;
}
.rightInfo {
}
.barInfo {
  display: flex;
  justify-content: space-between;
}
.icons {
  justify-content: space-between;
  display: flex;
}
.rightIcon {
  align-content: right;
  display: flex;
}
.leftIcons {
  align-items: flex-start;
}
.svgInfo {
  margin-right: 15px;
  width: 20px;
  margin-left: 10px;
}
.svgHome {
  width: 20px;
  margin-left: 10px;
}
.svgUser {
  width: 20px;
  margin-left: 10px;
}
.svgWatch {
  width: 20px;
}
.barInfoCard {
  align-items: center;
  background-color: #f3f3f3;
  border: solid silver 1px;
  border-radius: 4px;
  margin-bottom: 10px;
}
.barName {
  text-align: right;
  margin: 26px;
}
.mesa-Aforo {
  margin-top: 31px;
  text-align: left;
  color: #fea701;
}
</style>