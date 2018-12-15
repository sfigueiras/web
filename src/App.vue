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

  * {
    font-family: Gilroy-Bold, 'sans-serif';
  }

  html {
    height: 100%;
  }
  body {
    position: relative;
    min-height: 100%;
    margin: 0;
  }

</style>
