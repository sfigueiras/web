import 'url-search-params'
import 'whatwg-fetch'

export default {
  data () {
    return {
      contactForm: {
        name: '',
        email: '',
        telephone: ''
      },
      isSaving: false
    }
  },
  methods: {
    onSubmit () {
      this.isSaving = true
      this.$v.contactForm.$touch()
      if (!this.$v.contactForm.$invalid) {
        let headers = new Headers()
        headers.set('Content-Type', 'application/x-www-form-urlencoded')
        let params = new URLSearchParams()
        params.append('name', this.contactForm.name)
        params.append('email', this.contactForm.email)
        params.append('message', '.')
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
                this.onError(object)
              }

              this.isSaving = false
              this.onSuccess()
            })
          }, err => {
            this.onError(err)
            this.isSaving = false
          })
      } else {
        this.onError()
        this.isSaving = false
      }
    },
    onSuccess () {
    },
    onError () {
    }
  }
}
