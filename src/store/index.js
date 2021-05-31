import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const BASE_URL = "http://gotheretfg.azurewebsites.net/"
    // const BASE_URL = "http://localhost:8080/"


export default new Vuex.Store({
    state: {
        userReservations:[],
        user: {

        }
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
        getReservations(state){
            fetch(BASE_URL + 'api/reservations/' + state.userToken)
                .then(response => response.json())
                .then(data => {
                    state.commit('userReservations', data)
                });
        }
    },
    mutations: {
        userReservations(context, data){
            this.state.userReservations = data
        }
        // fetchRegisterUsers(state, data){
        //     state.users = data
        //   },
    },
    modules: {},

})