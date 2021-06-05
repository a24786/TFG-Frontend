<template>
  <div class="bars" id="bars">
    <Header></Header>
    <BarReservas></BarReservas>
    <router-link to="/bars">
      <BackButton></BackButton>
    </router-link>
    <router-link :to="{name: 'BarOffers', params: { id:  urlBar}}">
      <OffersButton ></OffersButton>
    </router-link>
  </div>
</template>
<script>

import Header from '@/components/Header.vue'
import BarReservas from '@/components/BarReservas.vue'
import BackButton from '@/components/BackButton.vue'
import OffersButton from '@/components/OffersButton.vue'

export default {
  name: 'bars',
  components: {
    Header,
    BarReservas,
    BackButton,
    OffersButton
  },
  data(){
    return{
      urlBar: null
    }
  },
  created() {
    
  },
  beforeMount() {
    this.urlBar = this.$route.params.id
  }
}
</script>