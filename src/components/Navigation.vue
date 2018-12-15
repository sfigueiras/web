<template>
  <nav>
    <div class="overlay" :class="{
      hidden: !navVisible,
      visible: navVisible }">
      <ul>
        <li class="logo">
          <img src="static/img/icons/ubykuo.svg" alt="ubykuo icon">
        </li>

        <li>
          <a class="close-link" v-on:click="toggleNav()">
            <svg class="close" viewbox="0 0 40 40" transform-origin="center">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
            </svg>
          </a>
        </li>
      </ul>

      <div class="links">
        <ul>
          <li @click="onSelect('what-we-do')">
            <a>{{$t('what')}}</a>
          </li>

          <li style="list-style: none; display: inline">
            <hr align="right" class="link-divider">
          </li>

          <li @click="onSelect('how-we-do')">
            <a>{{$t('how')}}</a>
          </li>

          <li style="list-style: none; display: inline">
            <hr align="right" class="link-divider">
          </li>

          <li @click="onSelect('primary-offers')">
            <a>{{$t('services')}}</a>
          </li>

          <li style="list-style: none; display: inline">
            <hr align="right" class="link-divider">
          </li>

          <li @click="onSelect('contact-forms')">
            <a>{{$t('contact')}}</a>
          </li>
        </ul>
      </div>

      <div class="social">
        <div class="container">
          <p>{{$t('navGetSocial')}}</p>

          <hr align="left">

          <hr align="center">
          <social-icons></social-icons>
        </div>
      </div>
    </div>
    <header class="navigation" :style="{position: position}" :class="{solid: solid}">
      <ul class="nav purple" id="nav">
        <li>
        </li>

        <li class="controls">
          <phone-contact-widget :solid="solid"></phone-contact-widget>

          <language-selector :solid="solid"></language-selector>

          <div class="social">
            <a v-on:click="toggleNav()">
              <hamburger :solid="solid"></hamburger>
            </a>
          </div>
        </li>
      </ul>
    </header>
  </nav>
</template>
<script>
  import Logo from './Logo.vue'
  import SocialIcons from './SocialIcons.vue'
  import Hamburger from './Hamburger.vue'
  import LanguageSelector from './LanguageSelector.vue'
  import PhoneContactWidget from './PhoneContactWidget'

  export default {
    name: 'navigation',
    components: {
      Logo,
      SocialIcons,
      Hamburger,
      LanguageSelector,
      PhoneContactWidget
    },
    props: {
      position: {
        type: String,
        required: false
      },
      solid: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        navVisible: false,
        baseStyle: {
          'position': this['position']
        }
      }
    },
    methods: {
      toggleNav () {
        this.navVisible = !this.navVisible
      },
      onSelect (elementId, toggleNav = true) {
        this.$SmoothScroll(document.getElementById(elementId), 50)
        if (toggleNav) {
          this.toggleNav()
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '~@/variables.scss';
  img {
    width: 120px;
    margin: 20px;
  }

  .navigation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    z-index: 3;
    transition: background-color .3s;

    &.solid {
      background-color: $primary;
    }
  }

  nav {
    position: relative;
  }

  .nav {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 15px;

    li:first-child {
      flex: 0.7;
    }
  }

  .controls {
    height: 50px;
    width: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 5;

    :not(:last-child) {
      margin-right: 10px;
    }
  }

  .social {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-top: 18px;

    a {
      cursor: pointer;
    }

    .item {
      margin-bottom: 5px;
    }

  }

  .ubykuo-icon {
    fill: white;
    transform-origin: 50% 50%;
    transition: transform .8s ease-in-out;

    &.green {
      fill: $secondary;
    }

  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba($primary, 0.95);
    border: $overlay-border solid $secondary;
    box-sizing: border-box;
    transition: all .3s ease-in-out;
    display: flex;
    justify-content: center;
    font-size: 1.6em;
    flex-direction: column;

    ul {
      margin: 0;
      padding: 0;
      flex: 0.3;
    }

    &.hidden {
      opacity: 0;
      visibility: hidden;
    }

    &.visible {
      .links,
      .social {
        display: flex !important;
      }

      opacity: 1;
      visibility: visible;
      flex-direction: column;

      .social {
        order: 1;
      }
    }
  }

  .overlay .social {
    justify-content: center;
    display: flex;
    align-items: flex-end;
    text-align: center;

    @media (max-width: 461px) {
      & {
        align-items: center;
        width: 100%;
        justify-content: flex-end;
      }
    }

    @media (min-width: 462px) {
      & {
        text-align: left;
        order: 1;
        height: calc(100vh - 30px);
      }
    }

    .container {
      p {
        color: white;
        font-size: initial;
      }

      hr {
        margin-bottom: 20px
      }

      hr[align=left] {
        display: none;
      }

      hr[align=center] {
        display: block;
      }

      @media (min-width: 461px) {
        hr[align=left] {
          display: block;
        }

        hr[align=center] {
          display: none;
        }
      }
    }
  }

  .links {
    order: 1;
    display: flex;
    flex: 1;
    font-weight: 700;
    text-align: right;
    justify-content: flex-end;
    padding-right: 40px;
    align-items: center;

    @media (min-width: 461px) {
      order: 2;
    }

    ul {

      li {
        margin: 10px 0 10px 0;

        a {
          color: white;
        }
      }
    }
  }

  .close-link {
    cursor: pointer;

    .close {
      width: 40px;
      position: absolute;
      right: 15px;
      top: 15px;

      path {
        transition: transform .2s linear .2s;
        stroke: $grey-icon;
        fill: transparent;
        stroke-linecap: round;
        stroke-width: 5;
      }

    }
  }

  .link-divider {
    border-width: 2px;
  }

  @keyframes slideInRightBounce {
    0% {
      transform: translateX(100px);
    }

    90% {
      transform: translate(-10px);
    }

    100% {
      transform: translate(0);
    }
  }

  @media (max-height: 320px) {
    .overlay {
      .links {
        order: 2;
        flex: 0.4;
        padding-right: 70px;

        ul li a {
          font-size: 3vw;
        }
      }

      .social {
        order: 1 !important;
        flex: 0.5;
      }

      &.visible {
        flex-direction: row !important;
      }

    }
  }

  @media (min-width: 641px) {
    .close {
      width: 30px;
    }

    .links {
      padding-right: 100px;
      align-items: center;
      flex: 1;

      ul li a {
        font-size: inherit;
      }
    }

    .social {
      order: 1;
      justify-content: normal;
      text-align: left;
      align-items: flex-end;

      .container {
        p {
          font-size: 0.5em;
        }

        .social-icon {
          width: 30px;
          margin-right: 10px;
        }

        hr[align=left] {
          display: block;
        }

        hr[align=center] {
          display: none;
        }

      }
    }

    .overlay {
      font-size: 2.5em;
      flex-direction: row !important;
    }

    .social-icon {
      display: block;
    }
  }

</style>
