<template>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8">
          <p>
            Got an idea?<br>
            <span class="text-lead">let us a contact, we call you</span>
          </p>
        </div>
        <div class="col-xs-12 col-sm-4">
          form
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Contact'
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/_variables';

  section {
    background-color: $purple-uby;
    color: white;
  }
</style>
