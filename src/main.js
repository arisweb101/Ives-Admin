// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import V2Table from 'v2-table';

Vue.use(V2Table)
window.$ = require('jquery');
window.jQuery = window.$;


require('../node_modules/fontawesome/js/fontawesome.min.js');
require('assets/js/adminlte.js');
require('assets/js/custom.js');    
require('assets/js/table.js');
require('assets/js/main.js');
require('../node_modules/bootstrap/dist/js/bootstrap.min.js');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
