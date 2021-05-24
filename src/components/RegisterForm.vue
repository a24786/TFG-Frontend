<template>
  <div class="registerForm">
    <div class="block1">
      <img src="../assets/logo_large.png">
      <h1>Empezar Experiencia</h1>
    </div>
    <div class="block2">
      <div class="buttons">
        <router-link to="/login">
        <button class="button4">Inicia sesión</button>
        </router-link>
        <button class="button5">Regístrate</button>
      </div>
      <div class="form">
        <h2>Registro de usuario</h2>
        <div class="register_form">
          <div class="fullname">
            <input type="text" name="name" placeholder="Nombre" class="name" v-model="name">
            <input type="text" name="surname" placeholder="Apellidos" class="surname" v-model="surname">
          </div>
          <input type="password" name="password" placeholder="Contraseña" v-model="password">
          <input type="mail" name="email" placeholder="E-mail" v-model="email">
          <button class="button3" @click="submit()">Registrarse</button>
        </div>
      </div>
      <div class="privacy_register">
        <p>Clicando en "Reqistrarse" acepta nuestras <a class="tos_pol">TOS</a> y <a class="tos_pol">Politicas de Privacidad</a></p>
        <p>¿Ya tienes cuenta propia? <a>Inicia Sesión</a></p>
      </div>
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pattaya&family=Roboto:wght@300;400;500&display=swap');
</style>
<script>
export default {
  name: 'registerForm',
  props: {
    msg: String
  },
  data() {
    return{
      name:'',
      surname:'',
      password:'',
      email:'',
      user: {},
    }
  },
  methods : {
    submit(){
      this.user = {name: this.name, surname: this.surname, password: this.password, email: this.email} 
      this.$store.dispatch('registerUser', this.user)   
      }
    },
    
}
</script>
<style> 
.registerForm {
  display: flex;
  width: 100%;
  height: 100vh;
}

body {
  width: 100%;
  height: 100vh;
  margin: 0px;
}

.block1 {
  width: 50%;
  height: 100%;
  background-color: #FEA701;
  text-align: center;
  color: black;
}

.block2 {
  width: 50%;
  font-family: Roboto;
}

.block1 img {
  width: 85%;
  padding-top: 15%;
}

.block1 h1{
  font-family: Pattaya;
  font-size: xxx-large;
  margin-top: 5px;
}

.buttons {
  text-align: right;
  padding-right: 9%;
  padding-top: 5%;
}

button.button5 {
  border-radius: 5px;
  font-size: inherit;
  font-style: normal;
  font-weight: 600;
  background: rgb(254 167 1);
  cursor: pointer;
  height: 40px;
  width: 100px;
  border: solid rgb(254 167 1) 2px;
  font-family: Roboto;
  margin-left: 10px;
}

button.button4 {
  border-radius: 5px;
  font-size: inherit;
  font-style: normal;
  font-weight: 600;
  background: white;
  cursor: pointer;
  height: 40px;
  width: 115px;
  border: solid black 2px;
  
  font-family: Roboto;
}

.form h2 {
  font-size: xx-large;
  text-align: left;
  color: black;
}

.form {
  padding-left: 9%;
  padding-top: 5%;
}

.register_form {
  display: grid;
  width: 90%;
  margin-top: 70px;
}

input {
  margin-top: 20px;
  border-radius: 10px;
  font-size: inherit;
  font-style: normal;
  font-weight: 500;
  cursor: auto;
  height: 45px;
  background-color: white;
  border-color: black;
  padding-left: 20px;
  font-family: Roboto;
}

button.button3 {
  margin-top: 50px;
  border-radius: 10px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  height: 60px;
  border-color: black;
  padding-left: 20px;
  background-color: black;
  font-size: x-large;
  color: white;
  font-family: Roboto;
  transition-duration: 0.5s;
}

.privacy_register {
  text-align: center;
}

p {
  color: grey;
}

a {
  color: deepskyblue;
}

a:hover {
  cursor: pointer;
  text-decoration: underline;
} 

input:focus {
  outline: none;
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

button.button3:hover {
    background-color: rgb(254 167 1);
    color: black;
    border:solid rgb(254 167 1) 1px;
    transition-duration: 0.5s;
}

input.name {
    width: 25%;
    margin-right: 10px;
}

.fullname {
    text-align: left;
}

input.surname {
    width: 65%;
}

a.tos_pol {
    color: black;
    cursor: pointer;
    text-decoration: underline;
    font-weight: 500;
}

</style>