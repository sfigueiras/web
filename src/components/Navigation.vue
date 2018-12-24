<template>
  <div id="navigation" :class="{ 'not-visible': hideNav, visible: !hideNav }">
    <div class="left">
      <img src="~@/assets/images/solo-icon-colored.svg" alt="ubykuo logo on white">
      <div class="visible-md visible-lg">
        <div class="desktop-navigation">
          <a href="">services</a>
          <a href="">how we work</a>
          <a href="">projects</a>
          <a href="">our team</a>
          <a href="">contact us</a>
        </div>
      </div>
    </div>

    <div class="right">
      <icon class="visible-xs visible-sm" icon="bars" size="2x" style="color: #fff" />
      <h1 class="visible-md visible-lg">ubykuo</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data () {
      return {
        hideNav: false,
        lastScroll: 0,
        SCROLL_DELTA: 5
      }
    },
    methods: {
      handleScroll () {
        if (window.scrollY > this.lastScroll) {
          this.hideNav = true
        } else if ((window.scrollY - this.lastScroll) < -this.SCROLL_DELTA) {
          this.hideNav = false
        }

        this.lastScroll = window.scrollY
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
    z-index: 2;
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
