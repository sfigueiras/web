import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueCarousel from 'vue-carousel'
import VueAnalytics from 'vue-analytics'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faFacebook, faTwitter, faInstagram, faGithub, faMedium, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faBars, faCheck} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import 'bootstrap-sass-grid'
import vuescroll from 'vue-scroll'

Vue.use(vuescroll)
Vue.use(VueResource)
Vue.use(VueCarousel)

Vue.use(VueAnalytics, {
  id: 'UA-97422807-1',
  checkDuplicatedScript: true
})

library.add(faFacebook, faTwitter, faInstagram, faGithub, faMedium, faLinkedin, faBars, faCheck)

Vue.component('icon', FontAwesomeIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
