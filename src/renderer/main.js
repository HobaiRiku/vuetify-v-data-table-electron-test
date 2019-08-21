import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// vuetify and mdi icon
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);
const vuetify = new Vuetify();

/* eslint-disable no-new */
new Vue({
  components: {App},
  vuetify,
  router,
  store,
  template: '<App/>'
}).$mount('#app')
