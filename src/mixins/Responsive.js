export default {
  data () {
    return {
      mobile: window.matchMedia('(max-width: 461px)').matches
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.mobile = window.matchMedia('(max-width: 461px)').matches
    }
  }
}
