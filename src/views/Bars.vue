<template>
  <div class="bars" id="bars">
    <div>
        <BarCard></BarCard>
    </div>
    <!-- <div>
        <input type="range" min="0" max="100" @input="addEvent" />
    </div> -->
  </div>
</template>
<script>
// @ is an alias to /src
import BarCard from '@/components/BarCard.vue' 

export default {
  name: 'bars',
  components: {
    BarCard
  },
  created() {
    this.$store.dispatch('fetchBars')
  },
}
</script>