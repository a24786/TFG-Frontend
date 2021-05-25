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
        <p>¿Ya tienes cuenta propia? <router-link to="/login"><a>Inicia Sesión</a></router-link></p>
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
