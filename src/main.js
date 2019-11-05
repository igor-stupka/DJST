import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueEsc from 'vue-esc';
import Tabs from 'vue-tabs-component';
import App from './js/App.vue';

Vue.use(Tabs);
Vue.use(VueEsc);
Vue.use(VeeValidate, {
  classes: true
});

new Vue({
  el: '#app',
  render: (h) => h(App)
});
