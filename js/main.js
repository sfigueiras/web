window.onload = function () {
  console.info('Changed landing height to: ', window.innerHeight);
  // document.getElementById('landing').style.height = (window.innerHeight > 600 ? 600 : window.innerHeight) + "px";
}

document.addEventListener("DOMContentLoaded", ready, false);

  // Media query for tablet
  var mq = window.matchMedia("(min-width: 641px)");
  
  // var navigation = document.querySelector('.controls');
  var navigation = document.querySelector('.nav');
  
  if (!mq.matches) {
    var mobileNav = document.getElementById('nav-mobile');
  }
  
  var intersector = document.querySelector('#intersection');
  var overlay = document.querySelector('.overlay');
  var body = document.querySelector('body');
  var ubykuoCaret = document.getElementById('logo'); 

  var lastScrollTop;

  function ready() {
    lastScrollTop = scrollTop();
    
    // Bind events for all devices
    document.addEventListener('scroll', trackEnd, false);

    // Bind events for tablet
    if (mq.matches) {
      document.addEventListener('scroll', changeBurguerColor, true);
      return;
    }

    // Bind events for mobile
    document.addEventListener('scroll', navDisplayer, false);    
  }

  /***************************************
  TRACK WITH END
  ***************************************/

  function trackEnd() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
       ubykuoCaret.style.animationName = 'floatingCaretUp';
    }
  } 
  
  var mobileNavVisible = false;

  /***************************************
  SHOW THE NAV
  ***************************************/
  function navDisplayer() {
    var st = scrollTop();

    if (st < lastScrollTop) {    
      if (!mobileNavVisible) {
        mobileNav.classList.add('show');
        mobileNavVisible = true;
      }

      var navIntersector = document.getElementById('mobile-nav-hide');
      if (_isElementInViewport(navIntersector.getBoundingClientRect())) {
        if (mobileNavVisible) {
          mobileNav.classList.remove('show');
        }
      }
      
    } else {
      if (mobileNavVisible) {
        mobileNav.classList.remove('show');
        mobileNavVisible = false;
      }
    }

    lastScrollTop = st;
  }

  /***************************************
  GET THE SCROLL TOP POSITION 
  ***************************************/
  function scrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  /***************************************
  DISPLAY THE NAVIGATION OVERLAY
  ***************************************/
  function toggleNav() {
    overlay.classList.toggle('visible');
  }

  var intersectionPassed = false;

  changeBurguerColor();

  /***************************************
  TRACK WITH END
  ***************************************/
  function changeBurguerColor() {
    var el = intersector;
    var rect = el.getBoundingClientRect();

    var st = window.pageYOffset || document.documentElement.scrollTop;

    var downClass, upClass;

    if (_isElementInViewport(rect)) {
      if (mq.matches) {
        upClass = el.dataset.tabletUpClass;
        downClass = el.dataset.tabletDownClass;
      }

      if (st > lastScrollTop) {
        navigation.classList.remove(upClass);
        navigation.classList.add(downClass);
      } else {
        navigation.classList.remove(downClass);
        navigation.classList.add(upClass);
      }
      lastScrollTop = st;

      return;
    }
  }

  function _isElementInViewport(rect) {
    return rect.top >= 0 && rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }
