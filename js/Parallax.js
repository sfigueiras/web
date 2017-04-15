(function(window) {
  var xScrollPosition;
  var yScrollPosition;
  
  function Parallax(targets) {
    this.targets = targets;
  }

  Parallax.prototype.onScroll = function(event) {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    this.targets.forEach(function(target) {
      setTranslate(0, yScrollPosition * target.offset, 
        document.querySelector(target.selector));
    });

    requestAnimationFrame(this.onScroll.bind(this));
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
  }

  window.Parallax = Parallax;
})(window);
