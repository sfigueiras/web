<template>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8">
          <p>
            Got an idea?<br>
            <span>let us a contact,<br> we call you</span>
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

  p {
    font-size: 24px;

    span {
      font-size: 42px;
      font-weight: 500;
    }
  }

  section {
    background-color: $purple-uby;
    color: white;
    padding: 50px 10px;
  }

  input {
    border: solid #FFF;
    border-width: 0 0 1px 0;
    background: transparent;
    width: 100%;
    padding: 5px 0;
  }

  @media (min-width: 1024px) {
    section {
      padding: 150px 10px;
    }

    p {
      font-size: 24px;

      span {
        font-size: 64px;
      }
    }
    .button {
      display: inline-block;
      text-align: left;
    }
  }

</style>
