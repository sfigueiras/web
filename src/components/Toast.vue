<template>
  <div>
    <div id="toast-aligner">
      <div id="snackbar">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Toast'
  }
</script>

<style lang="scss" scoped>
  @import '~@/variables.scss';

  #toast-aligner {
    position: fixed;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    z-index: 5;
  }

  /* The snackbar - position it at the bottom and in the middle of the screen */
  #snackbar {
    align-self: center;
    font-size: 1.2em;
    font-weight: 400;
    font-family: "Raleway", sans-serif;
    visibility: hidden; /* Hidden by default. Visible on click */
    min-width: 250px; //!* Set a default minimum width *!*!*/
    color: white; /* White text color */
    text-align: center; /* Centered text */
    border-radius: 2px; /* Rounded borders */
    padding: 16px; /* Padding */
    z-index: 5; /* Add a z-index if needed */
  }

  @media screen and (min-width: 641px) {
    #snackbar {
      top: 30px;
      position: fixed;
    }
  }

  .success {
    background-color: $secondary; /* Purple background color */
  }

  .failure {
    background-color: #b60000; /* Red background color */
  }

  /* Show the snackbar when clicking on a button (class added with JavaScript) */
  #snackbar.show {
    visibility: visible; /* Show the snackbar */
  }

  // TABLET
  /* Animations to fade the snackbar in and out */
  @media screen and (min-width: 641px) {

    #snackbar.show {
      -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
      animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }

    @-webkit-keyframes fadein {
      from {
        top: 0;
        opacity: 0;
      }
      to {
        top: 30px;
        opacity: 1;
      }
    }

    @keyframes fadein {
      from {
        top: 0;
        opacity: 0;
      }
      to {
        top: 30px;
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeout {
      from {
        top: 30px;
        opacity: 1;
      }
      to {
        top: 0;
        opacity: 0;
      }
    }

    @keyframes fadeout {
      from {
        top: 30px;
        opacity: 1;
      }
      to {
        top: 0;
        opacity: 0;
      }
    }
  }

  // MOBILE
  @media screen and (max-width: 640px) {

    #snackbar.show {
      -webkit-animation: fadein 0.0s, fadeout 0.5s 2.5s;
      animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }

    @-webkit-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeout {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    @keyframes fadeout {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
</style>
