import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Cookies from '../views/Cookies.vue'
import Offers from '../views/Offers.vue'
import Profile from '../views/Profile.vue'
import Reservations from '../views/Reservations.vue'
import Bars from '../views/Bars.vue'
import BarOffers from '../components/BarOffers.vue'
import BarReservas from '../components/BarReservas.vue'
// import store from '../store/index.js'
// import store from '../store/index.js'
import FloatButtons from '../views/FloatButtons.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
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
  // {
  //   path: '/',
  //   name: 'DropDown',
  //   component: DropDown
  // },
  {
    path: '/offers',
    name: 'Offers',
    component: Offers
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/reservations',
    name: 'ReservationsList',
    component: Reservations
  },
  {
    path: '/bars',
    name: 'Bars',
    component: Bars
  },
  {
    path: '/bar/:id/offers',
    name: 'barOffers',
    component: BarOffers
  },
  {
    path: '/bar/:id/reservas',
    name: 'barReservas',
    component: BarReservas
  },
  {
    path: '/floatButtons',
    name: 'floatButtons',
    component: FloatButtons
  },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})




export default router