import Vue from 'vue';
import store from './store';

Vue.use(VueCarousel);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  data() {
    return {};
  },
});

document.addEventListener('DOMContentLoaded', () => {
  ScrollAnimationModule();
  StickToTopModule();
  document.addEventListener('scroll', () => {
    StickToTopModule();
  });
});
