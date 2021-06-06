import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import Profile from '../views/Profile.vue'
import Reservations from '../views/Reservations.vue'

import Bars from '../views/Bars.vue'
import Offers from '../views/Offers.vue'
import BarOffers from '../views/BarOffers.vue'
import BarBookings from '../views/BarBookings.vue'
import BarResDet from '../views/BarResDet.vue'

// import BarOffers from '../components/BarOffers.vue'
// import BarReservas from '../components/BarReservas.vue'

import Cookies from '../views/Cookies.vue'

// import store from '../store/index.js'
// import FloatButtons from '../views/FloatButtons.vue'

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
    path: '/offers',
    name: 'Offers',
    component: Offers
  },
  {
    path: '/bar/:id/reservas',
    name: 'BarBookings',
    component: BarBookings
  },
  {
    path: '/bar/:id/reservasDet',
    name: 'BarResDet',
    component: BarResDet
  },
  {
    path: '/bar/:id/offers',
    name: 'BarOffers',
    component: BarOffers
  },
  {
    path: '/cookies',
    name: 'Cookies',
    component: Cookies
  },
  // {
  //   path: '/barOffers',
  //   name: 'BarOffers',
  //   component: BarOffers1
  // },
  // {
  //   path: '/barBookings',
  //   name: 'BarBookings',
  //   component: BarBookings
  // }

  // {
  //   path: '/floatButtons',
  //   name: 'floatButtons',
  //   component: FloatButtons
  // },
  // {
  //   path: '/',
  //   name: 'DropDown',
  //   component: DropDown
  // },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router