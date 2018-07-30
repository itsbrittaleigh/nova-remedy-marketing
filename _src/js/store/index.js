/* eslint-disable no-shadow */
/* eslint-disable global-require */

import Vue from 'vue';
import Vuex from 'vuex';

import HealthAssessment from './modules/HealthAssessment';
import NavigationModule from './modules/NavigationModule';

Vue.use(Vuex);

const state = {};
const getters = {};
const actions = {};
const mutations = {};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    HealthAssessment,
    NavigationModule,
  },
});
