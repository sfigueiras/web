<template>
  <section id="team">
    <div class="background"></div>
    <div class="content">
      <h4>who we are</h4>
      <p>A young​, dynamic​ and experienced​ software design and development team backed​ by 40 years of industry and business knowledge advice and guidance.</p>
    </div>

    <div class="teams">
      <div v-for="(team, index) in teams" :key="team.name" class="team"
        :class="{ transition: hasTransition, current: index === 0, 'next-team': index !== 0}"
        :style="{
          'z-index': -index,
          'left': `calc(23% - ${index * (256/1.5)}px)`,
          'transition-delay': `.${index/2}s`
        }">
          <img :src="get(index).thumb" :alt="`${get(index).name} Team Logo`">
      </div>
    </div>

    <div class="navigation">
      <div class="name" :class="{ transition: hasTransition }">
        <span>{{ current.name }}</span>
      </div>
      <button class="button next" @click="onNext">
        <img src="~@/assets/images/arrow-right.svg" alt="arrow right icon">
      </button>
    </div>
  </section>

</template>

<script>
  export default {
    name: 'Team',
    data () {
      return {
        teams: [
          {
            name: 'Dev',
            thumb: 'https://via.placeholder.com/300'
          },
          {
            name: 'Product',
            thumb: 'https://via.placeholder.com/300'
          },
          {
            name: 'Management',
            thumb: 'https://via.placeholder.com/300'
          },
          {
            name: 'Sales',
            thumb: 'https://via.placeholder.com/300'
          }
        ],
        index: 1,
        transition: false
      }
    },
    computed: {
      current () {
        return this.teams[this.index % this.teams.length]
      },

      hasTransition () {
        return this.transition ? 'transition' : ''
      }
    },
    methods: {
      onNext () {
        this.transition = true
        const t = setTimeout(() => {
          this.transition = false
          clearTimeout(t)
        }, 300)
        this.index = this.index + 1
      },
      get (position) {
        return this.teams[(this.index + position) % this.teams.length]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/_variables';

  section {
    position: relative;
  }

  .content {
    padding: 50px 32px 10px 32px;
  }

  h4 {
    height: 36px;
    font-size: 32px;
    font-weight: bold;
    line-height: 1.13;
    color: $type-uby;
    margin: 25px 0;
  }

  p {
    font-size: 20px;
  }

  .background {
    width: 100%;
    height: 70%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: $pale-mauve-uby;
    z-index: -30;
  }

  .teams {
    min-height: 400px;
  }

  $team-card-width: 256px;

  .team {
    background-color: #fff;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    width: 256px;
    height: 232px;
    margin: 61px 0;
    transition: all .2s;
    img {
      height: 100%;
      width: 100%;
    }
  }

  .next-team {
    position: absolute;
    top: 35%;

    &.transition {
      transform: translateX(calc(256px / 4));
    }
  }

  .current {
    position: absolute;
    top: 35%;
    left: 23%;
    transform: scale(1.2);
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.1),
      0px 10px 25px 0px rgba(0, 0, 0, 0.14);
    z-index: 1;

    &.transition {
      opacity: 0;
      transform: scale(1.3);
    }
  }

  .next {
    z-index: 1;
    background-color: $black-uby;
    border-radius: 0;
    width: 72px;
  }

  .navigation {
    display: flex;
    height: 72px;
  }

  .name {
    width: 100%;
    background-color: #3eff9a;
    color: $black-uby;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    font-size: 18px;
    color: $black-uby;
    padding: 23px;
    transition: all .2s;

    &.transition {
      span {
        animation: teamName .5s;
      }
    }
  }

  @keyframes teamName {
    25% {
      transform: translateY(-20px);
      opacity: 0;
    }

    60% {
      transform: translateY(20px);
    }

    90% {
      opacity: 1;
    }
  }

  /deep/ .VueCarousel-navigation-button .VueCarousel-navigation-next {
    position: absolute;
    bottom: 0;
  }

  @media (min-width: 1024px) {

    $nav-height: 85px;

    #team {
      display: flex;
      flex-direction: row-reverse;
      height: 461px + $nav-height;
    }

    .team {
      margin: 0;
      top: 25%;
    }

    .content, .teams {
      width: 50%;
    }

    .content {
      background-color: $pale-mauve-uby;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 60px;

      p {
        max-width: 400px;
      }
    }

    .background {
      display: none;
    }

    .navigation {
      position: absolute;
      bottom: 0;
      left: 0;
      height: $nav-height;
      width: calc(50% + 78px);

      .button {
        width: $nav-height;
        height: $nav-height;
      }
    }
  }
</style>
