<template>
  <div class="backButton" >
    <div class="backComponent">
      <div class="backArrow">
        <img class="iconArrow" :src="flecha_roja" alt="%" />
      </div>
      <p>VOLVER</p>
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
.backComponent{
  text-align: -webkit-center;
  width: 230px;
  height: 60px;
  display: flex;
  border: 1px solid #ff0000;
  border-radius: 40px;
  cursor: pointer;
  background-color: white;
  position: fixed;
  bottom: 5%;
  left: 30%;
}

.backComponent:hover{
  /* background-color: rgba(255, 158, 158, 0.267); */
  border: 2px solid #ff0000;
}

.backArrow{
  border: 1px solid #ff0000;
  border-radius: 66%;
  width: 62px;
  height: 60px;
  margin-left: -1px;
  margin-top: -1px;
}

.iconArrow {
    width: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.backComponent p{
  font-family: 'Roboto';
  color: #ff0000;
  font-size: 25px;
  margin-left: 23px;
  margin-top: 14px;
  margin-bottom: 0px;
  font-weight: 500;
}
</style>