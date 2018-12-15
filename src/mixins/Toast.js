export default {
  data: function () {
    return {
      toastShowing: false
    }
  },
  methods: {
    // type = 'success' or 'failure'
    showToast: function (text, type) {
      if (this.toastShowing) return

      this.toastShowing = true
      // Get the snackbar DIV
      var snackElement = document.getElementById('snackbar')
      // Add the "show" and type class to DIV
      snackElement.className = 'show '
      snackElement.className += type

      snackElement.innerHTML = text
      // After 3 seconds, remove the show class from DIV
      setTimeout(function () {
        snackElement.className = snackElement.className.replace('show', '')
        snackElement.innerHTML = ''
        this.toastShowing = false
      }.bind(this), 3000)
    }
  }
}
