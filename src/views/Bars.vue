<template>
  <div class="bars" id="bars">
    <Header></Header>
    <BarCard></BarCard>
    <router-link to="/">
      <BackButton></BackButton>
    </router-link>
    <!-- <div>
        <input type="range" min="0" max="100" @input="addEvent" />
    </div> -->
  </div>
</template>
<script>

import Header from '@/components/Header.vue'
import BarCard from '@/components/BarCard.vue'
import BackButton from '@/components/BackButton.vue' 

export default {
  name: 'bars',
  components: {
    Header,
    BarCard,
    BackButton
  },
  created() {
    this.$store.dispatch('fetchBars')
  },
}
</script>