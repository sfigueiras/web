<template>
  <article class="offer">
    <img class="icon lazyload" :data-src="offer.image" v-once :alt="offer.alt">
    <div class="content">
      <h2 class="title" v-once>{{ $t(offer.title) }}</h2>
      <hr>
      <div class="description">
        <h3><b>{{ $t(offer.highlight) }}</b></h3>
        <ul>
          <li v-for="solution in offer.solutions">
            <span class="text">{{ $t(solution) }}</span>
            <br>
          </li>
        </ul>
      </div>
    </div>

    <footer class="action">
      <v-button color-class="button-primary" :on-click="autoScroll">I want
        it
      </v-button>
    </footer>
  </article>

</template>

<script>
  import Button from './Button'
  import ScrollTo from '../mixins/ScrollTo'

  export default {
    name: 'PrimaryOffer',
    props: {
      offer: {
        type: Object,
        require: true
      }
    },
    components: {
      'v-button': Button
    },
    mixins: [ScrollTo]
  }
</script>
<style lang="scss" scoped>
  @import '~@/variables.scss';

  ul {
    padding-left: 0;
  }

  .offer {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: white;
    min-width: 25%;
    margin-bottom: 20px;
    background-color: transparent;

  }

  .icon {
    width: 150px;
    padding: 25px 20px 10px 20px;
  }

  .title {
    margin: 20px 0;
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content {
    padding: 0 30px;
    max-width: 80%;
  }

  .offer, .action {
    width: 80vw;
  }

  .action {
    box-sizing: border-box;
    padding: 35px;
  }

  @media (max-width: 461px) {
    .text {
      max-height: 0 !important;
    }
  }

  /*******************************************************
  TABLET
  *******************************************************/
  @media (min-width: 641px) {
    .offer {
      color: white;
      justify-self: flex-start;
    }

    .content {
      padding: 0;
    }

    .action {
      display: none;
    }
  }

  /*******************************************************
 DESKTOP
 *******************************************************/
  @media (min-width: 1024px) {
    .offer {
      flex: 1;
      padding: 20px;
    }
  }
</style>
