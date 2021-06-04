<template>
  <div class="floatButtons">
    
    <OffersButton></OffersButton>
    <TablesButton></TablesButton>
  </div>
</template>
<script>
// @ is an alias to /src

import OffersButton from '@/components/OffersButton.vue'
import TablesButton from '@/components/TablesButton.vue' 

export default {
  name: 'floatButtons',
  components: {
OffersButton,
TablesButton
  }
}
</script>