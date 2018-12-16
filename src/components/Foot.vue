<template>
  <section id="footer">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-3 col-sm-push-9">
          <h2>social</h2>
          <p>
            <icon :icon="{ prefix: 'fab', iconName: 'facebook' }" size="lg" class="icon"/>
            <icon :icon="{ prefix: 'fab', iconName: 'twitter' }" size="lg" class="icon"/>
            <icon :icon="{ prefix: 'fab', iconName: 'instagram' }" size="lg" class="icon"/>
            <icon :icon="{ prefix: 'fab', iconName: 'github' }" size="lg" class="icon"/>
            <icon :icon="{ prefix: 'fab', iconName: 'medium' }" size="lg" class="icon"/>
            <icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" size="lg" class="icon"/>
          </p>
          <p><a href="mailto:hello@ubykuo.com">hello@ubykuo.com</a></p>
        </div><!-- social -->
        <div class="col-xs-12 col-sm-4 col-sm-pull-3">
          <h2>ubykuo</h2>
          <p>
            <b>Argentina, Buenos Aires</b><br>
            <span>Esmeralda 950 CABA</span><br>
            <span>+541151284568</span>
          </p>
          <p>
            <b>España, Madrid</b><br>
            <span>Paseo de la Castellana 43</span><br>
            <span>+34919011269</span></p>
          <p>
            <b>United States, California</b><br>
            <span>200 Spectrum Center Dr #300 CA-92618</span><br>
            <span>+19495229234</span>
          </p>
        </div><!-- ubykuo -->
        <div class="col-xs-12 col-sm-3 col-sm-pull-2">
          <h2>join ubykuo</h2>
          <p>We are looking for you, check our open positions.</p>
          <a href="https://join.ubykuo.com" class="button transparent arrow">Careers Site</a>
        </div><!-- join -->
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Foot'
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/_variables';

  section {
    background-color: $black-uby;
    color: #707170;
    font-size: 20px;
    padding: 40px 10px;
  }

  .icon {
    margin-right: 15px;
  }

  a {
    color: #707170;
    text-decoration: none;
  }

  @media (min-width: 1024px) {
    section {
      padding: 120px 0 40px 0;
    }
  }

</style>
