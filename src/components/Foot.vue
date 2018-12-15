<template>
  <section id="footer">
    <div class="col-xs-12 col-sm-4">
      <h2>social</h2>
      <ul>
        <li><font-awesome-icon icon="facebook"/></li>
      </ul>
    </div>
    <div class="col-xs-12 col-sm-4">
      <h2>ubykuo</h2>
    </div>
    <div class="col-xs-12 col-sm-4">
      <h2>join ubykuo</h2>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Foot'
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/_variables';

  section {
    background-color: $black-uby;
    color: #FFF;
  }
</style>
