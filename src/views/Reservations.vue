<template>
  <div>
    
    <Header></Header>
    <div>
    <img class="barBanner" :src="herobar" alt="%"/>
    
    </div>
    <div class="profile">
      <div class="profileReservas">
        <ProfileReservas></ProfileReservas>
        
      </div>
      <div class="reservationsTitleAndMenu">
        <div class="titleAndDropdown">
          <h1 class="userReservationsTitle">Usuario - Tus reservas</h1>
          <input class="dropDownMenu">
        </div>
        <ReservationsList></ReservationsList>
      </div>
    </div>
  </div>
</template>

<script>
import ReservationsList from "@/components/ReservationsList.vue";
import Header from "@/components/Header.vue";
import ProfileReservas from "@/components/ProfileReservas.vue";
import herobar from "@/assets/hero-bar.jpg";
export default {
  name: "reservations",

  components: {
    ReservationsList,
    Header,
    ProfileReservas,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      herobar: herobar,
    };
  },
  methods: {
    submit() {},
  },
};
</script>

<style>
.reservationsTitleAndMenu{
    width: 65%;
}
.titleAndDropdown{
        display: -webkit-inline-box;
}
.dropDownMenu{
    margin-top: 10px;
    margin-left: 50px;
}
.barBanner{
    width: 100%;
    height: 100px;
}
.userReservationsTitle{
    margin-top: 0%;
}
</style>