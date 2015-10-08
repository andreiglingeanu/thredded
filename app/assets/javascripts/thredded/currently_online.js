'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function ($) {
  var COMPONENT_SELECTOR = '[data-thredded-currently-online]';

  var ThreddedCurrentlyOnline = (function () {
    function ThreddedCurrentlyOnline() {
      _classCallCheck(this, ThreddedCurrentlyOnline);
    }

    _createClass(ThreddedCurrentlyOnline, [{
      key: 'init',
      value: function init($nodes) {
        $($nodes).on('mouseenter', function (e) {
          $(this).addClass('is-expanded');
        }).on('mouseleave', function (e) {
          $(this).removeClass('is-expanded');
        }).on('touchstart', function (e) {
          $(this).toggleClass('is-expanded');
        });
      }
    }]);

    return ThreddedCurrentlyOnline;
  })();

  $(function () {
    var $nodes = $(COMPONENT_SELECTOR);
    if ($nodes.length) {
      new ThreddedCurrentlyOnline().init($nodes);
    }
  });
})(jQuery);
