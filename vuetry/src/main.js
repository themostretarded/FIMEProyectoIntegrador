import Vue from 'vue'
import App from './App'
import pinchecomponenteculero from './pinchecomponenteculero'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#pinchecomponenteculero',
  router,
  render: h => h(pinchecomponenteculero)
})
