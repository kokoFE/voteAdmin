import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRoute from 'vue-router'
import Vuex from 'vuex'
import store from './store/store'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import routes from './route.config.js'
import 'normalize-css'

Vue.use(ElementUI)
Vue.use(VueRoute)
Vue.use(Vuex)
// console.log(routes)
const router = new VueRoute({
  routes
})

new Vue({
  el: '#app',
  router, 
  store,
  render: h => h(App)
})
