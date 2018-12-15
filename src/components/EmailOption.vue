<template>
  <section>
    <h3 class="text">{{
      $t('otherOffers') }} <a v-on:click="autoScroll">{{ $t('here') }}</a></h3>
    <img class="lazyload" data-src="/static/img/offers/mail.svg"
         alt="mail icon"/>
  </section>
</template>

<script>
  import ScrollTo from '../mixins/ScrollTo'

  export default {
    name: 'EmailOption',
    mixins: [ScrollTo]
  }
</script>

<style lang="scss" scoped>
  @import '~@/variables.scss';

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    text-align: center;
  }

  @media (min-width: 641px) {
    section {
      font-size: 1.5em;
    }
  }

  @media (max-width: 800px) {
    section {
      flex-direction: column;
    }
  }

  .text {
    color: white;
    text-align: center;

    a {
      color: $secondary;
      font-weight: bold;
    }
  }

  img {
    display: none;
  }

  @media (min-width: 461px) {
    section {
      margin: 5% 0;
      padding: 0 20px;
      box-sizing: border-box;
    }

    img {
      display: block;
      width: 100px;
      height: 100px;
    }

  }
</style>
