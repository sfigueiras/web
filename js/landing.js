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

  var carousel = $("#scrolling ul");
  carousel.itemslide({
    start: 1,
  });

  carousel.css({ opacity: 1 });
  
} else {
  function toggleOfferDescription(element) {
    element.parentElement.parentElement.classList.toggle('extended')
  }
}
