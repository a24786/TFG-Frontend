<template>
  <div class="footerGeneral">
    <div class="block_info">
      <div class="social_media">
        <h4>REDES SOCIALES</h4>
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div class="explore">
        <h4>EXPLORA</h4>
        <ul>
          <li>Ayuda</li>
          <li>Sobre nosotros</li>
          <li>Contacta con nosotros</li>
        </ul>
      </div>
      <div class="legal">
        <h4>LEGAL</h4>
        <ul>
          <li>Cookies</li>
          <li>Terminos / Privacidad</li>
        </ul>
      </div>
      </div>
      <hr>
      <img src="../assets/logo_white_large1.png">
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pattaya&family=Roboto:wght@300;400;500&display=swap');
</style>
<script>
export default {
  name: 'footerGeneral',
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

.footerGeneral{
  background-color: black;
  width: 100%;
  height: 100%;
  color: white;
  
}
.footerGeneral hr{
  width: 90%;
}

img{
  width: 10%;
  margin: 80px 0px 80px 0px;
}

.footerGeneral li {
    list-style: none;
    text-align: center;
}

.block_info{
  display: flex;
  margin-left: 40%;
}
</style>