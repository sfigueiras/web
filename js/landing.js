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


var myCallBack = function(){

  var cbJoinUs = function(){
    document.getElementById('f_joinus').submit();
  }

  var cbContact = function(){
    document.getElementById('f_contact').submit();
  }

  grecaptcha.render('r_contact', {
    'sitekey' : '6LdUlB8UAAAAAIluAGKDFauY9hWJgjpwA7qFtjAf',
    'badge' : 'inline',
    'callback' : cbContact
  });
  grecaptcha.render('r_joinus', {
    'sitekey' : '6LdUlB8UAAAAAIluAGKDFauY9hWJgjpwA7qFtjAf',
    'badge' : 'inline',
    'callback' : cbJoinUs
  });
}
