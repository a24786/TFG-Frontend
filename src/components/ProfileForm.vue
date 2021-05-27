<template>
  <div class="registerForm1">
    <div class="block2">
      <div class="form">
        <div>
          <img class="profileImage" :src="man" alt="%" />
          <div class="buttonsMenu">
            <button class="button5">Perfil</button>
            <button class="button4">Reservas</button>
          </div>
        </div>
        <div class="register_form">
          <label class="input-titles">Nombre completo</label>
          <input
            type="name"
            name="name"
            placeholder="Full name"
            v-model="password"
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            v-model="password"
          />
          <input
            type="mail"
            name="email"
            placeholder="E-mail"
            v-model="email"
          />
          <input
            type="tlf"
            name="tlf"
            placeholder="Num. Teléfono"
            v-model="email"
          />
          <button class="button3" @click="submit()">Registrarse</button>
        </div>
      </div>
      <div class="privacy_register">
        <p>
          Clicando en "Reqistrarse" acepta nuestras <a class="tos_pol">TOS</a> y
          <a class="tos_pol">Politicas de Privacidad</a>
        </p>
        <p>
          ¿Ya tienes cuenta propia?
          <router-link to="/login"><a>Inicia Sesión</a></router-link>
        </p>
      </div>
    </div>
  </div>
</template>

    

<script>
import man from "@/assets/man.svg";
export default {
  name: "ProfileForm",
  props: {
    msg: String,
  },
  data() {
    return {
      man: man,
    };
  },
  methods: {
    submit() {},
  },
};
</script>
<style>
.buttonsMenu{
  display: flex;
  flex-wrap: wrap;
  width: 115px;

}
button.button4:hover {
    background-color: black;
    color: rgb(254 167 1);
}
button.button5:hover {
    background-color: black;
    color: rgb(254 167 1);
    border: solid black 2px;
}
.uploadPhoto {
  display: grid;
  padding-left: 50px;
}
.form {
  width: 750px;
}
.profileImage {
  float: left;
  width: 250px;
}
.register_form {
  display: grid;
  width: 90%;
  margin-top: 70px;
}
.registerForm1 {
  width: 100%;
  height: 100vh;
}
.input-titles {
  float: left;
}
.profileInputs {
  display: inline-grid;
  width: 500px;
}
</style>

