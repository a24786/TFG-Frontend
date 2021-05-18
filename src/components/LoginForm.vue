<template>
  <div class="loginForm">
    <div class="block1">
      <img src="../assets/logo_large.png">
    </div>
    <div class="block2">
      <div class="buttons">
        <button></button>
        <button></button>
      </div>
      <div class="form">
        <h2>Log in in</h2>
        <form>
          <input>
          <input>
          <button>Log in</button>
        </form>
      </div>
      <div class="privacy_register">
        <p>No tiene aún una cuenta?<a>Registrate</a></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loginForm',
  props: {
    msg: String
  }
}
</script>