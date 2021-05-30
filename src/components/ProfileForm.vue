<template>
  <div class="registerForm1">
    <div class="block2">
      <div class="form">

        <div class="perfilImageOptions">
            
          <img class="profileImage" :src="man" alt="%" />
          <div class="buttonsMenu1">
            <button class="button5">Subir foto</button>
            <button class="button4">Eliminar foto</button>
          </div>
        </div>
        <div class="register_form">
          <h3 class="input-titles">Nombre completo</h3>
          <input
            type="name"
            name="name"
            placeholder="Full name"
            v-model="password"
          />
    <h3 class="input-titles">Contraseña</h3>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            v-model="password"
          />
          <h3 class="input-titles">E-mail</h3>
          <input
            type="mail"
            name="email"
            placeholder="E-mail"
            v-model="email"
          />
          <h3 class="input-titles">Num. teléfono</h3>
          <input
            type="tlf"
            name="tlf"
            placeholder="Num. Teléfono"
            v-model="email"
          />
          <button class="button3">Editar perfil</button>
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
.form {
  padding-left: 9%;
  padding-top: 5%;
}

.register_form {
  display: grid;
  width: 90%;
  margin-top: 70px;
}
.buttonsMenu1{
  display: flex;
  flex-wrap: wrap;
  width: 145px;
      padding-top: 21px;
          padding-top: 50px;
    padding-left: 30px;

}
.buttonsMenu1 .button5 {
  border-radius: 5px;
  font-size: inherit;
  font-style: normal;
  font-weight: 600;
  background: skyblue;
  color: royalblue;
border: solid skyblue 2px;
  cursor: pointer;
  height: 40px;
  width: 115px;
   background: skyblue;
  color: royalblue;
border: solid skyblue 2px;
  font-family: Roboto;
  width: 100%;
  margin: 0 0 20px 0;
  padding: 0px;
}
.buttonsMenu1 .button4 {
  margin-bottom: 20px;
  border-radius: 5px;
  font-size: inherit;
  font-style: normal;
  font-weight: 600;
   background: white;
  color: crimson;
border: solid grey 1px;
  cursor: pointer;
  height: 40px;
  width: 115px;
    width: 100%;
  font-family: Roboto;
  margin: 0 0 20px 0;
  padding: 0px;
}
button.button4:hover {
    background-color: crimson;
    color: white;
}
button.button5:hover {
    background-color:royalblue;
    color: skyblue;
    border: solid royalblue 2px;
}
/* ------------------------------ */
.perfilImageOptions{
    display: inline-block;
    width: 100%;
}
.uploadPhoto {
  display: grid;
  padding-left: 50px;
}
.form {
  width: 750px;
}
.profileImage {
    margin-right: 25px;
  float: left;
  width: 250px;
}
.register_form {
  display: grid;
  width: 155%;
  margin-top: 30px;
}
.registerForm1 {
  width: 100%;
  height: 100vh;
}
.input-titles {
  margin-bottom: auto;
  text-align: left;
}
.profileInputs {
  display: inline-grid;
  width: 500px;
}
</style>

