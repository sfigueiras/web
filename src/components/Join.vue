<template>
  <section id="join">
    <h4>JOIN UBYKUO</h4>
    <h3>Get on board</h3>
    <p>Take a look at our open positions and apply to join this super team.</p>
    <a href="https://join.ubykuo.com"><b>{{ offers.length }} open positions</b></a>

    <ul v-for="department in departments">
      <li>{{ department }}</li>
    </ul>

    <carousel :per-page="1" ref="carousel">
      <slide v-for="offer in offers" :key="offer.id">
        <h3>{{ offer.title }}</h3>
        <p>{{ offer.city }}, {{ offer.country }}</p>
        <a :href="offer.careers_url">Apply</a>
      </slide>
    </carousel>
  </section>
</template>

<script>
  export default {
    name: 'Join',
    data () {
      return {
        url: 'https://join.ubykuo.com/api/offers',
        offers: []
      }
    },
    mounted () {
      this.$http.get(this.url).then((response) => {
        if (response.status === 200) {
          this.offers = response.body.offers
        }
      })
    },
    computed: {
      departments () {
        let dep = this.offers.map(offer => offer.department)
        return dep.filter((value, index, self) => {
          return self.indexOf(value) === index
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/_variables';

  section {
    background-color: $grey-background;
  }
</style>
