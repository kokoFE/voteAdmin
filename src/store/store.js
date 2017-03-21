import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    getGuestData: {},
    count: 0
  },
  mutations: {
    increment (state){
      state.count++
    },
    setGuestData (state, payload){
      state.getGuestData = payload;
    }
  },
  actions: {
    increment (context){
      context.commit('increment')
    }
  }
})