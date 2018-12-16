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
          <form>
            <div>
              <div>
                <input placeholder="Name">
              </div>
              <span>we can call you John Doe if you leave it blank</span>
            </div>
            <div>
              <div>
                <input placeholder="email">
                <span><button type="submit"></button></span>
              </div>
              <span>+54 11 5743 8238</span>
            </div>
            <div>
              I want tobe contacted by phone
            </div>
            <a href="#" class="button secondary">Contact me</a>
          </form>
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

  .button {
    display: block;
    text-align: center;
  }

  section {
    background-color: $purple-uby;
    color: white;
    padding: 40px 10px;
  }

  @media (min-width: 1024px) {
    .button {
      display: inline-block;
      text-align: left;
    }
  }

</style>
