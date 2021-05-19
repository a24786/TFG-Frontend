<template>
  <div class="loginForm">
    <div class="block1">
      <img src="../assets/logo_large.png">
      <h1>GET STARTED</h1>
    </div>
    <div class="block2">
      <div class="buttons">
        <button class="button1">Log in</button>
        <button class="button2">Register</button>
      </div>
      <div class="form">
        <h2>Log in</h2>
        <form class="login_form">
          <input type="mail" name="email" placeholder="E-Mail Address">
          <input type="password" name="password" placeholder="Password">
          <button class="button3">Log in</button>
        </form>
      </div>
      <div class="privacy_register">
        <p>Don´t have an account yet? <a>Register</a></p>
      </div>
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
</style>
<script>
export default {
  name: 'loginForm',
  props: {
    msg: String
  }
}
</script>
<style> 
.loginForm {
  display: flex;
  width: 100%;
  height: 100vh;
}

body {
  width: 100%;
  height: 100vh;
  margin: 0px;
}

.block1 {
  width: 50%;
  height: 100%;
  background-color: #FEA701;
  text-align: center;
  color: black;
}

.block2 {
  width: 50%;
  font-family: Roboto;
}

.block1 img {
  width: 85%;
  padding-top: 15%;
}

.block1 h1{
  font-family: Roboto;
}

.buttons {
  text-align: right;
  padding-right: 9%;
  padding-top: 5%;
}

button.button1 {
  border-radius: 5px;
  font-size: inherit;
  font-style: normal;
  font-weight: 600;
  background: rgb(254 167 1);
  cursor: pointer;
  height: 40px;
  width: 100px;
  border-width: 1px;
  font-family: Roboto;
}

button.button2 {
  border-radius: 5px;
  font-size: inherit;
  font-style: normal;
  font-weight: 600;
  background: white;
  cursor: pointer;
  height: 40px;
  width: 100px;
  border-width: 1px;
  margin-left: 10px;
  font-family: Roboto;
}

.form h2 {
  font-size: xx-large;
  text-align: left;
}

.form {
  padding-left: 9%;
  padding-top: 5%;
}

.login_form {
  display: grid;
  width: 90%;
  margin-top: 70px;
}

input {
  margin-top: 20px;
  border-radius: 10px;
  font-size: inherit;
  font-style: normal;
  font-weight: 500;
  cursor: auto;
  height: 45px;
  background-color: white;
  border-color: black;
  padding-left: 20px;
  font-family: Roboto;
}

button.button3 {
  margin-top: 50px;
  border-radius: 10px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  height: 60px;
  border-color: black;
  padding-left: 20px;
  background-color: black;
  font-size: x-large;
  color: white;
  font-family: Roboto;
}

.privacy_register {
  text-align: center;
}

p {
  color: grey;
}

a {
  color: deepskyblue;
}

a:hover {
  cursor: pointer;
  text-decoration: underline;
} 

input:focus {
  outline: none;
}

</style>