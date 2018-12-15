<template>
  <div id="home">
    <landing id="landing" scroll-to="what-we-do"></landing>

    <div v-show="showBackToTop" class="back-to-top" @click="backToTop()">
      <img class="back-to-top" src="static/img/icons/arrow-green.png"
           alt="back to top icon">
    </div>

    <div id="parallax" class="parallax"></div>

    <what-we-do id="what-we-do" scroll-to="how-we-do"></what-we-do>

    <how-we-do id="how-we-do" scroll-to="primary-offers"></how-we-do>

    <primary-offers id="primary-offers"
                    scroll-to="secondary-offers"></primary-offers>

    <div id="wave" class="parallax"></div>

    <secondary-offers id="secondary-offers"></secondary-offers>

    <email-option scroll-to="contact-forms"></email-option>

    <team></team>

    <forms id="contact-forms">
      <contact-form id="contact-form"></contact-form>
      <join-form></join-form>
    </forms>
  </div>
</template>

<script>
  import Landing from './Landing'
  import WhatWeDo from './WhatWeDo'
  import HowWeDo from './HowWeDo'
  import ContactForm from './ContactForm'
  import JoinForm from './JoinForm'
  import Forms from './Forms'
  import GreenTitle from './GreenTitle'
  import SecondaryOffers from './SecondaryOffers'
  import PrimaryOffers from './PrimaryOffers'
  import Parallax from '../utils/Parallax'
  import Responsive from '../mixins/Responsive.js'
  import config from '../config'
  import EmailOption from './EmailOption'
  import Team from './Team'
  import SurpriseBanner from '../deprecated/SurpriseBanner'

  export default {
    name: 'Home',
    data () {
      return {
        showBackToTop: false
      }
    },
    components: {
      PrimaryOffers,
      SecondaryOffers,
      GreenTitle,
      JoinForm,
      ContactForm,
      Landing,
      Forms,
      Responsive,
      EmailOption,
      WhatWeDo,
      HowWeDo,
      Team
    },
    mixins: [Responsive],
    created () {
      if (!this.mobile) {
        this.parallax = new Parallax([{
          offset: -0.2,
          selector: '#parallax'
        }, {
          offset: -0.03,
          selector: '#wave'
        }])
        window.addEventListener('scroll',
          this.parallax.onScroll.bind(this.parallax),
          config.supports.passive ? {passive: true} : false)
      }
      const landingEl = document.getElementById('landing')
      if (landingEl) {
        const landingHeight = landingEl.clientHeight
        window.addEventListener('scroll', () => {
          let currentPosition = document.documentElement.scrollTop ||
            document.body.scrollTop
          this.showBackToTop = currentPosition > landingHeight
        }, config.supports.passive ? {passive: true} : false).bind(this)
      }
    },
    destroyed () {
      if (!this.mobile) {
        window.removeEventListener('scroll',
          this.parallax.onScroll.bind(this.parallax))
      }
    },
    methods: {
      backToTop () {
        this.$SmoothScroll(document.getElementById('landing'))
      }
    }
  }
</script>

<style lang="scss">

  #home {
    position: relative;
  }

  .back-to-top {
    position: fixed;
    right: 3vw;
    z-index: 20;
    cursor: pointer;
    bottom: 10px;
    animation: floatingCaret 1.5s infinite;

    @keyframes floatingCaret {
      50% {
        transform: translateY(2.5px)
      }
    }

    img {
      display: block;
      width: 30px;
    }
  }

  .parallax {
    background-size: contain !important;
    background-repeat: no-repeat;
    position: absolute;
    width: 100%;
    z-index: -4;
  }

  #parallax {
    height: 100%;
    background: url('/static/img/parallax/Parallax1.png') repeat-y;
  }

  #wave {
    background-image: url('/static/img/backgrounds/background-decoration-purple-light.png');
    height: 314px;
  }
</style>
