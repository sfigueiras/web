<template>
  <div id="mobile-contact-phone">
    <span v-show="$i18n.locale == 'es'">
      <b>ARG</b> <a href="tel:+541151284568">+541151284568</a>
    </span>
    <span v-show="$i18n.locale == 'en'">
      <b>USA</b> <a href="tel:+18883087068">+18883087068</a>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'mobile-contact-phone'
  }
</script>

<style lang="scss" scoped>
  @import '~@/variables.scss';

  #mobile-contact-phone {
    display: flex;
    padding: 15px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: $secondary;
  }

  span {
    font-size: 1.4em;
    font-family: $secondary-font;
    a {
      font-family: inherit;
    }
  }

  @media (min-width: 641px) {
    #mobile-contact-phone {
      display: none;
    }
  }
</style>
