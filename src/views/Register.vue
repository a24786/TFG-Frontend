<template>
  <div class="register">
    <Header></Header>
    <RegisterForm></RegisterForm>
    
  </div>
</template>
<script>
// @ is an alias to /src
import RegisterForm from '@/components/RegisterForm.vue' 
import Header from '../components/Header.vue'

export default {
  name: 'register',
  components: {
     RegisterForm,
    Header

  }
}
</script>