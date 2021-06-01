import Vue from 'vue'
import Vuex from 'vuex'

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
            return fetch(BASE_URL + `api/users/sign-in`, {
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
                        context.commit('userToken', data.value)
                        return true
                    } else {
                        console.log('Error en las credenciales de inicio de sesión')
                    }
                }).catch(error => {
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
                    context.commit('userToken', cookie)
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
        loadUserData(context) {
            fetch(BASE_URL + `api/user?user=${this.store.userToken}`, {})
                .then(response => response.json())
                .then(response => {
                    context.commit('userData', response)
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
        userToken(state, userToken) {
            console.log(userToken)
            console.log('asdfasdfasd->' + userToken)
            this.state.userToken = userToken
        },
        userData(state, user) {
            state.user = user
        }
    },
    modules: {},
    getters: {
        getCoodinates(state){
           return {lat:  state.latitude , lng: state.longitude}
        }
     }

})