<template>
  <div class="resDetail">
    <div class="infoReserva">
        <div class="titleOfferDet">
            <img class="svgInfo" :src="info" alt="%" />
            <h2>
                MESA INTERIOR | AFORO:
                {{ table.capacity }}
            </h2>
        </div>
        <p>NUMERO DE MESA: {{ table.num }}</p>
        <select v-model="selectedDate">
          <option v-for="item in table.scheduleTableReservations" :key="item.idScheduleTableReservation" :value="item.idScheduleTableReservation">
            {{item.schedule.checkInHour+" - "+item.schedule.checkOutHour}}
          </option>
        </select>
        <div v-if="done" class="adviseRes">La reserva se ha realizado correctamente</div>
        <div class="buttonRealizedRes" v-else>
            <button @click="addReservation">REALIZAR RESERVA</button>
        </div>
        
    </div>
  </div>
</template>

<script>
import info from "@/assets/info.svg";
export default {
 name: "resDetail",
  props: {
    msg: String,
  },
  data() {
    return {
      table: {},
      selectedDate: {},
      done: false,
      info: info
    };
  },
  methods: {
    addReservation(){
      console.log(this.selectedDate)
      this.$store.dispatch("newReservation",this.selectedDate).then((e)=>{
        console.log(e)
        if(e != isNaN){
          this.done = true
        }
      })
    }
  },
  created() {
    this.table = this.$store.state.barTables.find(e => e.idTable == this.$route.params.idMesa)
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
    cursor: pointer;
}
.buttonRealizedRes {
    text-align: center;
    margin-top: 2%;
}
.adviseRes {
    margin: 20px;
    color: green;
    font-weight: 600;
}
</style>