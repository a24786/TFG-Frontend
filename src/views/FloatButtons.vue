<template>
  <div class="floatButtons">
    <BackButton></BackButton>
    <ExploreButton></ExploreButton>
    <OffersButton></OffersButton>
    <TablesButton></TablesButton>
  </div>
</template>
<script>
// @ is an alias to /src
import BackButton from '@/components/BackButton.vue'
import ExploreButton from '@/components/ExploreButton.vue'
import OffersButton from '@/components/OffersButton.vue'
import TablesButton from '@/components/TablesButton.vue' 

export default {
  name: 'floatButtons',
  components: {
     BackButton,
ExploreButton,
OffersButton,
TablesButton
  }
}
</script>