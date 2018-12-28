<template>
  <div id="app">
    <navigation></navigation>
    <landing class="full-height"></landing>
    <clients></clients>
    <main-services></main-services>
    <projects class="full-height"></projects>
    <how-we-work></how-we-work>
    <team></team>
    <join></join>
    <contact></contact>
    <foot></foot>
  </div>
</template>

<script>
  import Navigation from './components/Navigation'
  import Landing from './components/Landing'
  import Clients from './components/Clients'
  import Join from './components/Join'
  import Foot from './components/Foot'
  import Contact from './components/Contact'
  import HowWeWork from './components/HowWeWork'
  import Team from './components/Team'
  import MainServices from './components/MainServices'
  import Projects from './components/Projects'

  export default {
    name: 'app',
    components: {
      MainServices,
      HowWeWork,
      Projects,
      Team,
      Navigation,
      Landing,
      Clients,
      Join,
      Contact,
      Foot
    }
  }
</script>

<style lang="scss">
  @import '/assets/scss/_fonts';
  @import '/assets/scss/_variables';

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: Gilroy, 'sans-serif';
    font-weight: normal;
    margin: 0;
  }

  h2 {
    font-size: 36px;
    color: #FFF;
    padding: 0 0 20px 0;
  }

  h3 {
    font-size: 32px;
    font-weight: bold;
    padding: 0 0 20px 0;
  }

  h4 {
    text-transform: uppercase;
    font-size: 12px;
    color: #c6c6d0;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 0 0 5px 0;
  }

  h5 {
    font-size: 20px;
    font-weight: 500;
  }

  h6 {
    font-size: 20px;
    font-weight: 500;
  }

  body {
    height: 100%;
  }

  html,
  body {
    overflow-x: hidden;
    margin: 0;
    font-family: Gilroy, Arial, 'sans-serif';
    color: $type-uby;
  }

  p {
    margin-top: 0;
  }

  p.lead {
    font-size: 20px;
    margin: 10px 0;
  }

  section.full-height {
    min-height: 100%;
  }

  #app {
    height: 100%;

    >section {
      overflow: hidden;
    }
  }

  .button {
    border: none;
    border-radius: $border-radius;
    display: inline-block;
    padding: 6px 15px;
    text-decoration: none;
    position: relative;
    font-size: 18px;

    &.arrow {
      padding-right: 80px;

      &::before {
        position: absolute;
        content: "";
        width: 24px;
        height: 24px;
        right: 0;
        transform: translateX(-12px);
        background: url('~@/assets/images/arrow-right-dark.svg') center center no-repeat;
      }
    }

    &.primary {
      background-color: $purple-uby;
      color: #FFF;
    }

    &.secondary {
      background-color: #fff;
      color: $purple-uby;
      padding: 10px 40px;
    }

    &.transparent {
      border: 1px solid #707170;
      background: transparent;
      color: #FFF;

      &.arrow {
        padding-right: 80px;

        &::before {
          position: absolute;
          content: "";
          width: 24px;
          height: 24px;
          right: 0;
          transform: translateX(-12px);
          background: url('~@/assets/images/arrow-right.svg') center center no-repeat;
        }
      }
    }
  }

  .pointer {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    h3 {
      font-size: 42px;
    }
  }

</style>
