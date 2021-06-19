<template>
  <div class="registerForm">
    <div class="block1">
      <img src="../assets/logo_large.png" />
      <h1>Empezar Experiencia</h1>
    </div>
    <div class="block2">
      <div class="buttons">
        <router-link to="/login">
          <button class="buttonRegister4">Inicia sesión</button>
        </router-link>
        <button class="buttonRegister5">Regístrate</button>
      </div>
      <div class="regForm">
        <h2>Registro de usuario</h2>
        <form class="register_form1" @submit.prevent="submit">
           <div class="input">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              v-model="name"
              required
            />
           </div>
           <div class="input">
            <input
              type="tel"
              name="telephone"
              placeholder="Telefono"
              pattern="[0-9]{9}"
              v-model="telephone"
              required
            />
           </div>
          <div class="input">
            <input
              type="mail"
              name="email"
              placeholder="E-mail"
              v-model="email"
              required
            />
          </div>
          <div class="input">
            <input
              :type="passType1"
              name="password1"
              placeholder="Contraseña"
              v-model="password1"
              required
            />
            <div class="show-hide" @click="passType1 === 'password' ? passType1 ='text' : passType1 ='password'"> {{passType1 === 'password' ? 'mostrar' : 'ocultar'}} </div>
          </div>
          <div class="input">
            <input
              :type="passType2"
              name="password2"
              class="confPwd"
              placeholder="Confirma tu contraseña"
              v-model="password2"
              required
            />
            <div  class="show-hide" @click="passType2 === 'password' ? passType2 ='text' : passType2 ='password'"> {{passType2 === 'password' ? 'mostrar' : 'ocultar'}} </div>
          </div>
          <p class="avisoPwd" v-if="password2 !== password1">Las contraseñas no coinciden</p>
          <button class="button3">Registrarse</button>
        </form>
      </div>
      <div class="privacy_register">
        <p>
          Clicando en "Reqistrarse" acepta nuestras <a class="tos_pol">TOS</a> y
          <a class="tos_pol">Politicas de Privacidad</a>
        </p>
        <!-- <p>
          ¿Ya tienes cuenta propia?
          <router-link to="/login"><a>Inicia Sesión</a></router-link>
        </p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: ' registerForm',
  props: {
    msg: String
  },
  data() {
    return{
      name:'',
      lastName: '',
      telephone:'',
      email:'',
      password1:'',
      password2:'',
      user: {},
      passType1: 'password',
      passType2: 'password'
    }
  },
  methods : {
    submit(){

      if(this.avisoPwd(this.password1, this.password2)){
        this.user = {name: this.name, lastName: this.lastName, phoneNumber: this.telephone, email: this.email, password: this.password1} 
        let success = this.$store.dispatch('registerUser', this.user)

        if(success){
        this.$router.push("/")
        }
      }
         
    }
  },

    
}
</script>
<style>
html {
    height: 100%;
    width: 100%;
}

.register {
    height: 100%;
}

div#app {
    height: 100%;
}
.show-hide{
  cursor: pointer;
  position: absolute;
  top: 28px;
  margin-top: -10px;
  right: 20px;
  height: 20px;
}

.registerForm {
    display: flex;
    width: 100%;
    height: 100%;
}
  
body {
    width: 100%;
    height: 100%;
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
    font-family: 'Roboto', sans-serif;
}
  
.block1 img {
    width: 85%;
    padding-top: 0%;
    margin: 80px 0px 0px 0px;
}
  
.block1 h1{
    font-family: Pattaya;
    font-size: xxx-large;
    margin-top: 4px;
}
  
.buttons {
    text-align: right;
    padding-right: 9%;
    padding-top: 5%;
}
  
button.buttonRegister5 {
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
  
button.buttonRegister4 {
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
  
.regForm h2 {
    font-size: xx-large;
    text-align: left;
    color: black;
}
  
.regForm {
    padding-left: 9%;
    padding-top: 5%;
}
  
.register_form1 {
    display: grid;
    width: 90%;
    margin: 0%;
}
  
.register_form1 .input input{
   
    border-radius: 10px;
    font-size: inherit;
    font-style: normal;
    font-weight: 600;
    cursor: auto;
    background-color: white;
    border-color: black;
    height: 50px;
    align-self: end;
    padding-left: 20px;
    width: 97%;
}
.register_form1 .input{
   margin-top: 20px;
  position: relative;
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
    width: 80%;
    margin-left: 9%;
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
  
button.buttonRegister4:hover {
      background-color: black;
      color: rgb(254 167 1);
}
  
button.buttonRegister5:hover {
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
  
a.tos_pol {
      color: black;
      cursor: pointer;
      text-decoration: underline;
      font-weight: 500;
}

p.avisoPwd {
    color: red;
    text-align: left;
    margin-bottom: -35px;
}
</style>
