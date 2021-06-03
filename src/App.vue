<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pattaya&family=Roboto:wght@300;400;500&display=swap');
</style>
<script>
export default {
  beforeCreate() {
   this.$store.dispatch('getPosition')
   this.$store.dispatch('fetchUserToken').then((e) => {
     if(e==null){
       this.$router.push('login')
     }
   })
  }
}


</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
