/*
Copyright 2016 Google Inc. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
// TODO: rootMargin are completely ignored for now
(function(scope) {
  if('IntersectionObserver' in window) {
    return;
  }

  var POLL_INTERVAL = 100;

  // Constructor
  var IntersectionObserver = function(callback, options) {
    options = options || {};

    if(!(callback instanceof Function)) {
      throw('callback needs to be a function');
    }

    if(options.root && !(options.root instanceof HTMLElement)) {
      throw('Root needs to be an HTMLElement');
    }

    this._callback = callback;
    this._root = options.root || null;
    this._rootMargin = options.rootMargin || [0, 0, 0, 0];
    this._thresholds = options.threshold || [0];
    this._init();
  };

  IntersectionObserver.prototype = {
    //
    // Public API
    //
    get root() {
      return this._root || document;
    },

    get rootMargin() {
      return '0';
    },

    get thresholds() {
      if(this._thresholds instanceof Array) {
        return this._thresholds;
      }
      return [this._thresholds];
    },

    observe: function(target) {
      if(this._observationTargets.has(target)) {
        return;
      }
      if(!(target instanceof HTMLElement)) {
        throw('Target needs to be an HTMLelement');
      }

      var root = this.root;
      var ancestor = target.parentNode;
      if(!root.contains(target)) {
        throw('Target must be descendant of root');
      }
      this._mutationObserver.observe(target.parentNode, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
      this._observationTargets.set(target, {});
      this._update();
    },

    unobserve: function(target) {
      this._observationTargets.delete(target);
    },

    disconnect: function() {
      this._observationTargets.clear();
      this.root.removeEventListener('scroll', this._boundUpdate);
      scope.removeEventListener('resize', this._boundUpdate);
      this._mutationObserver.disconnect();
      this._descheduleCallback();
    },

    takeRecords: function() {
      this._update();
      this._descheduleCallback();
      var copy = this._queue.slice();
      this._queue = [];
      return copy;
    },

    //
    // Private API
    //
    _init: function() {
      this._observationTargets = new Map();
      this._boundUpdate = throttle(this._update.bind(this), POLL_INTERVAL);
      this.root.addEventListener('scroll', this._boundUpdate);
      scope.addEventListener('resize', this._boundUpdate);
      this._mutationObserver = new MutationObserver(this._boundUpdate);
      this._mutationObserver.observe(this.root, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
      this._queue = [];
    },

    _update: function() {
      var rootRect = this._rootRect();
      this._observationTargets.forEach(function(oldIntersectionEntry, target) {
        var targetRect = getBoundingClientRect(target);
        var intersectionRect = intersectRects(rootRect, targetRect);
        if(!intersectionRect) {
          return;
        }
        var targetArea = targetRect.width * targetRect.height;
        var intersectionArea = intersectionRect.width * intersectionRect.height;
        var intersectionRatio = intersectionArea / targetArea;
        if(!this._hasCrossedThreshold(oldIntersectionEntry.intersectionRatio || 0, intersectionRatio)) {
          return;
        }
        console.info('intersect');
        var intersectionEntry = {
          time: scope.performance.now(),
          rootBounds: rootRect,
          boundingClientRect: targetRect,
          intersectionRect: intersectionRect,
          intersectionRatio: intersectionRatio,
          target: target
        };
        Object.freeze(intersectionEntry);
        this._queue.push(intersectionEntry);
        this._scheduleCallback();
        this._observationTargets.set(target, intersectionEntry);
      }.bind(this));
    },

    _scheduleCallback: function() {
      if(this._timeoutId) {
        return;
      }
      this._timeoutId = scope.setTimeout(function() {
        this._descheduleCallback();
        this._callback(this._queue, this);
        this._queue = [];
      }.bind(this), POLL_INTERVAL);
    },

    _descheduleCallback: function() {
      if(!this._timeoutId) {
        return;
      }
      scope.clearTimeout(this._timeoutId);
      this._timeoutId = null;
    },

    _rootRect: function() {
      if(this._root) {
        return getBoundingClientRect(this.root);
      }
      return {
        top: 0,
        left: 0,
        right: scope.innerWidth,
        width: scope.innerWidth,
        bottom: scope.innerHeight,
        height: scope.innerHeight
      };
    },

    _hasCrossedThreshold: function(oldRatio, newRatio) {
      if(oldRatio === newRatio) {
        return;
      }
      var isOnBoundary = this.thresholds.map(function(threshold) {
        return threshold == newRatio;
      }).indexOf(true) !== -1;

      var b1 = this.thresholds.map(function(threshold) {
        return threshold < oldRatio;
      });
      var b2 = this.thresholds.map(function(threshold) {
        return threshold < newRatio;
      });
      var hasCrossedThreshold = b1.map(function(_, idx) {
        return b1[idx] !== b2[idx]
      }).indexOf(true) !== -1;
      return isOnBoundary || hasCrossedThreshold;
    }
  };

  var intersectRects = function(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var intersectionRect = {
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      width: right - left,
      height: bottom - top
    };
    if(top > bottom) {
      intersectionRect.height = 0;
    }
    if(left > right) {
      intersectionRect.width = 0;
    }
    return intersectionRect;
  };

  scope.IntersectionObserver = IntersectionObserver;

  var throttle = function(fn, int) {
    var timer = null;
    return function () {
      if (timer) {
        return;
      }
      timer = setTimeout(function () {
        fn.apply(this, arguments);
        timer = null;
      }.bind(this), int);
    };
  };

  var getBoundingClientRect = function(el) {
    var r = el.getBoundingClientRect();
    if(!r) {
      return null;
    }
    // Older IE
    r.width = r.width || r.right - r.left;
    r.height = r.height || r.bottom - r.top;
    return r;
  };
})(this);
// (function(_win) {
//     'use strict';

//     if ('IntersectionObserver' in _win) {
//         return;
//     }

//     /**
//      * IntersectionObserver polyfill (c) 2016 @jeremenichelli | Licensed MIT
//      */
//     var viewportH = _win.innerHeight,
//         nowOffset = Date.now();

//     // error headers
//     var constructError = 'Failed to construct \'Intersection\': ',
//         observeError = 'Failed to execute \'observe\': ',
//         unobserveError = 'Failed to execute \'unobserve\': ';

//     // requestAnimationFrame alias
//     var rAF = _win.requestAnimationFrame;

//     /**
//      * Returns current time
//      * @method now
//      * @returns {Number} Execution time
//      */
//     var now = function() {
//         return _win.performance && _win.performance.now ? performance.now() : Date.now() - nowOffset;
//     };

//     /*
//      * Observer constructor
//      * @constructor IntersectionObserver
//      * @param {Function} callback
//      * @param {Object} options
//      */
//     var IntersectionObserver = function(callback, options) {
//         var that = this;

//         // throw error if callback is not a funciton
//         if (typeof callback !== 'function') {
//             throw new TypeError(constructError + 'The callback provided as parameter 1 is not a function');
//         }

//         this.root = options.root || null;
//         this.threshold = options.threshold || [0];

//         // accept number as threshold option
//         if (typeof this.threshold === 'number') {
//             this.threshold = [ this.threshold ];
//         }

//         // throw error when threshold value is out of range
//         if (this.threshold[0] > 1 || this.threshold[0] < 0) {
//             throw new RangeError(constructError + 'Threshold values must be between 0 and 1');
//         }

//         // create array for observable elements
//         var elements = [];

//         // debounce frame call
//         var ticking = false;

//         // trigger actions when elements become visible
//         function trigger(target) {
//             var arr = target ? [ target ] : elements,
//                 count = arr.length,
//                 changes = [],
//                 el,
//                 rect;

//             while (count) {
//                 --count;

//                 el = arr[ count ];
//                 rect = el.getBoundingClientRect();

//                 if (rect.top < viewportH && rect.top >= -rect.height) {
//                     changes.push({
//                         boundingClientRect: rect,
//                         target: el,
//                         time: now()
//                     });
//                 }
//             }

//             // execute callback with array of changes and reference to the observer
//             callback.apply(that, [changes, that]);

//             // clean variables to prevent memory leaks
//             arr = count = changes = el = rect = null;

//             // reset ticking
//             ticking = false;
//         }

//         function debounceTrigger() {
//             if (!ticking) {
//                 rAF(trigger.bind(_win, null));
//             }
//             ticking = true;
//         }

//         // add element to array of observable elements
//         this.observe = function(target) {
//             if (target instanceof _win.Element) {
//                 // reincorporate scroll listener if array is empty
//                 if (elements.length === 0) {
//                     _win.addEventListener('scroll', debounceTrigger);
//                 }

//                 elements.push(target);

//                 // trigger in case element is already visible
//                   trigger(target);
//             } else {
//                 throw new TypeError(observeError + 'parameter 1 is not of type \'Element\'');
//             }
//         };

//         // remove element from array of observable elements
//         this.unobserve = function(target) {
//             if (target instanceof _win.Element) {
//                 var index = elements.indexOf(target);

//                 if (index !== -1) {
//                     elements.splice(index, 1);
//                 }

//                 // remove scroll listener array is empty
//                 if (elements.length === 0) {
//                     _win.removeEventListener('scroll', debounceTrigger);
//                 }
//             } else {
//                 throw new TypeError(unobserveError + 'parameter 1 is not of type \'Element\'');
//             }
//         };

//         // stop observing
//         this.disconnect = function() {
//             _win.removeEventListener('scroll', debounceTrigger);
//         };
//     };

//     // update viewport metrics
//     _win.addEventListener('resize', function() {
//         viewportH = _win.innerHeight;
//     });

//     // expose constructor globally
//     _win.IntersectionObserver = IntersectionObserver;

// })(window);
