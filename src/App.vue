<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  beforeCreate() {
   this.$store.dispatch('getPosition')
   this.$store.dispatch('fetchUserToken')
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
