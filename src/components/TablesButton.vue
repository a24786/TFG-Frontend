<template>
  <div class="tablesButton" >
    <div class="tablesComponent">
      <div class="jarBeer">
        <img class="iconTables" :src="cerveza_naranja" alt="%" />
      </div>
      <p>MESAS</p>
    </div>
  </div>
</template>
<style>

</style>
<script>
import cerveza_naranja from "@/assets/cerveza_naranja.svg";
export default {
  name: 'tablesButton',
  props: {
    msg: String
  },
  data() {
    return { cerveza_naranja: cerveza_naranja};
  },
  methods : {
    submit(){   
      }
    },
    
}
</script>
<style>
.tablesComponent{
  text-align: -webkit-center;
  width: 230px;
  height: 60px;
  display: flex;
  border: 1px solid #fea701;
  border-radius: 40px;
  cursor: pointer;
  background-color: white;
  position: fixed;
  bottom: 5%;
  right: 30%;
}

.tablesComponent:hover{
  border: 2px solid #fea701;

}

.jarBeer{
  border: 1px solid #fea701;
  border-radius: 66%;
  width: 62px;
  height: 60px;
  margin-left: -1px;
  margin-top: -1px;
}

.iconTables {
    width: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.tablesComponent p{
  font-family: 'Roboto';
  color: #fea701;
  font-size: 25px;
  margin-left: 23px;
  margin-top: 14px;
  margin-bottom: 0px;
  font-weight: 500;
}
</style>