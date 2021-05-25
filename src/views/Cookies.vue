<template>
  <div class="cookies">
    <Header></Header>
    <CookiesPrivacy></CookiesPrivacy>
    <Footer></Footer>
  </div>
</template>
<script>
// @ is an alias to /src
import CookiesPrivacy from '@/components/CookiesPrivacy.vue' 
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
export default {
  name: 'cookiesPrivacy',
  components: {
     CookiesPrivacy,
     Footer,
     Header
  }
}
</script>