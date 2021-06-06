<template>
  <div>
    
    <Header></Header>
    <div class="heroBanner">
    <img class="barBanner" :src="herobar" alt="%"/>
    

    </div>
    <div class="profile">
      <div class="profileReservas">
        <ProfileReservas></ProfileReservas>
        
      </div>
      <div class="reservationsTitleAndMenu">
        <div class="titleAndDropdown">
            <img class="profileImg" :src="man" alt="%"/>
          <h1 class="userReservationsTitle">Tus reservas</h1>
          <select class="dropDownMenu">
            <option>Activas</option>
            <option>Todas</option>
          </select>
        </div>
        <ReservationsList></ReservationsList>
      </div>
    </div>
  </div>
</template>

<script>
// import ReservationsByBar from "@/components/ReservationsByBar.vue";
import ReservationsList from "@/components/ReservationsList.vue";
import Header from "@/components/Header.vue";
import ProfileReservas from "@/components/ProfileReservas.vue";
import herobar from "@/assets/hero-bar.jpg";
import man from "@/assets/man.svg";
export default {
  name: "reservations",

  components: {
    ReservationsList,
    Header,
    ProfileReservas,
    // ReservationsByBar
  },
  props: {
    msg: String,
  },
  data() {
    return {
      herobar: herobar,
      man:man
    };
  },
  methods: {
    submit() {},
  },
};
</script>

<style>
.heroBanner{
    height: 150px;
    overflow: hidden;
    position: relative;
}
.profileImg{
    margin-top: -120px;
    margin-left: -176px;
    width: 190px;
}
.reservationsTitleAndMenu{
    width: 65%;
}
.titleAndDropdown{
    margin-left: 0px;
        display: -webkit-inline-box;
            margin-bottom: 24px;
}
.dropDownMenu{
    margin-top: 3px;
    margin-left: 50px;
    height: 30px;
  border: solid 2px;
  border-radius: 10px;
}
.barBanner{
    position: absolute;
        z-index: -1;
    top: -429px;
    width: 100%;
    left: 0;
}
.userReservationsTitle{
    margin-left:30px;
    margin-top: 0%;
}
</style>