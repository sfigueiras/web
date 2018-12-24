<template>
  <section id="services">
    <div class="container">
      <h3>Our main services</h3>
      <p class="lead">go trought the code, get to the heart</p>
    </div>
    <div class="container main-services">
      <div class="row">
        <div class="col-xs-12 col-sm-3">
          <div class="card">
            <div class="card-content">
              <img src="~@/assets/images/services-robot.png" alt="factory goes digital">
              <h5>Software evolution</h5>
              <p>We take over your platform introducing new features and improving existing ones.</p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-3">
          <div class="card">
            <div class="card-content">
              <img src="~@/assets/images/services-applab.png" alt="factory goes digital">
              <h5>Web platform lab</h5>
              <p>We can build custom digital products or services to fit your needs.</p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-3">
          <div class="card">
            <div class="card-content">
              <img src="~@/assets/images/services-gomobile.png" alt="factory goes digital">
              <h5>Go mobile</h5>
              <p>Responsive Progressive Web Apps and Native apps development.</p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-3">
          <div class="card">
            <div class="card-content">
              <img src="~@/assets/images/services-factorygoesdigital.png" alt="factory goes digital">
              <h5>Factory goes digital</h5>
              <p>Get real time state of your factory and manage it from any device.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'MainServices'
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/_variables';

  section {
    background-color: #FFF;
    padding: 50px 10px 10px 10px;
  }

  h3 {
    padding: 0
  }

  .card {
    text-align: center;
    padding: 220px 40px 45px 40px;
    height: 400px;
    position: relative;

    img {
      position: absolute;
      top: 40px;
      left: 50%;
      transform: translateX(-50%);
    }

    p {
      padding: 14px 0 0 0;
      font-size: 16px;
      line-height: 1.25;
    }
  }

  @media (min-width: 1024px) {
    .main-services {
      padding: 100px 0;
    }

    .card {
      background: #f8f8fa;
      border-radius: $border-radius;
      border: 1px solid #d9d8e0;
      transition: all 400ms;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

</style>
