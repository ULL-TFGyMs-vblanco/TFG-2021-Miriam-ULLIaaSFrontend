import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    virtualMachine: null
  },
  mutations: {
    setVirtualMachine (state, data) {
      state.virtualMachine = data
    }
  },
  actions: {
    setVirtualMachineAction (context, data) {
      context.commit('setVirtualMachine', data)
    }
  },
  getters: {
    virtualMachine (state) {
      return state.virtualMachine
    }
  }
})
