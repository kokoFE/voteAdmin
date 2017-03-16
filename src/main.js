import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRoute from 'vue-router'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import routes from './route.config.js'
import 'normalize-css'

Vue.use(ElementUI)
Vue.use(VueRoute)
// console.log(routes)
const router = new VueRoute({
  routes
})

new Vue({
  el: '#app',
  router, 
  render: h => h(App)
})
