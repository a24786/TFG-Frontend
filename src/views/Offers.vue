<template>
  <div class="offers">
    <OfferCard></OfferCard>
  </div>
</template>
<script>
// @ is an alias to /src
import OfferCard from '@/components/OfferCard.vue' 

export default {
  name: 'offers',
  components: {
    OfferCard
  }
}
</script>