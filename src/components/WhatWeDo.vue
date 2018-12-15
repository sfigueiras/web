<template>
  <section class="what-we-do-container">
    <h1 class="title">{{$t('whatWeDo')}}</h1>
    <div class="what-we-do">
      <pilar
        v-for="pilar in pilars"
        :title="pilar.title"
        :description="pilar.description"
        :technologies="pilar.technologies"
        :icon="pilar.icon"
        :alt="pilar.alt"
        :key="pilar.title"></pilar>
      <passion-widget></passion-widget>
    </div>

    <div id="swipe-down" class="next" v-on:click="autoScroll">
      <span> {{$t('next')}}</span>
      <img class="arrow down" src="/static/img/icons/arrow-green.png"
           alt="swipe down arrow">
    </div>
  </section>
</template>
<script>
  import GreenTitle from './GreenTitle'
  import Pilar from './Pilar'
  import PassionWidget from './PassionWidget'
  import ScrollTo from '../mixins/ScrollTo'

  export default {
    name: 'WhatWeDo',
    components: {
      GreenTitle,
      Pilar,
      PassionWidget
    },
    mixins: [ScrollTo],
    data () {
      return {
        pilars: [
          {
            title: 'design',
            description: 'designDesc',
            technologies:
              'Design Thinking, UX, Visual Design, Software Architecture',
            icon: 'static/img/what/DISEÑAR.svg',
            alt: 'design icon'
          },
          {
            title: 'build',
            description: 'buildDesc',
            technologies:
              'Javascript, Go, Ruby, Python, PHP, Java, Scrum, Kanban',
            icon: 'static/img/what/CONSTRUIR.svg',
            alt: 'build icon'
          },
          {
            title: 'learn',
            description:
              'learnDesc',
            technologies:
              'Business Intelligence, Data mining, Machine Learning',
            icon: 'static/img/what/APRENDER.svg',
            alt: 'predecir'
          },
          {
            title: 'improve',
            description: 'improveDesc',
            technologies:
              'Reimplementación, Migración, Optimización, Mejora de experiencia de usuario, SEO',
            icon: 'static/img/what/MEJORAR.svg',
            alt: ''
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '~@/variables.scss';

  .title {
    text-align: center;
    padding: $title-padding;
    margin: 0;
    color: $terciary-text;
  }

  @media (min-width: 461px) {
    .title {
      color: $secondary;
    }
  }

  .what-we-do-container {
    position: relative;
    padding: $section-padding-vertical 0;
  }

  .what-we-do {
    position: relative;
    display: grid;
    grid-gap: 35px;
    justify-content: center;
    grid-auto-rows: minmax(50%, 1fr);
    grid-template-columns: repeat(2, 35vw);
    margin: 20px 0;
  }

  @media (max-width: 460px) {
    .what-we-do {
      grid-gap: 0;
      grid-auto-rows: 40%;
      grid-template-columns: 90vw;
    }

    .what-we-do-container {
      background-color: white;
    }
  }

  @media (min-width: 461px) and (max-width: 800px) {
    .what-we-do {
      grid-template-columns: repeat(2, 45vw);
    }
  }
</style>

