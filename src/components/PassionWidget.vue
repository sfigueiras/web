<template>
  <div class="passion">
    <img class="lazyload" data-src="static/img/what/corazon.svg" alt="heart">
    <div class="content">
      <h4>{{ $t('passionate').toUpperCase() }}</h4>
      <p>{{ $t('passionateDesc') }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PassionWidget'
  }
</script>

<style lang="scss" scoped>
  @import '~@/variables.scss';

  $passion-container: 100px;

  .passion {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background-color: $terciary-text;
    border-radius: 50%;
    display: none;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    box-shadow: $shadow-1;
    transition: height .3s cubic-bezier(.25, .8, .25, 1),
    width .3s cubic-bezier(.25, .8, .25, 1);
    will-change: height, width;

    &:hover {
      $passion-container: 250px;
      box-shadow: $shadow-1-hover;
      height: $passion-container;
      width: $passion-container;
      align-items: center;
      justify-content: flex-start;
      padding: 20px;

      .content {
        will-change: visibility, opacity, height;
      }

      .content {
        animation: text-fade .5s .2s forwards;
      }

      @keyframes text-fade {
        0% {
          height: auto;
        }

        100% {
          transition: visibility 1s, opacity 1s;
          visibility: visible;
          opacity: 1;
        }
      }

      img {
        animation: pulse .5s .5s;
      }
    }

    @keyframes pulse {
      50% {
        transform: scale(1.2);
      }
    }

    .content {
      visibility: hidden;
      opacity: 0;
      width: 100%;
      height: 0;

      h4 {
        margin: 10px 0 10px 0;
        font-weight: 900;
        color: $secondary;
        flex: 2;
      }

      p {
        margin: 0;
        color: white;
        flex: 1;

      }
    }

    img {
      height: 70px;
      transition: all .3s;
    }
  }

  @media (min-width: 461px) {
    .passion {
      display: flex;
    }
  }
</style>
