export default {
  props: ['scrollTo'],
  methods: {
    autoScroll () {
      if (this.elementId !== null) {
        this.$SmoothScroll(document.getElementById(this.scrollTo))
      }
    }
  }
}
