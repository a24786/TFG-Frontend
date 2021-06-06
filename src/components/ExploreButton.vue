<template>
  <div class="exploreButton" >
    <div class="exploreComponent">
      <div class="searchStars">
        <img class="iconExplore" :src="explorar_naranja" alt="%" />
      </div>
      <p>EXPLORAR</p>
    </div>
  </div>
</template>
<style>

</style>
<script>
import explorar_naranja from "@/assets/explorar_naranja.svg";
export default {
  name: 'exploreButton',
  props: {
    msg: String
  },
  data() {
    return { explorar_naranja: explorar_naranja};
  },
  methods : {
    submit(){   
      }
    },
    
}
</script>
<style>
.exploreComponent{
  text-align: -webkit-center;
  width: 230px;
  height: 60px;
  display: flex;
  border: 1px solid #fea701;
  border-radius: 40px;
  cursor: pointer;
  position: fixed;
  background-color: white;
  bottom: 5%;
  left: 30%;
}

.exploreComponent:hover{
  border: 2px solid #fea701;
}

.searchStars{
  border: 1px solid #fea701;
  border-radius: 66%;
  width: 62px;
  height: 60px;
  margin-left: -1px;
  margin-top: -1px;
}

.iconExplore {
    width: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.exploreComponent p{
  font-family: 'Roboto';
  color: #fea701;
  font-size: 25px;
  margin-left: 23px;
  margin-top: 14px;
  margin-bottom: 0px;
  font-weight: 500;
}
</style>