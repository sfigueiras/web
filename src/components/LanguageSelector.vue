<template>
  <h2 class="language-select" @click="changeLanguage()" :class="{solid: solid}">
    {{showDifferentLanguage}}
  </h2>
</template>

<script>
  export default {
    name: 'LanguageSelector',
    props: {
      solid: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      changeLanguage () {
        this.$i18n.locale === 'en' ? this.$i18n.locale = 'es' : this.$i18n.locale = 'en'
      }
    },
    computed: {
      showDifferentLanguage () {
        return (this.$i18n.locale === 'en' ? 'Es' : 'En')
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import '~@/variables.scss';

  .language-select {
    font-size: 30px;
    cursor: pointer;
    user-select: none;
    color: $nav-color;
    margin: 0;

    &.solid {
      color: $terciary-text;
    }
  }

</style>
