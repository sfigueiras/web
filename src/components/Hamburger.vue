<template>
  <svg class="item navigation-icon"
     style="enable-background:new 0 0 40 18;"
     version="1.1" viewbox="0 0 40 18" x="0px"
     xml:space="preserve"
     xmlns="http://www.w3.org/2000/svg"
     y="0px">
    <g class="hamburger" :class="{solid: solid}">
      <rect class="line top-line" height="6" width="40"></rect>
      <rect class="line bottom-line" height="6" width="30" y="12"></rect>
    </g>
  </svg>
</template>

<script>
  export default {
    name: 'hamburger',
    props: {
      solid: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/variables.scss';

  svg {
    top: 0;
    transition: transform linear .2s;
    width: $icon-width;

    .hamburger {
      rect {
        fill: $nav-color;
      }

      &.solid {
        rect {
          fill: $terciary-text;
        }
      }
    }
  }

  .navigation-icon {
    z-index: 1;
    padding-right: 10px;

    .hamburger {
      .top-line {
        transition: fill .3s ease-out, transform .3s ease-in-out;
      }

      .bottom-line {
        transition: fill .3s ease-in, transform .3s ease-in-out .2s;
      }
    }

    &:hover .hamburger {
      .top-line {
        transform: scaleX(1.7);
      }

      .bottom-line {
        transform: scaleX(1.6);
      }

    }
  }
</style>
