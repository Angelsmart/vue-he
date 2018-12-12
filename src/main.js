import Vue from 'vue';
import App from './App';
import router from './router';
import bus from './eventBus';
import http from './https';
Vue.prototype.$http = http;
Vue.prototype.$bus = bus;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  http,
  bus,
  render:h=>h(App)
})
