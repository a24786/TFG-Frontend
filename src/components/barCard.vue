<template>
  <div class="barCard" >
      <div class="tarjeta" v-for="item in $store.state.offers" :key="item.idOffer">
        <img src="../assets/cafe_croissant.jpg">
        <div class="infoOffer">
            <div class="difuminado">
              <h3>{{item.bar.name}}</h3>
              <div class="back_difuminado trans"></div>
            </div>
            <p class="title_offer">{{item.offerTitle}}</p>
            <p class="price">{{item.offerPrice}}€</p>
      </div> 
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pattaya&family=Roboto:wght@300;400;500&display=swap');
</style>
<script>
export default {
  name: 'barCard',
  props: {
    msg: String
  },    
}
</script>
<style> 

</style>