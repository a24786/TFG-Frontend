import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'

Vue.use(Vuex)

const BASE_URL = "http://gotheretfg.azurewebsites.net/"
    // const BASE_URL = "http://localhost:8080/"

export default new Vuex.Store({
    state: {
        BASE_URL: BASE_URL,
        userReservations: [],
        user: {},
        offers: [],
        bars: [],
        coordinates: {},
        longitude: 0,
        latitude: 0,
        userToken: '',
        markers: [],
    },
    actions: {
        // Fetch para detectar existe el usuario y loggearte
        loginUser(context, user) {
            context.state.user = this.user
            fetch(BASE_URL + `api/users/sign-in`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                }).then(response => response.json())
                .then(data => {
                    if (data.status != 403) {
                        let d = new Date();
                        d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
                        let expires = "expires=" + d.toUTCString();
                        let cookie = data.name + "=" + data.value + ";" + expires + ";path=/";
                        document.cookie = cookie
                        router.push("/")
                    } else {
                        console.log('Error en las credenciales de inicio de sesión')
                        return false
                    }
                })
                .catch(error => {
                    console.log('Error en el inicio de sesión')
                    console.log(error)
                })
        },
        //Fetch para crear un nuevo usuario
        registerUser(context, user) {
            context.state.user = this.user
            return fetch(BASE_URL + `api/users/sign-up`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                }).then(response => response.json())
                .then(data => {
                    let d = new Date();
                    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
                    let expires = "expires=" + d.toUTCString();
                    let cookie = data.name + "=" + data.value + ";" + expires + ";path=/";
                    document.cookie = cookie
                    return true;
                })
        },
        //Funcion para mostrar mensaje si las contraseñas no coinciden
        errorPwd() {
            var aviso = `<p class="avisoPwd">Las contraseñas no coinciden</p>`
            document.querySelector(".confPwd").insertAdjacentHTML("afterend", aviso);
        },
        //Fetch para sacar las reservas de un usuario / falta filtrar por ACTIVAS O NO
        getReservations(state) {
            // fetch(BASE_URL + 'api/reservations/' + this.$store.state.userToken)
            fetch(BASE_URL + 'api/reservations/' + this.state.userToken)
                .then(response => response.json())
                .then(data => {
                    state.commit('userReservations', data)
                });
        },
        //Fetch para mostrar ofertas
        // fetchOffers1(context, distancia) {
        //     fetch(BASE_URL + `api/offers?latitude=${this.store.latitude}&length=${this.store.longitude}&distance=${distancia}`, {})
        //         .then(response => response.json())
        //         .then(response => {
                    // context.commit('offersList', response)
        //         })
        // },
        getBarReservations(state, info) {
            // fetch(BASE_URL + 'api/reservations/' + this.$store.state.userToken)
            return fetch(BASE_URL + `api/tables/${info.id}/${info.date}` )
                .then(response => response.json())
                .then(data => {
                    return data;
                });
        },
        //Fecth para sacar la informacion de los bares
        fetchBars(context, distancia) {
            let coord = this.getters.getCoodinates
            let url = BASE_URL + `api/bars/coordinates?distance=${distancia}&latitude=${coord.lat}&length=${coord.lng}`
            fetch(url, {})
                .then(response => response.json())
                .then(dataBar => {
                    let markers = []
                    dataBar.forEach(bar => {
                        markers.push({
                            id: bar.idbar,
                            address: bar.address,
                            position: { lat: bar.latitude, lng: bar.length },
                            title: bar.name,
                            images: bar.barImages
                        })
                    })
                    context.commit('barsList', dataBar)
                    context.commit('markers', markers)
                })
        },
        //Fetch para mostrar las ofertas
        fetchOffers(context, distancia) {
            let coord = this.getters.getCoodinates
            let url = BASE_URL + `api/offers?distance=${distancia}&latitude=${coord.lat}&length=${coord.lng}`
            fetch(url, {})
                .then(response => response.json())
                .then(dataOffer => {
                    context.commit('offersList', dataOffer)
                })
        },

        fetchOffersBar(context, id) {
            let url = BASE_URL + `api/offers/bar/${id}`
            fetch(url, {})
                .then(response => response.json())
                .then(dataOffer => {
                    context.commit('offersList', dataOffer)
                })
        },
        //Funcion para localizar al usuario
        getPosition(context) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                alert("Geolocation is not supported by this browser.");
            }

            function showPosition(position) {
                let coordinates = { 'latitude': position.coords.latitude, 'longitude': position.coords.longitude }
                context.commit('coords', coordinates)
                context.dispatch('fetchBars', 10)
               
            }
        },
        getOffer(context, offer) {
            return context.dispatch('fetchUserToken').then((token) =>{
                return context.dispatch('loadUserData', token).then((user) => {
                let userOffer = {
                    'offer': offer,
                    'user': user
                }
                console.log(userOffer)
                let url = BASE_URL + `api/userOffers`
                return fetch(url, { method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userOffer)}
                ).then(response => response.text())
                    .then(data => {
                        console.log(data)
                        return data;
                    })
            })
        })
          
        },
        //Fetch cargar los datos del usuario
        loadUserData(context, token) {
            return fetch(BASE_URL + `api/users?user=${token}`)
                .then(response => response.json())
                .then(data => {
                    context.commit('userData', data)
                    return data
                })
        },
        //Fetch cargar los datos del bar
        loadBarData(context, id) {
            return fetch(BASE_URL + `api/bars/${id}`)
                .then(response => response.json())
                .then(data => {
                    context.commit('barData', data)
                    return data
                })
        },
        
        //Fetch para la cookie del usuario
        fetchUserToken(context) {
            var dc = document.cookie;
            var prefix = "Login=";
            var begin = dc.indexOf("; " + prefix);
            if (begin == -1) {
                begin = dc.indexOf(prefix);
                if (begin != 0) return null;
            } else {
                begin += 2;
            }
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
                end = dc.length;
            }
            unescape(dc.substring(begin + prefix.length, end));
            context.commit('userTokenValue', unescape(dc.substring(begin + prefix.length, end)))
            return unescape(dc.substring(begin + prefix.length, end));
        }
    },
    mutations: {
        userReservations(context, data) {
            this.state.userReservations = data
        },
        // fetchRegisterUsers(state, data){
        //     state.users = data
        //   },
        offersList(state, dataOffer) {
            state.offers = dataOffer
        },
        barsList(state, dataBar) {
            state.bars = dataBar
        },
        markers(context, markers) {
            this.state.markers = markers;
        },
        //Saco las coordeanadas
        coords(context, coordenadas) {
            this.state.latitude = coordenadas.latitude;
            this.state.longitude = coordenadas.longitude;
        },
        userTokenValue(state, userToken) {
            state.userToken = userToken
        },
        userData(state, user) {
            this.state.user = user
        },
        barData(state, bar) {
            this.state.bar = bar
        }
    },
    modules: {},
    getters: {
        getCoodinates(state) {
            return { lat: state.latitude, lng: state.longitude }
        }
    }

})