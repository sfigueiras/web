<template>
  <article id="swipe-to">
    <div class="content">
      <h1>
        <slot></slot>
      </h1>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'GreenTitle'
  }

</script>

<style lang="scss" scoped>
  @media (min-width: 641px) {
    .content h1 {

      font-size: 40px;
      max-width: 50vw;
    }
  }

  .content {
    text-align: center;
  }

  h1 {
    display: inline-block;
    max-width: 70vw;
    color: #38E090;
    font-size: 1.8em;
    font-weight: 800;
    font-family: "Raleway", sans-serif;
    margin: 5%;
  }
</style>
