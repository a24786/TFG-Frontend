import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(
  VueGoogleMaps,{
    load:{
      key: 'AIzaSyD7yHU3hoFHGh8liZIAHJTBUn_Ld7IYTaE',
      libraries: 'places',
      maps_id: '83e47317a8c42fc4',
    }
    
  }
)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


