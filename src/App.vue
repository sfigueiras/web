<template>
  <div id="app">
    <landing></landing>
    <join></join>
    <foot></foot>
  </div>
</template>

<script>
  import Landing from './components/Landing'
  import Join from './components/Join'
  import Foot from './components/Foot'

  export default {
    name: 'app',
    components: {
      Landing,
      Join,
      Foot
    }
  }
</script>

<style lang="scss">
  @import '/assets/scss/_fonts';
  @import '/assets/scss/_variables';

  * {
    font-family: Gilroy, Arial, 'sans-serif';
    color: $type-uby;
  }

  h1, h2, h3, h4, h5 {
    font-family: Gilroy-Bold, 'sans-serif';
  }

  html, body {
    height: 100%;
    margin: 0;
  }

  section {
    min-height: 100%;
    width: 100%;
  }

  #app {
    height: 100%;
  }
</style>
