<template>
  <scrollactive class="navigation" :offset="80">
    <div id="navigation" :class="{
        'not-visible': hideNav,
        visible: !hideNav
      }">
      <div class="left">
        <img src="~@/assets/images/solo-icon-colored.svg" alt="ubykuo logo on white">
        <div class="visible-md visible-lg">
          <div class="desktop-navigation">
            <a href="#services" class="scrollactive-item">services</a>
            <a href="#how-we-work" class="scrollactive-item">how we work</a>
            <a href="#projects" class="scrollactive-item">projects</a>
            <a href="#team" class="scrollactive-item">our team</a>
            <a href="#contact" class="scrollactive-item">contact us</a>
          </div>
        </div>
      </div>

      <div class="right">
        <icon class="visible-xs visible-sm"
          icon="bars" size="2x"
          style="color: #fff"
          @click="toggleMenu" />
        <h1 class="visible-md visible-lg">ubykuo</h1>
      </div>
    </div>

    <div class="overlay" :class="{ hidden: !showMobileNav }">

    </div>
  </scrollactive>
</template>

<script>
  export default {
    name: 'Navigation',
    data () {
      return {
        hideNav: false,
        lastScroll: 0,
        SCROLL_DELTA: 5,
        showMobileNav: false
      }
    },
    methods: {
      handleScroll () {
        if (window.matchMedia('(max-width: 1023px)').matches) {
          if (window.scrollY > this.lastScroll) {
            this.hideNav = true
          } else if ((window.scrollY - this.lastScroll) < -this.SCROLL_DELTA) {
            this.hideNav = false
          }
        }

        this.lastScroll = window.scrollY
      },
      toggleMenu () {
        this.showMobileNav = !this.showMobileNav
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/_variables.scss";

  #navigation {
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $purple-uby;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px;
    z-index: 10;
    transition: top .2s;

    .left {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    &.not-visible {
      top: -100px;
    }

    &.visible {
      top: 0;
    }
  }

  h1 {
    font-family: Gilroy;
    font-weight: lighter;
    color: white;
  }

  .scrollactive-item.is-active {
    opacity: 1 !important;
  }

  .overlay {
    height: 100%;
    width: 100%;
    background-color: $purple-uby;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
  }

  @media (min-width: 691px) {
    .desktop-navigation {
      display: flex;
      justify-content: space-evenly;

      a {
        text-decoration: none;
        color: #fff;
        opacity: 0.5;
        display: block;
        padding: 15px;
        font-weight: bold;
      }
    }
  }
</style>
