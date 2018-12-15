import 'url-search-params'
import 'whatwg-fetch'

export default {
  data () {
    return {
      contactForm: {
        name: '',
        email: '',
        message: ''
      },
      isSaving: false
    }
  },
  methods: {
    onSubmit () {
      fbq('track', 'CompleteRegistration')
      this.isSaving = true
      this.$v.contactForm.$touch()
      if (!this.$v.contactForm.$invalid) {
        let headers = new Headers()
        headers.set('Content-Type', 'application/x-www-form-urlencoded')
        let params = new URLSearchParams()
        params.append('name', this.contactForm.name)
        params.append('email', this.contactForm.email)
        params.append('message', this.contactForm.message)
        params.append('telephone', this.contactForm.telephone)
        fetch('https://wa93cdaebf.execute-api.us-east-1.amazonaws.com/prod/mailer', {
          method: 'POST',
          body: params,
          headers,
          mode: 'cors'
        })
        .then((response) => {
          response.json().then(object => {
            if (object.msg.match(/(Bad|Error)/i)) {
              this.showToast(this.$t('contactSentFailure'), 'failure')
            }
            this.showToast(this.$t('contactSentSuccess'), 'success')

            this.isSaving = false
            this.onSuccess()
          })
        }, err => {
          console.error(err)
          this.showToast(this.$t('contactSentFailure'), 'failure')
          this.isSaving = false
        })
      } else {
        this.isSaving = false
      }
    },
    onSuccess () {}
  }
}
