<template>
  <div class="pilar-container">
    <div class="pilar">
      <div class="title">
        <img class="lazyload" :data-src="icon" :alt="alt">
        <h3>{{ $t(title) }}</h3>
      </div>
      <p>{{ $t(description) }}</p>
      <span>{{ technologies }}</span>
    </div>
  </div>
</template>

<script>
  import PilarIcon from './PilarIcon'

  export default {
    name: 'Pilar',
    props: ['title', 'description', 'technologies', 'icon', 'alt'],
    components: { PilarIcon }
  }
</script>

<style lang="scss" scoped>
  @import '~@/variables.scss';
  .box-interacions {
    box-shadow: $shadow-1;
    transition: all .3s;
    will-change: transform;

    &:hover {
      transform: scale(1.05);
      box-shadow: $shadow-1-hover;
    }
  }

  .pilar-container {
    display: flex;
    align-items: center;
    position: relative;
    background-color: white;
    @extend .box-interacions;
  }

  .pilar {
    color: $primary;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px;
    box-sizing: border-box;
    height: 100%;
  }

  .title {
    display: flex;
    align-items: center;
  }

  img {
    height: 35px;
    margin-right: 10px;
  }

  @media (max-width: 460px) {
    .pilar-container {
      box-shadow: none;
      &:hover {
        box-shadow: none;
        transform: none;
      }
    }

    .pilar {
      flex: 2.5;
      margin-bottom: 20px;
      box-shadow: $shadow-1;
    }
  }

  h3 {
    flex: 0.5;
    margin: 0;
    font-weight: 900;
  }

  p {
    flex: 2;
  }

  span {
    font-weight: bold;
  }

  span, p {
    color: $black;
    align-self: flex-start;
  }
</style>
