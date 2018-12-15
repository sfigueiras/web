<template>
  <article class="offer" :class="position">
    <div class="icon-container">
      <img class="icon lazyload" :data-src="offer.image" v-once alt="mvp
      offer logo">
    </div>
    <div class="content">
      <h3>{{ $t(offer.title) }}</h3>
      <hr class="center">
      <div class="description">
        <h4>{{ $t(offer.highlight) }}</h4>
        <p>{{ $t(offer.description) }}</p>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'SecondaryOffer',
    props: {
      offer: {
        type: Object,
        required: true
      },
      position: {
        type: String,
        required: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '~@/variables.scss';

  .description {
    h4 {
      min-height: 50px;
    }
  }

  .offer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: white;
    min-width: 25%;
    margin: 0 15px;
  }

  .content {
    padding: 10px;
    text-align: center;

    h3 {
      min-height: 45px;
    }
  }

  .icon {
    width: 100px;
    height: 100px;
  }

  .icon-container {
    width: 100%;
    text-align: center;
    padding: 20px 20px 0 20px;
    box-sizing: border-box;
  }

  .center {
    text-align: center;
  }

  /*******************************************************
  TABLET
  *******************************************************/
  @media (min-width: 641px) {
    .offer {
      background-color: $primary;
      border: 5px solid transparent;
    }

    .middle {
      border-color: #6216AA;
    }

    .last {
      -moz-border-image: -moz-linear-gradient(right, #34DC8E 0%, #6216AA 100%);
      -webkit-border-image: -webkit-linear-gradient(right, #34DC8E 0%, #6216AA 100%);
    }

    .first {
      -moz-border-image: -moz-linear-gradient(right, #34DC8E 0%, #6216AA 100%);
      -webkit-border-image: -webkit-linear-gradient(left, #34DC8E 0%, #6216AA 100%);
    }

    .offer, .first, .middle, .last {
      border-image-slice: 1;
    }

    .text-container {
      max-height: inherit;
      text-align: center;
      max-width: 100%;
    }

    .content {
      max-height: 600px;
    }
  }

  /*******************************************************
 DESKTOP
 *******************************************************/
  @media (min-width: 1024px) {
    .offer {
      flex: 1;
    }
  }

</style>
