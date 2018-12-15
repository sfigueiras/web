<template>
  <button @click="onClick" :type="type" :class="colorClass">
    <slot>Button name</slot>
  </button>
</template>

<script>
  export default {
    props: {
      colorClass: {
        type: String,
        required: true
      },
      onClick: {
        type: Function,
        default: () => {}
      },
      type: {
        type: String,
        required: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/variables.scss';

  /*******************************************************
  TABLET
  *******************************************************/
  @media (min-width: 641px) {
  }

  .button, .button-secondary, .button-primary, .button-terciary {
    padding: 10px 0;
    border: 2px solid white;
    border-radius: 25px;
    color: white;
    min-width: 140px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.1s linear;
    background-color: transparent;
    &[disabled] {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  .button-primary {
    background-color: $secondary;
    margin-top: 10px;
    color: white;
    border-color: $secondary;
  }

  .button-primary:hover, .button-primary:focus, .button-primary:active {
    &:not([disabled]) {
      color: white;
      opacity: 0.8;
    }
  }

  .button-secondary {
    background-color: transparent;
    margin-top: 10px;
    color: #9933ff;
    border-color: #9933ff;
  }

  .button-secondary:hover, .button-secondary:focus, .button-secondary:active {
    &:not([disabled]) {
      color: white;
      background-color: #9933ff;
    }
  }

  .button-terciary {
    background-color: transparent;
  }

  .button-terciary:hover, .button-terciary:focus, .button-terciary:active {
    &:not([disabled]) {
      color: #9933ff;
      background-color: white;
    }
  }
</style>
