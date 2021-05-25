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
      <div class="form">
        <h2>¡Hola de nuevo!</h2>
        <div class="login_form">
          <input type="mail" name="email" placeholder="E-mail" v-model="email">
          <input type="password" name="password" placeholder="Contraseña" v-model="password">
          <button class="button3" @click="submit()">Iniciar Sesión</button>
        </div>
      </div>
      <div class="privacy_register">
        <p>¿Aún no tienes cuenta propia? <router-link to="/register"><a class="create_account">Crea una cuenta</a></router-link></p>
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
  name: 'loginForm',
  props: {
    msg: String
  },
  data() {
    return{
      email:'',
      password:'',
      user: {},
    }
  },
  methods : {
    submit(){
      this.user = {email: this.email, password: this.password} 
      this.$store.dispatch('loginUser', this.user)   
      }
    },
    
}
</script>
