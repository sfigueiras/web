<template>
  <section class="how-we-do">
    <div class="overlay"></div>
    <picture>
      <source
        type="image/webp"
        data-srcset="static/img/backgrounds/team-cropped.webp 800w,
                static/img/backgrounds/team.webp 1000w"
        class="lazyload"/>
      <img
        data-srcset="static/img/backgrounds/team-cropped.jpg 800w,
                static/img/backgrounds/team.jpg 1000w"
        data-src="static/img/backgrounds/team.jpg"
        class="lazyload"
        alt="the team picture"/>
    </picture>
    <h1 class="section-title">{{ $t('howDoWeDo') }}</h1>
    <div class="characteristics-container">
      <ul class="characteristics">
        <li class="characteristic" v-for="characteristic in characteristics"
            :key="characteristic.title">
          <h2 class="title">{{ $t(characteristic.title).toUpperCase() }}</h2>
        </li>
      </ul>
    </div>

    <carousel class="characteristics-mobile" :per-page="1"
              :pagination-active-color="'#38E090'">
      <slide class="characteristic" v-for="characteristic in characteristics"
             :key="characteristic.title">
        <h2 class="title">{{ $t(characteristic.title).toUpperCase() }}</h2>
      </slide>
    </carousel>

    <div class="next" v-on:click="autoScroll">
      <span> {{$t('next')}}</span>
      <img class="arrow down" src="/static/img/icons/arrow-green.png"
           alt="swipe down arrow">
    </div>
  </section>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'
  import ScrollTo from '../mixins/ScrollTo'

  export default {
    name: 'HowWeDo',
    components: {
      Carousel,
      Slide
    },
    mixins: [ScrollTo],
    data () {
      return {
        characteristics: [
          {
            title: 'passion'
          },
          {
            title: 'transparency'
          },
          {
            title: 'agility'
          },
          {
            title: 'versatility'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/variables.scss';

  $background-color: rgba(63, 63, 63, 0.7);
  $background-color-hover: rgba(177, 177, 177, 0.3);
  $title-color: #909090;

  picture {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    &, img, source {
      height: 100%;
    }
    @media (min-width: 641px) {
      &, img, source {
        width: 100%;
      }
    }

  }

  @media (max-width: 641px) {
    picture {
      left: -50px;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: $background-color;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .how-we-do {
    position: relative;
    height: calc(100vh - #{$section-padding-vertical * 2});
    padding: $section-padding-vertical $section-padding-horizontal;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 641px) {
  }

  h1 {
    justify-self: flex-start;
  }

  .characteristics {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;

    &-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }

  .characteristics-mobile {
    display: none;

    .characteristic {
      padding: 0;
      width: 100%;
    }
  }

  .characteristic {
    transition: all .3s;
    text-align: center;
    font-size: 1.3em;
    padding: 0 30px;
    will-change: box-shadow, background-color, transform;

    &-active {
      transform: scale(1.05);
      background-color: $background-color-hover;
      box-shadow: $shadow-1-hover;

      .title {
        color: $secondary;
      }

      hr {
        visibility: visible;
        opacity: 1;
      }

      p {
        color: white;
      }
    }

    .title {
      font-weight: bold;
      color: $title-color;
    }

    hr {
      visibility: hidden;
      opacity: 0;
    }

    p {
      text-align: left;
      color: $title-color;
    }

    &:hover {
      @extend .characteristic-active;
    }
  }

  @media (max-width: 641px) {
    .characteristic {
      font-size: initial;
    }
  }

  @media (min-width: 641px) {
    .characteristics-mobile {
      width: 40vw;
    }
  }

  @media (max-width: 800px) {
    .how-we-do {
      align-items: center;
    }

    .characteristics-container {
      display: none;
    }

    .characteristics-mobile {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }

    .characteristic {
      .title {
        color: $secondary;
      }

      hr {
        display: none;
      }

      p {
        color: white;
        text-align: center;
      }

      &:hover {
        background-color: initial;
        transform: none;
      }
    }
  }
</style>
