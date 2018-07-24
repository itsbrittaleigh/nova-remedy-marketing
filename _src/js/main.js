import Vue from 'vue';
import store from './store';

Vue.component('navigation-menu', require('./components/Menu.vue').default);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  data() {
    return {};
  },
});
