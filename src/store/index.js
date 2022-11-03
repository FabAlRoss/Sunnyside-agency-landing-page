import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const mutations = {
  setWindowWidth(state) {
    state.windowWidth = window.innerWidth;
  },
  setMobile(state, check) {
    state.isMobile = check;
  },
};

const actions = {};

const getters = {};

const state = {
  windowWidth: window.innerWidth,
  isMobile: false,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
