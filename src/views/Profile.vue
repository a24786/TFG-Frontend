<template>
  <div>
    <Header></Header>
    <div class="profile">
      <div class="profileReservas">
        <ProfileReservas></ProfileReservas>
      </div>
      <div class="user-info-wrapper">
        <div>
        <h1 class="titleUser">Usuario</h1>
        </div>
        <ProfileForm></ProfileForm>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import ProfileReservas from "../components/ProfileReservas.vue";
import Header from "../components/Header.vue";
import ProfileForm from "../components/ProfileForm.vue";

export default {
  name: "Profile",
  components: {
    Header,
    ProfileReservas,
    ProfileForm,
  },
};
</script>
<style>
.titleUser{
  text-align: left;
  padding-left: 33.75px;
  color: black;
}
.usuarioTitle{
  float: left;
}
.user-info-wrapper{
  width: 80%;
}
.profileReservas{
  padding-right: 5%;
  width: 20%;
}
.profile {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 45px;
}
</style>