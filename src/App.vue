<template>
  <div id="app">
    <landing></landing>
    <join></join>
  </div>
</template>

<script>
  import Landing from '@/components/Landing'
  import Join from './components/Join'

  export default {
    name: 'app',
    components: {
      Landing,
      Join
    }
  }
</script>

<style lang="scss">
  @import '~@/assets/scss/_variables';

  @font-face {
    font-family: Gilroy-Bold;
    src: url('~/assets/fonts/Gilroy-Bold.woff');
  }

  @font-face {
    font-family: Gilroy-Regular;
    src: url('~/assets/fonts/Gilroy-Regular.woff');
  }

  * {
    font-family: Gilroy-Regular, 'sans-serif';
  }

  h1, h2, h3, h4, h5 {
    font-family: Gilroy-Bold, 'sans-serif';
  }

  html, body {
    height: 100%;
    margin: 0px;
  }

  section {
    min-height: 100%;
    width: 100%;
  }

  #app {
    height: 100%;
  }
</style>
