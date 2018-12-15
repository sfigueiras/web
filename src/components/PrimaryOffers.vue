<template>
  <section>
    <h1 class="section-title">{{$t('doTogetherTitle')}}</h1>
    <div class="offers">
      <primary-offer scroll-to="contact-form"
                     v-for="offer in offers" v-once :offer="offer"
                     :key="offer.title">
      </primary-offer>
    </div>
  </section>
</template>

<script>
  import PrimaryOffer from './PrimaryOffer'

  export default {
    name: 'PrimaryOffers',
    components: {PrimaryOffer},
    data () {
      return {
        offers: [
          {
            title: 'webDevelopment',
            image: '/static/img/offers/dev.svg',
            alt: 'software development icon',
            highlight: 'webDevelopmentHighlight',
            solutions: ['innovativeProducts']
          },
          {
            title: 'optimization',
            image: '/static/img/offers/optimization.svg',
            alt: 'optimization icon',
            highlight: 'optimizationHighlight',
            solutions: ['improveProducts']
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '~@/variables.scss';

  section {
    padding: $section-padding-vertical $section-padding-horizontal;
  }

  .offers {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  /*******************************************************
  TABLET
  *******************************************************/
  @media (min-width: 641px) {
    .offers {
      flex-direction: row !important;
    }
  }

  /*******************************************************
  DESKTOP
  *******************************************************/
  @media (min-width: 1024px) {
    .offers {
      justify-content: space-around;
      padding: 0 15%;
      align-items: baseline;
    }
  }
</style>
