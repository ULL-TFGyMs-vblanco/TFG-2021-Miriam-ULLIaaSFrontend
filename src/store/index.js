import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    virtualMachines: null,
    virtualMachine: null,
    formType: null
  },
  mutations: {
    setVirtualMachines (state, data) {
      state.virtualMachines = data
    },
    setVirtualMachine (state, data) {
      state.virtualMachine = data
    },
    setFormType (state, data) {
      state.formType = data
    }
  },
  actions: {
    setVirtualMachinesAction (context, data) {
      context.commit('setVirtualMachines', data)
    },
    setVirtualMachineAction (context, data) {
      context.commit('setVirtualMachine', data)
    },
    setFormTypeAction (context, value) {
      context.commit('setFormType', value)
    }
  },
  getters: {
    virtualMachines (state) {
      return state.virtualMachines
    },
    virtualMachine (state) {
      return state.virtualMachine
    },
    formType (state) {
      return state.formType
    }
  }
})
