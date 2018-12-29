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
          <div v-show="success">
            <icon icon="check" size="3x" class="ok-icon"></icon>
            <p class="text-center">
              Thanks for reaching out to us!<br/>
              <small>We'll be contacting you asap.</small>
            </p>
          </div>
          <form autocomplete="off" @submit.prevent="onSubmit" v-show="!success">
            <div class="form-section">
              <input type="text" placeholder="name" v-model="contactForm.name" @input="$v.contactForm.name.$touch()"
                     :class="{error: $v.contactForm.name.$invalid && $v.contactForm.name.$dirty  }"
                     :disabled="isSaving">
              <span v-if="!$v.contactForm.name.required && $v.contactForm.name.$dirty">Missing name</span>
              <span v-else>we can call you John Doe if you leave it blank</span>
            </div>
            <div class="form-section">
              <input type="email" placeholder="email" v-model="contactForm.email" @input="$v.contactForm.email.$touch()"
                     :class="{error: $v.contactForm.email.$invalid && $v.contactForm.email.$dirty }"
                     :disabled="isSaving">
              <span v-if="!$v.contactForm.email.required && $v.contactForm.email.$dirty">Missing email</span>
              <span v-else-if="!$v.contactForm.email.email && $v.contactForm.email.$dirty">Invalid address</span>
              <span v-else>john@doe.com</span>
            </div>
            <div class="form-section" v-if="phone">
              <input type="tel" placeholder="phone" v-model="contactForm.telephone"
                     @input="$v.contactForm.telephone.$touch()" :disabled="isSaving">
              <span>+54 11 5743 8238</span>
            </div>

            <div class="form-section">
              <label class="switch">
                <input type="checkbox" name="phone-contact" v-model="phone" id="phone-contact">
                <span class="slider round"></span>
              </label>
              <span class="lead">I want to be contacted by phone</span>
            </div>
            <span v-show="error">Error sending message<br><br></span>
            <vue-recaptcha sitekey="6LdUlB8UAAAAAIluAGKDFauY9hWJgjpwA7qFtjAf">
              <button class="button secondary" type="submit" :disabled="isSaving">
                <span v-if="isSaving">Sending...</span><span v-else>Contact me</span>
              </button>
            </vue-recaptcha>
            <br>
            <br>
            <small class="recaptcha">This site is protected by reCAPTCHA and the Google
              <a href="https://policies.google.com/privacy">Privacy Policy</a> and
              <a href="https://policies.google.com/terms">Terms of Service</a> apply.
            </small>
          </form>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import {required, email} from 'vuelidate/lib/validators'
  import ContactMessage from '../mixins/ContactMessage'
  import VueRecaptcha from 'vue-recaptcha'

  export default {
    name: 'Contact',
    data () {
      return {
        phone: false,
        success: false,
        error: false
      }
    },
    components: {VueRecaptcha},
    mixins: [ContactMessage],
    validations: {
      contactForm: {
        name: {
          required
        },
        email: {
          email,
          required
        },
        telephone: {}
      }
    },
    methods: {
      onSuccess () {
        this.success = true
      },
      onError () {
        this.error = true
      },
      submit () {
        this.onSubmit()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/_variables';

  /deep/ .grecaptcha-badge {
    display: none;
  }

  .text-center {
    text-align: center;
  }

  .ok-icon {
    display: block;
    margin: 30px auto;
  }

  .button {
    display: block;
    text-align: center;
  }

  p {
    font-size: 24px;
    font-weight: 500;

    span {
      font-size: 42px;
    }
  }

  section {
    background-color: $purple-uby;
    color: white;
    padding: 50px 10px;
  }

  .recaptcha a {
    color: #FFF;
  }

  input {
    border: solid #FFF;
    border-width: 0 0 1px 0;
    background: transparent;
    width: 100%;
    font-size: 18px;
    padding: 15px 0;
    margin-bottom: 10px;

    &.error {
      border-bottom-color: #F00;
    }
  }

  form .form-section span {
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
    background-color: $pale-orange-uby;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px $pale-orange-uby;
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
