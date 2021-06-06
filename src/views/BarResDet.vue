<template>
  <div class="bars" id="bars">
        <Header></Header>
        <ResDetail></ResDetail>
  </div>
</template>
<script>

import Header from '@/components/Header.vue'
import ResDetail from '@/components/ResDetail.vue' 

export default {
  name: 'bars',
  components: {
    Header,
    ResDetail
  },
  created() {
    this.$store.dispatch()
  },
}
</script>