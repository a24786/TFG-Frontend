import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Cookies from '../views/Cookies.vue'
import DropDown from '@/components/DropDown.vue' 
import Offers from '../views/Offers.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/cookies',
    name: 'Cookies',
    component: Cookies
  },
  {
    path: '/',
    name: 'DropDown',
    component: DropDown
  },
  {
    path: '/offers',
    name: 'Offers',
    component: Offers
  }
]

const router = new VueRouter({
  routes
})

export default router
