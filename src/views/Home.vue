<template>
    <div class="main-content">  
        <Home></Home>
        <router-link to="/bars"><ExploreButton></ExploreButton></router-link>
        <router-link to="/bars"><OffersButton></OffersButton></router-link>
  </div>
   
</template>

<script>

import Home from '@/components/Home'
import ExploreButton from '@/components/ExploreButton.vue'
import OffersButton from '@/components/OffersButton.vue'

export default {
    components: {
        Home,
        ExploreButton,
        OffersButton
    } 
}
</script>

<style>
    .main-content{
        height: 100vh;
        overflow: hidden;
    }
</style>