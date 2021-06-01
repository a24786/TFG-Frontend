<template>
  <div class="registerForm1">
    <div class="block2">
      <div class="formProfile">
        <div class="perfilImageOptions">
          <img class="profileImage" :src="man" alt="%" />
          <div class="buttonsMenu1">
            <button class="button5">Subir foto</button>
            <button class="button4">Eliminar foto</button>
          </div>
        </div>
        <div class="register_form2">
          <h3 class="input-titles">Nombre</h3>
          <input type="text" name="name" placeholder="Nombre" v-model="name" />
          <h3 class="input-titles">Apellido</h3>
          <input
            type="text"
            name="surname"
            placeholder="Apellido"
            v-model="lastName"
          />
          <h3 class="input-titles">Num. teléfono</h3>
          <input
            type="tlf"
            name="tlf"
            placeholder="Num. Teléfono"
            v-model="phoneNumber"
          />
          <h3 class="input-titles">E-mail</h3>
          <input
            disabled
            type="email"
            name="email"
            placeholder="E-mail"
            v-model="email"
          />
          <h3 class="input-titles">Contraseña</h3>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            v-model="password"
          />
          <button class="buttonProfile3">Editar perfil</button>
        </div>
      </div>
    </div>
  </div>
</template>

    
<script>
import man from "@/assets/man.svg";
export default {
  name: "ProfileForm",
  beforeCreate() {
    this.$store.dispatch("loadUserData", this.$store.state.userToken)
      // .then((e) => {
      //   this.data = e;
      // });
  },
  mounted() {
    this.$store.dispatch("loadUserData", this.$store.state.userToken)
    console.log("UPDATED");
    console.log(this.$store.state.userToken);
    console.log(this.$store.state.user);
    this.name = this.$store.state.user.name;
    this.phoneNumber = this.$store.state.user.phoneNumber;
    this.lastName = this.$store.state.user.lastName;
    this.email = this.$store.state.user.email;
  },
  data() {
    return {
      name: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      man: man,
      userToken: "",
      data: null,
    };
  },
  methods: {
    submit() {},
  },
};
</script>
<style>
.register_form {
  padding-left: 9%;
  padding-top: 5%;
}
.register_form2 input {
  margin-top: 7%;
  border-radius: 10px;
  font-size: inherit;
  font-style: normal;
  font-weight: 600;
  cursor: auto;
  background-color: white;
  border-color: black;
  height: 60%;
  align-self: end;
  padding-left: 20px;
}
.register_form2 {
  display: grid;
  width: 90%;
  margin-top: 70px;
  margin-bottom: 50px;
}
.buttonsMenu1 {
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
  font-family: "Roboto", sans-serif;
  margin: 0 0 20px 0;
  padding: 0px;
}
button.button4:hover {
  background-color: crimson;
  color: white;
}
button.button5:hover {
  background-color: royalblue;
  color: skyblue;
  border: solid royalblue 2px;
}
.perfilImageOptions {
  display: inline-block;
  width: 100%;
}
.uploadPhoto {
  display: grid;
  padding-left: 50px;
}
.form {
  width: 100%;
  padding: 5%;
}
.profileImage {
  margin-right: 25px;
  float: left;
  width: 250px;
}
.register_form {
  display: grid;
  width: 85%;
  margin-top: 30px;
}
.registerForm1 {
  width: 100%;
  height: 100%;
}
.input-titles {
  margin-bottom: auto;
  text-align: left;
}
.profileInputs {
  display: inline-grid;
  width: 500px;
}
button.buttonProfile3 {
  margin-top: 50px;
  border-radius: 10px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  height: 60px;
  border-color: black;
  padding-left: 5px;
  background-color: black;
  font-size: x-large;
  color: white;
  font-family: "Roboto", sans-serif;
  transition-duration: 0.5s;
  width: 35%;
}

button.buttonProfile3:hover {
  background-color: rgb(254 167 1);
  color: black;
  border: solid rgb(254 167 1) 1px;
  transition-duration: 0.5s;
}
</style>

