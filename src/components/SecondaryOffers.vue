<template>
  <section>
    <h1 class="section-title">{{$t('secondaryOffers')}}</h1>
    <div class="offers">
      <secondary-offer v-for="offer in secondaryOffers"
                       v-once :key="offer.id"
                       :position="position(offer.id, secondaryOffers.length)"
                       :offer="offer">
      </secondary-offer>
    </div>
    <carousel class="offers-mobile" :per-page="1"
              :pagination-active-color="'#38E090'">
      <slide v-for="offer in secondaryOffers" :key="offer.id">
        <secondary-offer :position="position(offer.id,
        secondaryOffers.length)" :offer="offer">
        </secondary-offer>
      </slide>
    </carousel>
  </section>
</template>

<script>
  import SecondaryOffer from './SecondaryOffer.vue'
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    name: 'SecondaryOffers',
    components: {SecondaryOffer, Carousel, Slide},
    data () {
      return {
        direction: 'vertical',
        secondaryOffers: [
          {
            id: 1,
            image: '/static/img/offers/seo.svg',
            title: 'seo',
            highlight: 'seoHighlight',
            description: 'seoDescription'
          },
          {
            id: 2,
            image: '/static/img/offers/security.svg',
            title: 'security',
            highlight: 'securityHighlight',
            description: 'securityDescription'
          },
          {
            id: 3,
            image: '/static/img/offers/cloud.svg',
            title: 'infraCosts',
            highlight: 'infraHighlight',
            description: 'infraCostsDescription'
          }
        ]
      }
    },
    methods: {
      position (position, length) {
        if (position === length) {
          return 'last'
        }
        if (position === 1) {
          return 'first'
        }
        return 'middle'
      },
      handleResize () {
        this.direction = this.mobile ? 'vertical' : 'horizontal'
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '~@/variables.scss';

  section {
    padding: $section-padding-vertical $section-padding-horizontal;
  }

  .offers-mobile {
    display: block;
  }

  .offers {
    display: none;
    &:first-child {
      margin-top: 0;
    }
  }

  @media (min-width: 461px) {
    .offers {
      display: flex;
    }

    .offers-mobile {
      display: none;
    }
  }

  /*******************************************************
  TABLET
  *******************************************************/
  @media (min-width: 641px) {
    .offers {
      display: flex;
      justify-content: space-around;
      flex-direction: row;
    }
  }

  /*******************************************************
  DESKTOP
  *******************************************************/
  @media (min-width: 1024px) {
    .offers {
      padding: 0 10%;
    }
  }
</style>
