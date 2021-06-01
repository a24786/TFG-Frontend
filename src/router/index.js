import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Cookies from '../views/Cookies.vue'
import Offers from '../views/Offers.vue'
import Profile from '../views/Profile.vue'
import Home from '../views/Home.vue'
import Bars from '../views/Bars.vue'
import BarOffers from '../components/BarOffers.vue'
import BarReservas from '../components/BarReservas.vue'
import store from '../store/index.js'


Vue.use(VueRouter)

const routes = [
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
        name: 'Home',
        component: Home
        
    },
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
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    // store.dispatch('tryAutoLogin')
    console.log(store.state) // this is test only not for prod
    let logged = store.dispatch('fetchUserToken')
        //si está registr y va a alguna de esas rutas,
    if (logged != '' && (to.path == '/login' ||
            to.path == '/register' ||
            to.path == '/profile' ||
            to.path == '/'
            // || to.path.includes('/dropdown/')
        )) {
        // redirigir aqui
        return next('/profile')
            // Si no está loggeado pero va a registro o inicio 
    } else if (to.path == '/login' ||
        to.path == '/register' ||
        to.path == '/cookies') {
        return next()
            //le dejo ir

    }
    // else if (store.state.token != '') {
    //     return next()
    // }
    else {
        return next('/login')
    }
})


export default router