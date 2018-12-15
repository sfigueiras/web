<template>
  <h2 class="contact-shortcut" :class="{solid: solid}">
    <span class="number">
      <b>ARG</b> <a href="tel:+541151284568">+541151284568</a>
      <b>USA</b> <a href="tel:+18883087068">+18883087068</a>
      <b>SPAIN</b> <a href="tel:+34919011269">+34919011269</a>
    </span>
    <img src="/static/img/icons/telefono.svg" alt="telephone">
  </h2>
</template>

<script>
  export default {
    name: 'PhoneContactWidget',
    props: {
      solid: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/variables.scss';

  .contact-shortcut {
    color: $primary;
    margin: 0;
    cursor: pointer;
    transition: all .3s;
    display: flex;
    height: calc(100% - 10px);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 0 0 10px;

    &.solid {
      img {
        background-color: $terciary-text;
      }
    }

    &:hover {
      .number {
        animation: displayNumber .3s ease-in .2s forwards;
      }
      img {
        animation: drawCircle .3s ease-in forwards;
      }
    }

    .number {
      margin: 0 -15px 0 0;
      opacity: 0;
      visibility: hidden;
      padding: 0 20px 0 10px;
      border-radius: 10px;

      b {
        color: $secondary;
      }

      a {
        font-family: $secondary-font;
      }
    }

    img {
      height: calc(100% - 10px);
      padding: 0 10px;
      padding: 10px;
      border-radius: 100%;
      z-index: 2;
    }

    @keyframes displayNumber {
      10% {
        background-color: $terciary-text;
      }

      50% {
        visibility: visible;
        opacity: 1;
      }

      100% {
        width: 100%;
        background-color: $terciary-text;
        visibility: visible;
        opacity: 1;
      }
    }

    @keyframes drawCircle {
      80% {
        bow-shadow: $shadow-1;
      }

      100% {
        background-color: $terciary-text;
        bow-shadow: $shadow-1;
      }
    }

    @media (max-width: 641px) {
      display: none;
    }
  }
</style>
