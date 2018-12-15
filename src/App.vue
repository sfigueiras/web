<template>
  <div id="app">
    <mobile-contact-phone></mobile-contact-phone>
    <navigation
      :position="fixed"
      :solid="solid">
    </navigation>
    <main>
      <toast></toast>
      <router-view></router-view>
    </main>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue'
  import Footer from './components/Footer.vue'
  import Toast from './components/Toast.vue'
  import LanguageUtils from './mixins/LanguageUtils'
  import MobileContactPhone from './components/MobileContactPhone'

  export default {
    name: 'app',
    components: {
      Toast,
      'v-footer': Footer,
      Navigation,
      MobileContactPhone
    },
    data () {
      return {
        solid: false,
        fixed: 'absolute'
      }
    },
    mixins: [LanguageUtils],
    methods: {
      handleScroll () {
        this.solid = this.solidNavigation()
        this.fixed = this.navigationPosition()
      },
      solidNavigation () {
        let landingHeight = document.getElementById('landing').offsetHeight
        return (window.scrollY > landingHeight) && this.scrollingUp()
      },
      navigationPosition () {
        return this.solid ? 'fixed' : 'absolute'
      },
      scrollingUp () {
        let st = window.pageYOffset || document.documentElement.scrollTop
        let isScrollingUp = st <= this.lastScrollTop
        this.lastScrollTop = st
        return isScrollingUp
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
      document.documentElement.lang = this.$i18n.locale
      this.solid = this.solidNavigation()
      this.position = this.navigationPosition()
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>
<style lang="scss">
  @import '~@/variables.scss';
  @import url('https://fonts.googleapis.com/css?family=Raleway:500,800|Roboto+Slab');

  main {
    position: relative;
  }

  html {
    height: 100%;
  }

  body {
    background-color: $primary;
    overflow: hidden;
  }

  body, #app {
    min-height: 100%;
    max-width: 100vw;
    position: relative;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    max-width: 100%;
    overflow-x: hidden;
  }

  * {
    font-family: $primary-font;
  }

  a {
    cursor: pointer;
  }

  span, p {
    font-family: $secondary-font !important;
  }

  a {
    text-decoration: none;
    color: $secondary-text;
  }

  h1 {
    font-size: 1.8em;
    font-weight: 800;
    font-family: $primary-font;
  }

  hr {
    border: 3px solid #3c9;
    width: 40px;
    &.left {
      margin: 0;
    }
  }

  ul {
    list-style: none;
  }

  .arrow {
    width: 20px;
    &.down {
      transform: rotate(180deg);
    }
  }

  .section-title {
    font-size: $title-font-size;
    text-align: center;
    color: $secondary;

    @media (max-width: 461px) {
      font-size: 2em;
    }
  }

  .next {
    text-align: center;
    cursor: pointer;
    user-select: none;

    span {
      font-weight: bold;
      padding-bottom: 5px;
      display: block;
      color: $secondary;
    }
  }
</style>
