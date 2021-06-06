<template>
  <div class="bars" id="bars">
    <Header></Header>
    <ResDetail></ResDetail>
    <router-link :to="{name: 'BarBookings', params: { id:  urlBar}}">
      <BackButton></BackButton>
    </router-link>
  </div>
</template>
<script>

import Header from '@/components/Header.vue'
import ResDetail from '@/components/ResDetail.vue' 
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'bars',
  components: {
    Header,
    ResDetail,
    BackButton
  },
  created() {
    this.$store.dispatch()
  },
  beforeMount() {
    this.urlBar = this.$route.params.id
  }
}
</script>