<template>
  <section class="contact-us">
    <hr>
    <div class="content"><h1>{{$t('contactUsTitle')}}</h1>
      <p class="contact-phrase">{{$t('contactUsPhrase1')}}</p>
    </div>

    <div class="form-container">
      <form class="form" id="f_contact" @submit.prevent="onSubmit">
        <input @input="$v.contactForm.name.$touch()" :class="{inputerror: $v.contactForm.name.$invalid
            && $v.contactForm.name.$dirty }" name="name"
               v-model="contactForm.name"
               :placeholder="$t('contactUsCompany')">

        <div class="label-container-error">
              <span class="label-error"
                    v-show="!$v.contactForm.name.required && $v.contactForm.name.$dirty">
                {{$t('requiredName')}}</span>
        </div>

        <input @input="delayTouch($v.contactForm.email)" :class="{inputerror: $v.contactForm.email.$invalid &&
              $v.contactForm.email.$dirty }" type="email" name="email"
               v-model="contactForm.email"
               :placeholder="$t('contactEmail')">

        <div class="label-container-error">
          <span class="label-error"
                v-show="!$v.contactForm.email.required && $v.contactForm.email.$dirty">
            {{$t('requiredEmail')}}</span>

          <span class="label-error"
                v-show="!$v.contactForm.email.email && $v.contactForm.email.$dirty">
                  {{$t('invalidEmail')}}</span>
        </div>

        <p class="question">{{$t('contactQuestion')}}</p>

        <textarea @input="$v.contactForm.message.$touch()" :class="[$v.contactForm.message.$invalid &&
              $v.contactForm.message.$dirty ? 'messageerror inputerror' : 'message']"
                  name="message"
                  v-model="contactForm.message"> :placeholder="$t('contactUsDoForYou')"></textarea>

        <div class="label-container-error">
              <span class="label-error"
                    v-show="!$v.contactForm.message.required && $v.contactForm.message.$dirty">
                {{$t('requiredMessage')}}</span>
        </div>

        <input type="tel" :placeholder="$t('telephoneNumber')"
               v-model="contactForm.telephone">

        <br>

        <div class="center">
          <v-button color-class="button-terciary" :disabled="isSaving">
            {{$t('sendButton')}}
          </v-button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  import Button from './Button'
  import { required, email } from 'vuelidate/lib/validators'
  import ContactMessage from '../mixins/ContactMessage'

  const touchMap = new WeakMap()

  export default {
    name: 'ContactForm',
    components: {
      'v-button': Button
    },
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
        message: {
          required
        },
        telephone: {
        }
      }
    },
    methods: {
      delayTouch ($v) {
        $v.$reset()
        if (touchMap.has($v)) {
          clearTimeout(touchMap.get($v))
        }
        touchMap.set($v, setTimeout($v.$touch, 1000))
      },
      onSuccess () {
        this.gtag_report_conversion()
        document.getElementById('linkedin-conversion').src =
          '//dc.ads.linkedin.com/collect/?pid=88906&conversionId=194402&fmt=gif'
      },
      gtag_report_conversion (url) {
        const callback = function () {
          if (typeof (url) !== 'undefined') {
            window.location = url
          }
        }
        gtag('event', 'conversion', {
          'send_to': 'AW-828693501/m8OiCLSns3kQ_beTiwM',
          'event_callback': callback
        })
        return false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .contact-phrase {
    display: none;
    text-align: center;
  }

  .contact-us {
    background-color: #306;
  }

  /*******************************************************
  TABLET
  *******************************************************/
  @media (min-width: 641px) {
    .contact-us {
      background-color: #306;
      background-image: none;
    }

    h1 {
      text-align: center;
      font-size: 2.5em;
      margin-bottom: 30px;
    }

    .contact-phrase {
      max-width: 280px;
      display: block;
    }
  }

  .contact-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    color: white;
    padding: 20px 20px 0 20px;
    padding-bottom: 40px;
  }

  h1 {
    font-size: 1.8em;
    font-weight: 800;
    font-family: "Raleway", sans-serif;
  }

  /*******************************************************
  FORMS
  *******************************************************/
  form {
    padding: 0 5px 0 5px;
  }

  input,
  textarea {
    display: block;
    color: white;
    margin-top: 10px;
    background-color: transparent;
    padding: 10px;
    border: 2px solid white;
    border-radius: 5px;
    width: calc(100% - 20px);
    font-size: 1.1em;
    text-decoration-color: #38E090;
  }

  input:focus,
  textarea:focus,
  button:focus {
    outline-color: #38E090;
  }

  input {
    height: 20px;
  }

  textarea {
    resize: none;
    min-height: 100px;
  }

  // Forms component migrate
  .form-container {
    width: 90%;
  }

  .center {
    text-align: center;
  }

  input::placeholder {
    color: white;
  }

  textarea::placeholder {
    color: white;
  }

  .inputerror {
    border-color: red;
  }

  .label-error {
    color: red;
  }

  .label-container-error {
    margin-top: 3px;

    &last {
      margin-bottom: 15px;
    }
  }

</style>
