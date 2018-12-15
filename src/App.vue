<template>
  <div id="app">
    <landing class="full-height"></landing>
    <join></join>
    <contact></contact>
    <foot></foot>
  </div>
</template>

<script>
  import Landing from './components/Landing'
  import Join from './components/Join'
  import Foot from './components/Foot'
  import Contact from './components/Contact'

  export default {
    name: 'app',
    components: {
      Contact,
      Landing,
      Join,
      Foot
    }
  }
</script>

<style lang="scss">
  @import '/assets/scss/_fonts';
  @import '/assets/scss/_variables';

  h1, h2, h3, h4, h5 {
    font-family: Gilroy, 'sans-serif';
    font-weight: bold;
  }

  html, body {
    height: 100%;
    margin: 0;
    font-family: Gilroy, Arial, 'sans-serif';
    color: $type-uby;
  }

  section.full-height {
    min-height: 100%;
  }

  #app {
    height: 100%;
  }
</style>
