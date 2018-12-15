<template>
  <section class="team">
    <h1 class="section-title">{{ $t('theTeam') }} 💪</h1>
    <picture>
      <source
        type="image/webp"
        data-srcset="static/img/backgrounds/team-complete-mobile.webp 1000w,
                static/img/backgrounds/team-complete-optimized.webp 2000w"
        class="lazyload"/>
      <img
        data-srcset="static/img/backgrounds/team-complete-mobile.jpg 800w,
                static/img/backgrounds/team-complete.jpg 1000w"
        data-src="static/img/backgrounds/team-complete.jpg"
        class="lazyload"
        alt="the team picture"/>
    </picture>
  </section>
</template>

<script>
  export default {
    name: 'Team'
  }
</script>

<style lang="scss" scoped>
  @import '~@/variables.scss';


  img {
    width: 100vw;
  }

  @media (min-width: 641px) {
    img {
      width: 60%;
      box-shadow: $shadow-1;
    }
  }

  .team {
    position: relative;
    width: 100vw;
    padding: $section-padding-vertical 0 50% 0;
    text-align: center;
    height: 0;
  }

  @media (max-width: 641px) {
    .team {
      padding-bottom: 100%;
    }
  }

  picture {
    width:100%;
    height:100%;
    display:block;
    position:absolute;
  }

  .title {
    background-color: white;
    position: absolute;
    padding: 5px 25px 5px 95px;
    top: 10%;
    color: $primary;
    box-shadow: $shadow-1;
  }

  @media (max-width: 461px) {
    .title {
      position: relative;
      text-align: center;
      padding: 15px 0;

      h1 {
        margin: 0;
      }
    }
  }
</style>
