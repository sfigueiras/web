var mq = window.matchMedia( "(min-width: 641px)" );
    
if (mq.matches) {
  var parallax = new Parallax([
    {
      offset: -0.4,
      selector: '#parallax'
    },
    {
      offset: -0.2,
      selector: '#wave'
    }
  ]);

  document.addEventListener("DOMContentLoaded", parallax.onScroll.bind(parallax), false);
  document.addEventListener("DOMContentLoaded", function() {
    var carousel = $("#scrolling ul");
    carousel.itemslide();

    carousel.css({ opacity: 1 });
  }, false);
} else {
  function toggleOfferDescription(element) {
    element.parentElement.parentElement.classList.toggle('extended')
  }
}
