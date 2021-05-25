<template>
  <div class="cookies">
    <CookiesPrivacy></CookiesPrivacy>
    <Footer></Footer>
  </div>
</template>
<script>
// @ is an alias to /src
import CookiesPrivacy from '@/components/CookiesPrivacy.vue' 
import Footer from '@/components/Footer.vue'

export default {
  name: 'cookiesPrivacy',
  components: {
     CookiesPrivacy,
     Footer
  }
}
</script>