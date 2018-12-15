export default {
  created () {
    const lang = this.$route.query.lang
    if (typeof lang !== 'undefined') {
      this.$i18n.locale = this.validateCode(lang)
    }
  },
  methods: {
    validateCode (code) {
      if (code.match(/es|en/) === null) {
        return 'en'
      }
      return code
    }
  }
}
