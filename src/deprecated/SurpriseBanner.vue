<template>
  <div class="surprise-banner" @click="onClick()" :class="{ active }">
    <div class="claim">
      <img class="lazyload" src="static/img/icons/giftmovil.svg" alt="gift">
      <p>{{ $t('giftOffer') }}</p>
    </div>
    <div class="options" :class="{ active }">
      <a class="dismiss" @click.stop="onClick()">{{
        $t('dismiss').toUpperCase() }}</a>
      <a :href="$t('pollLink')">{{ $t('answer').toUpperCase() }}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SurpriseBanner',
    data () {
      return {
        active: false
      }
    },
    methods: {
      onClick () {
        this.active = !this.active
      }
    },
    mounted () {
      setTimeout(() => {
        this.active = true
      }, 500)
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/variables.scss';

  $banner-initial-position: calc(100% - 80px);

  .surprise-banner {
    position: fixed;
    bottom: 0;
    width: calc(100% - 20px);
    left: $banner-initial-position;
    z-index: 2;
    padding: 0 10px 0 10px;
    background-color: $primary;
    color: white;
    box-shadow: $shadow-1;
  }

  .active {
    animation: slide-in-banner .8s ease-in-out .3s forwards;
  }

  @keyframes slide-in-banner {
    70% {
      left: 0;
    }

    100% {
      left: 0;
    }
  }

  .options {
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: auto;
    height: 0;
    opacity: 0;
    visibility: hidden;

    &.active {
      animation: slide-in-options .5s ease-out .8s forwards;
    }
  }

  @keyframes slide-in-options {
    60% {
      height: auto;
    }

    100% {
      height: auto;
      opacity: 1;
      visibility: visible;
      padding-bottom: 20px;
    }
  }

  .claim {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }

  img {
    height: 60px;
    margin-right: 10px;
  }

  a {
    font-weight: bold;
    color: $secondary;

    &.dismiss {
      color: rgba(158, 158, 158, 0.47);
      margin-right: 10px;
    }
  }

  @media (min-width: 641px) {
    .surprise-banner {
      bottom: -120px;
      transition: all .5s;
      animation: none;
      left: 0;

      &.active {
        bottom: 0;
      }
    }

    .claim {
      justify-content: center;
    }

    .options {
      width: 20vw;
    }
  }
</style>
