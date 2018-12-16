<template>
  <section id="join">
    <div class="container">
      <h4>JOIN UBYKUO</h4>
      <h3>Get on board</h3>
      <p class="lead">Take a look at our open positions and apply to join this super team.</p>
      <a href="https://join.ubykuo.com" class="open-positions"><b>{{ offers.length }} open positions</b></a>

      <h6 class="tags">Tags</h6>
      <ul class="departments">
        <li v-for="department in departments"><span class="tag">{{ department }}</span></li>
      </ul>

      <carousel :per-page="1" :perPageCustom="[[1024, 3]]" ref="carousel">
        <slide v-for="offer in offers" :key="offer.id">
          <div class="card">
            <h5>{{ offer.title }}</h5>
            <p>{{ offer.city }}, {{ offer.country }}</p>
            <a :href="offer.careers_url" class="button primary">Apply</a>
          </div>
        </slide>
      </carousel>
    </div>
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
    padding: 50px 10px 10px 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    &:after {
      content: "";
      display: table;
      clear: both;
    }

    li {
      float: left;

      &:not(:first-child) {
        margin-left: 5px;
      }
    }
  }

  .tag {
    background: #ededed;
    border-radius: $border-radius;
    padding: 5px 10px;
  }

  .tags {
    display: none;
  }

  .button {
    display: block;
    text-align: center;
  }

  .card {
    background: #FFF;
    padding: 20px;
    margin: 0 10px;
    border-radius: $border-radius;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.1), 0 10px 25px 0 rgba(0, 0, 0, 0.14);
  }

  .open-positions {
    color: $pale-orange-uby;
    text-decoration: none;
  }

  /deep/ .VueCarousel {
    padding: 10px 0;
    margin: 0 -10px;
  }

  /deep/ .VueCarousel-wrapper {
    overflow: initial;
  }

  /deep/ .VueCarousel-dot {
    padding: 5px !important;
  }

  /deep/ .VueCarousel-dot-button {
    background: #FFFFFF !important;
    border: 1px solid #ededf0;
  }

  /deep/ .VueCarousel-dot--active button {
    background: $purple-uby !important;
  }

  @media (min-width: 1024px) {
    .button {
      display: inline-block;
      text-align: left;
    }

    ul {
      float: right;
    }

    .card {
      padding: 25px;
    }

    .tags {
      display: inline-block;
    }
  }

</style>
