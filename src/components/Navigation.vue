<template>
  <div class="navigation">
    <div id="navigation" :class="{
        'not-visible': hideNav,
        visible: !hideNav
      }">
      <div class="left">
        <img src="~@/assets/images/logo.svg" class="logo" alt="ubykuo logo on white">
        <div class="visible-md visible-lg">
          <scrollactive class="desktop-navigation" :offset="80">
            <a v-for="item in menu" :key="item.href" :href="item.href" class="scrollactive-item">{{ item.content }}</a>
          </scrollactive>
        </div>
      </div>

      <div class="right">
        <icon class="visible-xs visible-sm pointer" icon="bars" size="2x" style="color: #fff" @click="toggleMenu" />
        <h1 class="visible-md visible-lg">ubykuo</h1>
      </div>
    </div>

    <div class="overlay" :class="{ visible: showMobileNav }">
      <div class="options">
        <img src="~@/assets/images/solo-icon-colored.svg" class="logo" alt="ubykuo logo on white">
        <icon class="pointer" icon="times" size="2x" style="color: #fff" @click="toggleMenu" />
      </div>

      <scrollactive class="menu">
        <ul>
          <li v-for="item in menu" :key="item.href">
            <a :href="item.href" @click="toggleMenu" class="scrollactive-item">{{ item.content }}</a>
          </li>
        </ul>
      </scrollactive>

      <hr>

      <div class="social">
        <p class="question">Can't find what you need?</p>
        <div class="icons">
          <a href="https://facebook.com/ubykuo">
            <icon :icon="{ prefix: 'fab', iconName: 'facebook' }" size="2x" class="icon" />
          </a>
          <a href="https://twitter.com/ubykuo">
            <icon :icon="{ prefix: 'fab', iconName: 'twitter' }" size="2x" class="icon" />
          </a>
          <a href="https://instagram.com/ubykuo">
            <icon :icon="{ prefix: 'fab', iconName: 'instagram' }" size="2x" class="icon" />
          </a>
          <a href="https://github.com/ubykuo">
            <icon :icon="{ prefix: 'fab', iconName: 'github' }" size="2x" class="icon" />
          </a>
          <a href="https://medium.com/@ubykuo">
            <icon :icon="{ prefix: 'fab', iconName: 'medium' }" size="2x" class="icon" />
          </a>
          <a href="https://linkedin.com/company/ubykuo/">
            <icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" size="2x" class="icon" />
          </a>
        </div>
        <a class="email" href="mailto:hello@ubykuo.com">hello@ubykuo.com</a>
      </div>
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
        SCROLL_DELTA: 5,
        showMobileNav: false,
        menu: [
          {
            href: '#services',
            content: 'services'
          },
          {
            href: '#projects',
            content: 'projects'
          },
          {
            href: '#how-we-work',
            content: 'how we work'
          },
          {
            href: '#contact',
            content: 'contact'
          }
        ]
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

  .scrollactive-item.is-active {
    opacity: 1 !important;
  }

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

    .logo {
      width: 49px;
      height: 35px;
      fill: $purple-uby;
      background: linear-gradient(45deg, #FFFFFF, $pale-yellow-uby, $sea-green-uby, $pale-mauve-uby, $pale-orange-uby);
      background-size: 1000% 1000%;
      -webkit-animation: ubykuo-logo 8s ease infinite;
      -moz-animation: ubykuo-logo 8s ease infinite;
      animation: ubykuo-logo 8s ease infinite;

      @-webkit-keyframes ubykuo-logo {
        0% {
          background-position: 92% 0%
        }

        50% {
          background-position: 9% 100%
        }

        100% {
          background-position: 92% 0%
        }
      }

      @-moz-keyframes ubykuo-logo {
        0% {
          background-position: 92% 0%
        }

        50% {
          background-position: 9% 100%
        }

        100% {
          background-position: 92% 0%
        }
      }

      @keyframes ubykuo-logo {
        0% {
          background-position: 92% 0%
        }

        50% {
          background-position: 9% 100%
        }

        100% {
          background-position: 92% 0%
        }
      }
    }

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

  .overlay {
    height: 100%;
    width: 100%;
    background-color: $purple-uby;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    padding: 22px 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition-property: visibility opacity;
    transition-duration: .3s;
    visibility: hidden;
    opacity: 0;

    &.visible {
      visibility: visible !important;
      opacity: 1 !important;
    }

    .options {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      min-height: 20px;
    }

    .menu {
      ul {
        list-style: none;
        padding: 0;

        li {
          margin: 34px 0;

          a {
            font-size: 5vh;
            color: $pale-mauve-uby;
            text-decoration: none;
            text-transform: capitalize;
            color: #fff;

            &.is-active {
              color: $pale-mauve-uby;
            }
          }
        }
      }
    }

    hr {
      width: 100%;
      opacity: 0.5;
      border: 0.5px solid $pale-mauve-uby;
    }

    .social {
      .question {
        font-weight: bold;
        color: #fff;
        font-size: 20px;
      }

      .icons {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .icon {
          color: #fff;
          opacity: 0.3;
        }
      }

      .email {
        color: #fff;
        opacity: 0.5;
        text-decoration: none;
        margin: 20px 0;
        font-size: 20px;
        display: block;
      }
    }
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
