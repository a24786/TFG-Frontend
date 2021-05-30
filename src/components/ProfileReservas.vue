<template>
<div class="buttonsMenu">
  <button class="buttonProfile">Perfil     > </button>
  <button class="buttonReserva">Reservas     ></button>
</div>
</template>

<script>
export default {
  name: 'ProfileReservas',
  props: {
    msg: String
  },
  data() {
    return{
    }
  },
  methods : {
    submit(){   
      }
    },
    
}
</script>
<style> 
.buttonsMenu{
  display: flex;
  flex-wrap: wrap;
  width: 115px;

}
.buttonsMenu .buttonProfile {
  border-radius: 5px;
  font-size: inherit;
  font-style: normal;
  font-weight: 600;
  background: rgb(254 167 1);
  cursor: pointer;
  height: 40px;
  width: 115px;
  border: solid rgb(254 167 1) 2px;
  font-family: Roboto;
  width: 100%;
  margin: 0 0 20px 0;
  padding: 0px;
}
.buttonsMenu .buttonReserva {
  margin-bottom: 20px;
  border-radius: 5px;
  font-size: inherit;
  font-style: normal;
  font-weight: 600;
  background: white;
  cursor: pointer;
  height: 40px;
  width: 115px;
  border: solid black 2px;
    width: 100%;
  font-family: Roboto;
  margin: 0 0 20px 0;
  padding: 0px;
}
button.buttonReserva:hover {
    background-color: black;
    color: rgb(254 167 1);
}
button.buttonProfile:hover {
    background-color: black;
    color: rgb(254 167 1);
    border: solid black 2px;
}
</style>