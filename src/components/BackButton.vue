<template>
  <div class="backButton" >
    <div>
      <div>
        <img class="flecha_roja" :src="flecha_roja" alt="%" />
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
import flecha_roja from "@/assets/flecha_roja.svg";
export default {
  name: 'backButton',
  props: {
    msg: String
  },
  data() {
    return { flecha_roja: flecha_roja};
  },
  methods : {
    submit(){   
      }
    },
    
}
</script>
<style>

</style>