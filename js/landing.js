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
  
  // Disabled temporarily
  // document.addEventListener("DOMContentLoaded", function() {
  //   var carousel = $("#scrolling ul");
  //   carousel.itemslide();

  //   carousel.css({ opacity: 1 });
  // }, false);

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

// var req = new XMLHttpRequest();
// req.open('GET', 'videos/landing.mp4', true);
// req.responseType = 'blob';

// req.onload = function() {
//    // Onload is triggered even on 404
//    // so we need to check the status code
//    if (this.status === 200) {
//       var videoBlob = this.response;
//       var vid = URL.createObjectURL(videoBlob); // IE10+
//       // Video is now downloaded
//       // and we can set it as source on the video element
//       document.getElementById('video').src = vid;
//    }
// }
// req.onerror = function() {
//    // Error
// }

// req.send();
