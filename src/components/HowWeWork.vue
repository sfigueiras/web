<template>
  <section id="join">
    <div class="background"></div>
    <div class="container">
      <h4>HOW WE WORK</h4>
      <h3>Innovative as a routine, for long lasting products.</h3>
      <p class="lead">We share a culture of hard work​, collaboration​ and quality, every one of us is guided by a
        fundamental premise: focus on our clients’ success​.</p>
      <img src="~@/assets/images/teamwork.png" alt="ubykuo's team work illustration">

      <ul class="culture">
        <li v-for="value in values" :key="value">
          <icon icon="check" style="color: #3eff9a" />
          <p>{{ value }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HowWeWork',
    data () {
      return {
        values: [
          'Your success is our success',
          'We walk in your shoes',
          'We believe in radical collaboration',
          'Creative mindset',
          'We love what we do'
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/_variables';

  section {
    background-color: $grey-background;
    padding: 50px 10px 10px 10px;
    position: relative;
  }

  img {
    width: 100%;
    margin: 50px 0 30px 0;
  }

  ul {
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    margin: 34px 0;

    svg {
      margin-right: 15px;
    }

    p {
      margin: 0;
      font-weight: 500;
      color: $type-uby;
    }
  }

  @media (min-width: 1024px) {
    section {
      background-color: transparent;
    }

    h3, .lead {
      max-width: 500px;
    }

    .container {
      position: relative;
    }

    img {
      position: absolute;
      bottom: 0;
      z-index: -1;
      width: 70%;
      right: 0;
    }

    .culture {
      background-color: #fff;
      z-index: 1;
      width: 447px;
      padding: 20px 52px;
      margin-top: 53px;
      border: 1px solid $border-color;
    }

    .background {
      width: 100%;
      height: 100%;
      background-color: $grey-background;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
</style>
