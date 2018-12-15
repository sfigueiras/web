<template>
  <div id="app">
    <landing></landing>
  </div>
</template>

<script>
  import Landing from '@/components/Landing'

  export default {
    name: 'app',
    components: {
      Landing
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
    font-family: Gilroy-Regultar;
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

  #app {
    height: 100%;
  }
</style>
