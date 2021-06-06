<template>
  <HeaderBarDet></HeaderBarDet>
</template>

<script>
import HeaderBarDet from "@/components/HeaderBarDet.vue";

export default {
  name: 'barOffers',
  props: {
    msg: String
  }, 
  components: {
    HeaderBarDet,
  },   
}
</script>
<style> 

</style>