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
      <img id="img-footer" src="../assets/logo_white_large1.png">
  </div>
</template>

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
.cookiesPrivacy h1 {
    margin-top: 5%;
}

.footerGeneral{
  background-color: black;
  width: 100%;
  height: 100%;
  color: white;
  
}
.footerGeneral hr{
  width: 90%;
}

#img-footer{
  width: 10%;
  margin: 80px 0px 80px 0px;
}

.footerGeneral li {
    list-style: none;
    text-align: center;
    line-height: 25px;
}

.footerGeneral li:hover {
    cursor: pointer;
    color: #FEA701;
}

.block_info{
  display: flex;
  margin-left: 28.5%;
  margin-top: 5%;
}

.block_info h4 {
    text-decoration: underline;
}

.social_media {
    margin-top: 2%;
    margin-bottom: 2%;
}

.explore {
    margin-right: 10%;
    margin-left: 10%;
    margin-top: 2%;
    margin-bottom: 2%;
}

.legal {
    margin-top: 2%;
    margin-bottom: 2%;
}

.social_media ul {
    padding-left: 0px;
}

.explore ul {
    padding-left: 0px;
}

.legal ul {
    padding-left: 0px;
}
</style>