<template>
  <div class="forms">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Forms'
  }
</script>

<style lang="scss" scoped>

  form {
    padding: 0 5px 0 5px;
  }

  /*******************************************************
  TABLET
  *******************************************************/
  @media (min-width: 641px) {
    body {
      background-color: transparent !important;
    }

    .forms {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -ms-flex-align: center;
      align-items: center;
      padding: 20px 15vw 10% 15vw;
      background: linear-gradient(to bottom, #306, #5000a0);
    }

    .forms section {
      -ms-flex: 1 1 100%;
      flex: 1 1 100%;
      -ms-flex-item-align: start;
      align-self: flex-start;
      margin: 10px;
    }
    .forms section hr {
      margin: 0;
    }
  }

  /*******************************************************
  DESKTOP
  *******************************************************/
  @media (min-width: 1024px) {
    .forms section {
      -ms-flex: 1 1;
      flex: 1 1;
    }

    .forms {
      padding-top: 100px;
    }
  }
</style>
