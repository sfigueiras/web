<template>
  <section id="landing">
    <h1>The right blend of experience hard work, and fun.</h1>
    <button @click="onClick">tell us your story</button>
  </section>
</template>

<script>
  export default {
    name: 'Landing'
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/_variables';

  section {
    background-color: $purple-uby;
    color: white;
  }
</style>
