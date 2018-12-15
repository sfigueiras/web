<template>
  <img src="static/img/icons/ubykuo.svg" alt="ubykuo icon">
</template>

<script>
  export default {
    name: 'logo',
    props: {
      solid: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        red: this.props.reduced
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/variables.scss';

  img {
    z-index: 10;
    height: 100%;
    width: 100%;
    display: block;
    max-width: 40%;
    margin-bottom: 2.5%;
  }
</style>
