import Vue from 'vue';
import store from './store';

Vue.component('accordion-section', require('./components/AccordionSection.vue').default);
Vue.component('contact-form', require('./components/ContactForm.vue').default);
Vue.component('navigation-menu', require('./components/Menu.vue').default);
Vue.component('health-assessment', require('./components/HealthAssessment.vue').default);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  data() {
    return {};
  },
});
