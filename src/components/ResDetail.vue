<template>
  <div class="resDetail">
    <div class="infoReserva">
        <div class="titleOfferDet">
            <h2>Mesa Interior 4 PAX.</h2>
        </div>
        <p>Mesa para 4 personas, zona interior del bar al lado de la barra y el proyector. Con servicio en mesa gracias a nuestros camareros.</p>
        <input type="date" />
        <div class="buttonRealizedRes">
            <button>REALIZAR RESERVA</button>
        </div>
    </div>
  </div>
</template>

<script>

export default {
 name: "resDetail",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {
    
  },
  created() {
    
  },
};

</script>

<style>
.infoReserva {
    width: 80%;
    height: 500px;
    margin-left: 10%;
    text-align: center;
    background-color: #F1F1F1;
    border-radius: 25px;
}
.titleOfferDet h2 {
    color: orange;
    font-family: roboto;
    padding-top: 35px;
    font-size: 35px;
    text-decoration: underline;
}
.infoReserva p {
    width: 26%;
    margin-left: 60vh;
}
.buttonRealizedRes button {
    border: 0px;
    width: 180px;
    height: 45px;
    border-radius: 10px;
    background-color: #00D260;
    color: white;
    font-weight: 600;
}
.buttonRealizedRes {
    text-align: center;
    margin-top: 2%;
}
</style>