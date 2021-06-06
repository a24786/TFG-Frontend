<template>
  <div class="buttonsMenu">
    <router-link to="/profile">
    <button class="buttonProfile">
      <img class="usuarioSvg" :src="user_negro" alt="%" />
      <label class="labelButton">Perfil ></label>
    </button>
    </router-link>
    <router-link to="/reservations">
    <button class="buttonReserva">
      <img class="usuarioSvg" :src="calendario_negro" alt="%" />
      <label class="labelButton">Reservas ></label>
    </button>
    </router-link>
    <button @click="removeSession()" class="button2 cerrarSesion">Cerrar sesión</button>
  </div>
</template>

<script>
import user_negro from "@/assets/user_negro.svg";
import calendario_negro from "@/assets/calendario_negro.svg";

export default {
  name: "profileReservas",
  props: {
    msg: String,
  },
  data() {
    return { user_negro: user_negro, calendario_negro: calendario_negro };
  },
  methods: {
    submit() {},
    removeSession() {
      document.cookie.split(";").forEach(function (c) {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
      this.$router.push("login");
      console.log("reroute to login");
    },
  },
};
</script>
<style>
.labelButton{
  cursor: pointer;
  display: inline-flex;
}
.usuarioSvg {
  margin-right: 20px;
  width: 25px;
  vertical-align: bottom;
}
.usuarioBoton {
  width: 20px;
  margin-left: 10px;
  float: left;
}
.buttonsMenu {
  width: 155px;
  float: right;
}
.cerrarSesion{
    height: 40px!important;
    width: 155px!important;
    margin-left: 0px!important;
}
.buttonsMenu .buttonProfile {
  border-radius: 5px;
  font-size: inherit;
  font-style: normal;
  font-weight: 600;
  background: rgb(254 167 1);
  cursor: pointer;
  height: 40px;
  width: 155px;
  border: solid rgb(254 167 1) 2px;
  font-family: Roboto;
  width: 100%;
  margin: 0 0 20px 0;
  padding: 0px;
}
.buttonsMenu .buttonReserva {
  margin-bottom: 20px;
  border-radius: 5px;
  font-size: inherit;
  font-style: normal;
  font-weight: 600;
  background: white;
  cursor: pointer;
  height: 40px;
  width: 155px;
  border: solid black 2px;
  width: 100%;
  font-family: Roboto;
  margin: 0 0 20px 0;
  padding: 0px;
}
button.buttonReserva:hover {
  background-color: black;
  color: rgb(254 167 1);
}
button.buttonProfile:hover {
  background-color: black;
  color: rgb(254 167 1);
  border: solid black 2px;
}
</style>