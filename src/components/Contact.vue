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
          <form autocomplete="off">
            <div class="form-section">
              <input type="text" placeholder="Name" name="name">
              <span>we can call you John Doe if you leave it blank</span>
            </div>
            <div class="form-section">
              <input type="email" placeholder="email" name="email">
              <span>john@doe.com</span>
            </div>
            <div class="form-section" v-if="phone">
              <input type="phone" placeholder="phone" name="phone">
              <span>+54 11 5743 8238</span>
            </div>

            <div class="form-section">
              <label class="switch">
                <input type="checkbox" name="phone-contact" v-model="phone" id="phone-contact">
                <span class="slider round"></span>
              </label>
              <span class="lead">I want to be contacted by phone</span>
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
    name: 'Contact',
    data () {
      return {
        phone: false
      }
    }
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
    font-size: 18px;
    padding: 15px 0;
    margin-bottom: 10px;
  }

  form span {
    font-size: 12px;
    color: #bfbfbf;
  }

  input:focus, input:active {
    outline: none;
  }

  .form-section {
    margin-bottom: 15px;
  }

  ::-webkit-input-placeholder {
    color: #bfbfbf;
  }

  ::-moz-placeholder {
    color: #bfbfbf;
  }

  :-ms-input-placeholder {
    color: #bfbfbf;
  }

  :-moz-placeholder {
    color: #bfbfbf;
  }

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 16px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 1px;
    bottom: 1px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(14px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 14px;
  }

  .slider.round:before {
    border-radius: 50%;
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
