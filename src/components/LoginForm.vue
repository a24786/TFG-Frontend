<template>
  <div class="loginForm">
    <div class="block1">
      <img src="../assets/logo_large.png">
      <h1>Empezar Experiencia</h1>
    </div>
    <div class="block2">
      <div class="buttons">
        <button class="button1">Inicia sesión</button>
        <router-link to="/register">
        <button class="button2">Regístrate</button>
        </router-link>
      </div>
      <div class="logForm">
        <h2>¡Hola de nuevo!</h2>
        <div class="login_form">
           <div class="log-in-error" v-if="error">El email o la contrseña no son correctos</div>
          <input v-bind:class="{ 'hasError':  error }" type="mail" name="email" placeholder="E-mail" v-model="email">
          <input v-bind:class="{ 'hasError':  error }" type="password" name="password" placeholder="Contraseña" v-model="password">
          <button v-if="loading" disabled class="button3">Iniciar Sesión</button>
          <button v-else class="button3" @click="submit()">Iniciar Sesión</button>
        </div>
      </div>
     
      <!-- <div class="privacy_register">
        <p>¿Aún no tienes cuenta propia? <router-link to="/register"><a class="create_account">Crea una cuenta</a></router-link></p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginForm',
  props: {
    msg: String
  },
  data() {
    return{
      email:'',
      password:'',
      user: {},
      error: false,
      loading: false
    }
  },
  methods : {
    submit(){
      this.user = {email: this.email, password: this.password} 
      this.loading = true
      this.$store.dispatch('loginUser', this.user).then( res => {
        !res ? this.error = true : this.error = false
        this.loading = false
      })
    }
  }
}
</script>
<style>
html {
    height: 100%;
    width: 100%;
}

.log-in-error{
  background-color:  #dc143c;
  color: white;
  border-radius: 5px;
  padding: 15px 5px;
}
.login {
    height: 100%;
}

div#app {
    height: 100%;
}

.loginForm {
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
    font-family: Roboto;
  }
  
  .block1 img {
    width: 85%;
    padding-top: 0%;
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
  
  button.button1 {
    border-radius: 5px;
    font-size: inherit;
    font-style: normal;
    font-weight: 600;
    background: rgb(254 167 1);
    cursor: pointer;
    height: 40px;
    width: 115px;
    border: solid rgb(254 167 1) 2px;
    font-family: Roboto;
  }
  
  button.button2 {
    border-radius: 5px;
    font-size: inherit;
    font-style: normal;
    font-weight: 600;
    background: white;
    cursor: pointer;
    height: 40px;
    width: 100px;
    border: solid black 2px;
    margin-left: 10px;
    font-family: Roboto;
  }
  
  .logForm h2 {
    font-size: xx-large;
    text-align: left;
    color: black;
  }
  
  .logForm {
    width: 90%;
    padding-left: 10%;
    padding-top: 10%;
  }
  
  .login_form {
    display: grid;
    width: 90%;
    margin-top: 5%;
  }
  
  .login_form input {
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
  button.button3:disabled{
    background-color: grey;
  }
  
  .privacy_register {
    text-align: center;
  }
  
  p {
    color: grey;
  }
  
  .privacy_register a {
    color: deepskyblue;
    text-decoration: none;
  }
  
  a.create_account:hover {
    text-decoration: underline;
  } 
  
  .create_account:hover {
    cursor: pointer;
    text-decoration: underline;
  } 
  
  input:focus {
    outline: none;
  }
  
  button.button2:hover {
      background-color: black;
      color: rgb(254 167 1);
  }
  
  button.button1:hover {
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
  .hasError {
  border-color: #dc143c !important;
  border: solid;
}
</style>
