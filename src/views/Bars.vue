<template>
  <div class="bars" id="bars">
        <Header></Header>
        <BarCard></BarCard>
    <!-- <div>
        <input type="range" min="0" max="100" @input="addEvent" />
    </div> -->
  </div>
</template>
<script>

import Header from '@/components/Header.vue'
import BarCard from '@/components/BarCard.vue' 

export default {
  name: 'bars',
  components: {
    Header,
    BarCard
  },
  created() {
    this.$store.dispatch('fetchBars')
  },
}
</script>