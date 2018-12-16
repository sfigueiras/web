<template>
  <div id="navigation">
    <div class="left">
      <img src="~@/assets/images/solo-icon-colored.svg" alt="ubykuo logo on white">
      <div class="visible-md">
          <a href="">Services</a>
          <a href="">How we work</a>
          <a href="">Projects</a>
          <a href="">Our team</a>
          <a href="">Contact us</a>
      </div>
    </div>

    <div class="right">
      <icon class="visible-xs" icon="bars" size="2x" style="color: #fff" />
      <h1 class="visible-md">ubykuo</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/_variables.scss";

  #navigation {
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $purple-uby;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px;
    z-index: 2;

    .left {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  h1 {
    font-family: Gilroy;
    font-weight: lighter;
    color: white;
  }

  a {
    text-decoration: none;
    color: #fff;
    opacity: 0.5;
  }

  @media (min-width: 1024px) {

  }
</style>
