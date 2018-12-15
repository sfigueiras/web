<template>
  <div id="landing" class="landing" :class="{ mobile }">
    <video-bg class="video" v-if="!mobile" id="video"
              :sources="['/static/videos/landing.webm', '/static/videos/landing.mp4']"
              img="/static/img/backgrounds/landing461x800.webp">
    </video-bg>

    <div class="claim">
      <logo :solid="solid"></logo>
      <h2 class="slogan">{{$t('claim')}}</h2>
    </div>

    <div id="swipe-down" class="swipe-down next" v-on:click="autoScroll">
      <span> {{$t('swipe')}}</span>
      <img class="arrow down" src="/static/img/icons/arrow-green.png"
           alt="swipe down arrow">
    </div>
  </div>
</template>

<script>
  import Responsive from '../mixins/Responsive.js'
  import ScrollTo from '../mixins/ScrollTo'
  import VideoBg from 'vue-videobg'
  import Logo from './Logo'

  export default {
    name: 'Landing',
    mixins: [Responsive, ScrollTo],
    components: {VideoBg, Logo}
  }
</script>

<style lang="scss" scoped>
  @import '~@/variables.scss';

  .background {
    color: white;
  }

  .landing {
    color: white;
    font-family: $primary-font !important;
    align-items: center;
    transition: all ease-in 0.2s;
    transition-delay: .4s;
    text-align: left;
    justify-content: flex-start;
    position: relative;
    display: flex;
    overflow: hidden;
    background-color: $primary;
    z-index: 2;

    &.mobile {
      background: url("/static/img/backgrounds/landing-mobile.jpg") no-repeat 70% 20%;
      background-size: cover;
    }
  }

  .video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    overflow: hidden;
    z-index: -9;
  }

  .claim {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    animation: slideInFromTop .6s ease-out 0s 1 forwards;
    width: 70vw;
    margin: auto;
  }

  .title {
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: $primary-font !important;
    max-width: 50vw;
  }

  .slogan {
    color: white;
    text-align: center;
    margin-top: 20px;
    font-family: $primary-font !important;
    font-weight: 500;
  }

  .swipe-down {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    font-weight: bold;
    text-align: center;
    color: $secondary;
    cursor: pointer;
    user-select: none;

    p {
      margin-bottom: 5px;
    }
  }

  @keyframes slideInFromTop {
    0% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }

  @media (min-width: 425px) {
    .landing {
      justify-content: center;
      height: calc(100vh - 30px);
    }
  }

  @media (min-width: 460px) and (max-width: 1023px) {
    .title {
      font-size: 3.5em;
    }
  }

  /*******************************************************
  MOBILE
  *******************************************************/

  @media (max-width: 425px) {
    .landing {
      border: none;
      padding: 35% 20px;
    }

    .claim {
      width: 90vw;
    }

    logo {
      display: none;
    }
  }

  /*******************************************************
  TABLET
  *******************************************************/

  @media (min-width: 641px) {
    .landing {
      min-height: 600px;
    }

    .title {
      margin: 5vh 0;
    }
  }

  /*******************************************************
  DESKTOP
  *******************************************************/

  @media (min-width: 1024px) {
    .title {
      font-size: 4em;
    }
  }
</style>
