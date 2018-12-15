<template>
  <div class="icon-circle-container">
    <div class="icon-circle">
      <img :src="path" :alt="alt">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PilarIcon',
    props: ['path', 'alt'],
    data () {
      return {
        lineColor: '#330066'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/variables.scss';

  $circle-diameter: 70px;
  $circle-margin-left: 10px;

  .icon-circle-container {
    margin: 0 25px 0 $circle-margin-left;
    display: none;
    flex: 0.8;
  }

  .icon-circle {
    position: absolute;
    top: 25%;
    display: flex;
    height: $circle-diameter;
    width: $circle-diameter;
    background-color: $secondary;
    border-radius: 50%;
    box-shadow: $shadow-1;
    justify-content: center;
    align-items: center;

    img {
      width: 50px;
    }
  }

  @media (max-width: 461px) {
    .icon-circle-container {
      display: block;
    }
  }

</style>
