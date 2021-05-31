<template>
  <div class="header">
      <div class="img-logo-wrapper">
    <img id="logo" :src="logo" />
      </div>
    <div class="search">
      <img id="glass" :src="glass" alt="%" width="25em" />
      <input
        type="text"
        name="search"
        class="searcher"
        formmethod="get"
        placeholder="Buscar establecimiento..."
      />
    </div>
    <div class="user">
<<<<<<< HEAD
      <img id="glass" class="headerUser" :src="man" alt="%" width="25em" />
       
  </div>
=======
      <img src="img/man.77d9312a.svg" alt="%" class="headerImage">
    </div>
>>>>>>> origin/develop
  </div>
</template>

<script>
import glass from "@/assets/magnifying-glass.svg";
import logo from "@/assets/logo_small.png";
import man from "@/assets/man.svg";

export default {
  data: function() {
    return {
      glass: glass,
      logo: logo,
      man:man
    };
  },
};
</script>

<style>
.headerUser{
  width: 20%;
}
.img-logo-wrapper{
    width: 25%;
}

.header {
  width: 100%;
  height: 15%;
  background-color: #fea701;
  top: 0%;
  left: 0%;
  right: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
}

.search {
  margin: auto;
  padding: 1%;
  width: 50%;
  z-index: 1;
  border-radius: 2.5%;
  box-sizing: border-box;
}

.searcher {
      padding: 1.5%;
    padding-left: 2.5em;
    border: transparent 4px solid;
    border-radius: 10px;
    font-size: 1.3em;
    font-family: 'Roboto', sans-serif;
    z-index: 2;
    padding-right: 30px;
    width: 60%;
}

.reserves{
  display: flex;
}

.user{
  height:100%;
  width: 25%;
}
.user-image{
    display: block;
    margin: auto;
}

#glass {
  margin-right: -2.6em;
  margin-bottom: -0.2em;
  z-index: 3;
  position: relative;
  transform: scaleX(-1);
}

#logo {
<<<<<<< HEAD
  width: 6.5em;
  display: flex;
  margin-left: 2em;
=======
    width: 8em;
    margin-left: 2em;
    margin-top: 1em;
    margin-bottom: 1em;
}

.headerImage {
    margin-right: 25px;
    width: 100px;
>>>>>>> origin/develop
}
</style>
