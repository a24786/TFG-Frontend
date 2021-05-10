import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueStore from '@websanova/vue-store';

Vue.use(VueStore);
Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  VueRouter,
  Vuex,
  VueStore,
  render: h => h(App),
}).$mount('#app')
