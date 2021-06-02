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
                    let d = new Date();
                    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
                    let expires = "expires=" + d.toUTCString();
                    document.cookie =
                        data.name + "=" + data.value + ";" + expires + ";path=/";
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
                    document.cookie =
                        data.name + "=" + data.value + ";" + expires + ";path=/";
                    return true;
                })
        },
        errorPwd(){
            var aviso = `<p class="avisoPwd">Las contraseñas no coinciden</p>`
            document.querySelector(".confPwd").insertAdjacentHTML("afterend", aviso);
        },
        //Fetch para mostrar ofertas
        fetchOffers(context, distancia) {
            fetch(BASE_URL + `api/offers?latitude=${this.store.latitude}&length=${this.store.longitude}&distance=${distancia}`, { 
            })
            .then(response => response.json())
            .then(response => {
            context.commit('offersList', response)
            })
        },
        getPosition(context){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else { 
                alert("Geolocation is not supported by this browser.");
            }

            function showPosition(position) {
                let coordinates = {'latitude': position.coords.latitude, 'longitude': position.coords.longitude}
                context.commit('coords', coordinates)
                context.dispatch('fetchBars', 10)
            }
        },
        addEvent ({ type, target }) {
            const event = {
                type,
                target: {
                    value: target.value
                }
            }
            this.events.push(event)
        },
        eventText (e) {
            return `${e.type}: ${e.target.value}`
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
                        address: bar.address,
                        position: {lat: bar.latitude,
                            lng: bar.length},
                        title: bar.name,
                        images: bar.barImages
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
        coords(context, coordenadas){
            this.state.latitude = coordenadas.latitude;
            this.state.longitude = coordenadas.longitude;
        }
    },
    modules: {},
    getters: {
        getCoodinates(state){
           return {lat:  state.latitude , lng: state.longitude}
        }
     }

})