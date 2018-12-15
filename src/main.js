// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import SmoothScroll from 'vue-smoothscroll'
import VueResource from 'vue-resource'
import translations from './translations'
import toast from './mixins/Toast'
import Meta from 'vue-meta'
import VueValidate from 'vuelidate'
import VueAnalytics from 'vue-analytics'
import 'lazysizes'

Vue.use(VueI18n)
Vue.use(SmoothScroll)
Vue.use(VueResource)
Vue.use(Meta)
Vue.use(VueValidate)
Vue.use(VueAnalytics, {
  id: 'UA-97422807-1',
  router
})

Vue.mixin(toast)

let locale = getLocale()

const i18n = new VueI18n({
  locale: locale,
  messages: translations
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: {App},
  created () {
    document.getElementsByTagName('html')[0].lang = locale
  }
})

function getLocale () {
  let locale = navigator.language || navigator.browserLanguage || navigator.systemLanguage
  let normalizedLocale = locale.match(/(es|en)/)[0]
  if (normalizedLocale !== undefined) {
    return normalizedLocale
  }
  return 'en'
}
