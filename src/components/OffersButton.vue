<template>
  <div class="offersButtonFloat" >
    <div class="offersComponent">
      <div class="tagOffers">
        <img class="iconOffers" :src="oferta_naranja" alt="%" />
      </div>
      <p>OFERTAS</p>
    </div>
  </div>
</template>
<style>

</style>
<script>
import oferta_naranja from "@/assets/oferta_naranja.svg";
export default {
  name: 'offersButtonFloat',
  props: {
    msg: String
  },
  data() {
    return { oferta_naranja: oferta_naranja};
  },
  methods : {
    submit(){   
      }
    },
    
}
</script>
<style>
.offersComponent{
  text-align: -webkit-center;
  width: 230px;
  height: 60px;
  display: flex;
  border: 1px solid #fea701;
  border-radius: 40px;
  cursor: pointer;
}

.offersComponent:hover{
  background-color: #fdda9927;
  border: 2px solid #fea701;

}

.tagOffers{
  border: 1px solid #fea701;
  border-radius: 66%;
  width: 62px;
  height: 60px;
  margin-left: -1px;
  margin-top: -1px;
}

.iconOffers {
    width: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.offersComponent p{
  font-family: 'Roboto';
  color: #fea701;
  font-size: 25px;
  margin-left: 23px;
  margin-top: 14px;
  margin-bottom: 0px;
  font-weight: 500;
}
</style>