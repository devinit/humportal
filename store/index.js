import Vue from 'vue'
import axios from 'axios'

const baseURL = 'https://humportal.org/'
const apiURL = 'https://brough.io/humportal-data/'

export const state = () => ({
  stats: {
    signatories: null,
    iati: null,
    humanitarian: null
  },
  signatoryData: [],
  signatoryProgressData: []
})

export const mutations = {
  setHomepageStats (state, data) {
    state.stats = data
  },
  setSignatoryData (state, data) {
    state.signatoryData = data
  },
  setSignatoryProgressData(state, data) {
    state.signatoryProgressData = data
  }
}

export const actions = {
  async loadHomepageStats({ commit, state }) {
    if (state.stats.signatories != null) {
      return true
    }
    const { data } = await axios
      .get(`${apiURL}/homepage.json`)
    commit("setHomepageStats", data)
  },
  async loadSignatoryData({ commit, state }) {
    if (state.signatoryData.length != 0) {
      return true
    }
    const { data } = await axios
      .get(`${apiURL}/signatories.json`)
    commit("setSignatoryData", data)
  },
  async loadSignatoryProgressData({ commit, state }) {
    if (state.signatoryProgressData.length != 0) {
      return true
    }
    const { data } = await axios
      .get(`${apiURL}/signatories-progress.json`)
    commit("setSignatoryProgressData", data)
  }
}
