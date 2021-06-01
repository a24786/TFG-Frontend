import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'

Vue.use(Vuex)

const BASE_URL = "http://gotheretfg.azurewebsites.net/"
    // const BASE_URL = "http://localhost:8080/"


export default new Vuex.Store({
    state: {
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
                        router.push("profile")
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
        errorPwd() {
            var aviso = `<p class="avisoPwd">Las contraseñas no coinciden</p>`
            document.querySelector(".confPwd").insertAdjacentHTML("afterend", aviso);
        },
        //Fetch para mostrar ofertas
        fetchOffers(context, distancia) {
            fetch(BASE_URL + `api/offers?latitude=${this.store.latitude}&length=${this.store.longitude}&distance=${distancia}`, {})
                .then(response => response.json())
                .then(response => {
                    context.commit('offersList', response)
                })
        },
        getPosition(context) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                alert("Geolocation is not supported by this browser.");
            }

            function showPosition(position) {
                let coordinates = { 'latitude': position.coords.latitude, 'longitude': position.coords.longitude }
                context.commit('coords', coordinates)
            }
        },
        addEvent({ type, target }) {
            const event = {
                type,
                target: {
                    value: target.value
                }
            }
            this.events.push(event)
        },
        eventText(e) {
            return `${e.type}: ${e.target.value}`
        },
        loadUserData(context, token) {
            fetch(BASE_URL + `api/users?user=${token}`)
                .then(response => response.json())
                .then(data => {
                    context.commit('userData', data)
                    return data
                })
        },
        fetchBars(context, distancia) {
            let coord = this.getters.getCoodinates
            let url = BASE_URL + `api/bars/coordinates?distance=${distancia}&latitude=${coord.lat}&length=${coord.lng}`
            fetch(url, { 
            })
            .then(response => response.json())
            .then(dataBar => {
                let markers = []
                dataBar.forEach(bar => {
                    
                    markers.push({
                        id: bar.idbar,
                        position: {lat: bar.latitude,
                            lng: bar.length},
                        title: bar.name
                        
                    })
                })
            context.commit('barsList', dataBar)
            context.commit('markers', markers)
            })
        },
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
        // fetchRegisterUsers(state, data){
        //     state.users = data
        //   },
        offersList(data) {
            this.state.offers = data
        },
        barsList(state, dataBar) {
            state.bars = dataBar
        },
        markers(context, markers){
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
        }
    },
    modules: {},
    getters: {
        getCoodinates(state){
           return {lat:  state.latitude , lng: state.longitude}
        }
     }

})