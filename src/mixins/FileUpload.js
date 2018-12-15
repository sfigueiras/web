import aws from 'aws-sdk'

export default {
  data () {
    return {
      file: {},
      isSaving: false
    }
  },
  methods: {
    onChange (event) {
      this.file = event.target.files[0]
    },
    onSubmit () {
      this.isSaving = true
      let bucket = new aws.S3({
        credentials: new aws.Credentials('AKIAIHGQTEGN3MMONWYQ',
          '9sX4s/2Mu4lFhQv1mbXMxgXxUtVfTcZVde7MAdHj')
      })
      bucket.putObject({
        Bucket: 'ubykuo-mailer',
        Key: this.file.name.split(/\s+/).join('') + Date.now(),
        Body: this.file
      }, (err) => {
        if (err) {
          this.showToast(this.$t('joinSentFailure'), 'failure')
          this.isSaving = false
        } else {
          this.showToast(this.$t('joinSentSuccess'), 'success')
          this.isSaving = false
        }
      })
    }
  }
}
