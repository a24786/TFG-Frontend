import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const BASE_URL = "http://gotheretfg.azurewebsites.net/"

export default new Vuex.Store({
  state:{
    user: {

    }
  },
  actions:{
    loginUser(context, user){
        context.state.user = this.user 
        return fetch(BASE_URL+`api/users/sign-in`,{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })
        .then((response) => {
          console.log(response)
          return true
        })
        .catch((error) => {
          console.error('Error', error)
          return false
        })
    }
  },
  mutations:{
    
  },
  modules: {
  },

})
