import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueCarousel from 'vue-carousel'
import 'bootstrap-sass-grid'

Vue.use(VueResource)
Vue.use(VueCarousel)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
