import Vue from 'vue'
import Vuex from 'vuex'
const NOTES = require('../../notes.json')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    setDefaultNotes(state, payload) {
      state.notes = payload
    }
  },
  getters: {
    setDefaultNotes: state => {
      return state.notes
    }
  },
  actions: {
    setDefaultNotes(context) {
      return new Promise(resolve => {
        context.commit('setDefaultNotes', NOTES.notes)
        resolve(NOTES.notes)
      })
    },
    setNotes(context, payload) {
      return new Promise(resolve => {
        context.commit('setDefaultNotes', payload)
        resolve(payload)
      })
    }
  }
})
