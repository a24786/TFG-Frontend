<template>
  <div class="buttonsMenu">
    <button class="buttonProfile">
      <img class="usuarioBoton" :src="user" alt="%" /> Perfil >
    </button>
    <button class="buttonReserva">
      <img class="usuarioBoton" :src="user" alt="%" />Reservas >
    </button>
  </div>
</template>

<script>
import user from "@/assets/user.svg";

export default {
  name: "profileReservas",
  props: {
    msg: String,
  },
  data() {
    return { user: user };
  },
  methods: {
    submit() {},
  },
};
</script>
<style>
.usuarioBoton {
  width: 20px;
  margin-left: 10px;
  float: left;
}
.buttonsMenu {
  display: flex;
  flex-wrap: wrap;
  width: 155px;
  float: right;
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