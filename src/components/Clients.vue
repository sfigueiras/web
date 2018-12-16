<template>
  <section id="clients">
    <p class="trusted">Trusted by top brands</p>
    <p class="top-brands">all over the world</p>
    <div class="visible-md clients-desktop">
      <img src="static/img/pixel.png" v-for="client in clients" :key="client" height="51"
        :style="{ 'background-image': `url(/static/img/${client})`}" />
    </div>
    <carousel class="visible-xs" :per-page="1" ref="carousel">
        <slide v-for="client in clients" :key="client">
          <img src="static/img/pixel.png" height="51" :style="{ 'background-image': `url(/static/img/${client})`}" />
        </slide>
      </carousel>
  </section>
</template>

<script>
  export default {
    name: 'Clients',
    data () {
      return {
        clients: [
          'bazz.png',
          'beathey.png',
          'dothink.png',
          'plan-americas.png',
          'synerq.png',
          'batogo.png'
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/_variables.scss";

  section {
    background-color: $grey-background;
    text-align: center;
    padding-top: 50px;
  }

  img {
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
  }

  .trusted {
    height: 26px;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.63;
    letter-spacing: normal;
    text-align: center;
  }

  .top-brands {
    height: 16px;
    margin-top: 0;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: -0.2px;
    text-align: center;
  }

  .clients-desktop {
    display: flex;
    flex-direction: row;
  }

  /deep/ .VueCarousel {
    padding: 0;
  }

  /deep/ .VueCarousel-wrapper {
    overflow: initial;
  }

  /deep/ .VueCarousel-dot {
    padding: 5px !important;
  }

  /deep/ .VueCarousel-dot-button {
    background: #FFFFFF !important;
    border: 1px solid #ededf0;
  }

  /deep/ .VueCarousel-dot--active button {
    background: $purple-uby !important;
  }

  @media (min-width: 1024px) {
    img {
      width: initial;
      padding: 20px;
      width: 150px;
      margin-top: 45px;
    }
  }
</style>
