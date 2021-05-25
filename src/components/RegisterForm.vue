<template>
  <div class="registerForm">
    <div class="block1">
      <img src="../assets/logo_large.png" />
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
        <form class="register_form">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            v-model="name"
            required
          />
          <input
            type="tel"
            name="telephone"
            placeholder="Telefono"
            pattern="[0-9]{9}"
            v-model="telephone"
            required
          />
          <input
            type="mail"
            name="email"
            placeholder="E-mail"
            v-model="email"
            required
          />
          <input
            type="password"
            name="password1"
            placeholder="Contraseña"
            v-model="password1"
            required
          />
          <input
            type="password"
            name="password2"
            class="confPwd"
            placeholder="Confirma tu contraseña"
            v-model="password2"
            required
          />
          <button class="button3" @click="submit()">Registrarse</button>
        </form>
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
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pattaya&family=Roboto:wght@300;400;500&display=swap");
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
      lastName: '',
      telephone:'',
      email:'',
      password1:'',
      password2:'',
      user: {},
    }
  },
  methods : {
    submit(){
      if(this.avisoPwd(this.password1, this.password2)){
        this.user = {name: this.name, lastName: this.lastName, phoneNumber: this.telephone, email: this.email, password: this.password1} 
        this.$store.dispatch('registerUser', this.user)
      }else{
        this.$store.dispatch('errorPwd')
      }
         
    },
    avisoPwd(pass1, pass2){
      if(pass1 !== pass2){
        return false;
      }else{
        return true;
      }
      
    }
  },

    
}
</script>
