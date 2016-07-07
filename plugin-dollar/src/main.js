import Vue from 'vue'
import App from './App.vue'

import dollar from '../dollar'
Vue.use(dollar)

new Vue({
  el: 'body',
  components: { App }
})
