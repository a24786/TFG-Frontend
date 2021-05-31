<template>
  <div>
    <div class="barInfoCard">
      <div class="barInfo">
        <div class="leftInfo">
          <img class="svgInfo" :src="info" alt="%" />
          <h2 class="mesa-Aforo">MESA Y AFORO</h2>
        </div>
        <div class="rightInfo">
          <h1 class="barName">BAR VENADO</h1>
        </div>
      </div>
      <hr />
      <div class="icons">
        <div class="leftIcons">
          <img class="svgHome" :src="home" alt="%" />
          <img class="svgUser" :src="user" alt="%" />
        </div>
        <div class="rightIcon">
          <img class="svgWatch" :src="stopwatch" alt="%" />
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
}
.leftIcons {
  align-items: flex-start;
}
.svgInfo {
  margin-right: 15px;
  width: 20px;
}
.svgHome {
  width: 20px;
}
.svgUser {
  width: 20px;
}
.svgWatch {
  width: 20px;
  float: right;
}
.barInfoCard {
  align-items: center;
  background-color: silver;
  border: solid silver 1px;
  border-radius: 4px;
}
.barName {
  text-align: right;
  margin: 26px;
}
.mesa-Aforo {
  margin-top: 26px;
  text-align: left;
  color: goldenrod;
}
</style>