<template>
  <div>
    <Header></Header>
    <div class="profile">
      <div class="profileReservas">
        <ProfileReservas></ProfileReservas>
      </div>
      <div>
        <div >
        
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
padding-left: 33.75px
}
.usuarioTitle{
  float: left;
}
.profileReservas{
  padding-right: 100px;
}
.profile {
  display: flex;
  margin: 45px 0 0 150px;
}
</style>