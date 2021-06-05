<template>
  <div class="bars" id="bars">
    <Header></Header>
    <router-link to="/bars"><BackButton></BackButton></router-link>
    <router-link to="/barBookings"><TablesButton></TablesButton></router-link>
  </div>
</template>
<script>

import Header from '@/components/Header.vue'

import BackButton from '@/components/BackButton.vue'
import TablesButton from '@/components/TablesButton.vue'

export default {
  name: 'bars',
  components: {
    Header,
    BackButton,
    TablesButton
  },
  created() {
    
  },
}
</script>