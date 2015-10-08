'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function ($) {
  var COMPONENT_SELECTOR = '[data-thredded-post-form]';

  var ThreddedPostForm = (function () {
    function ThreddedPostForm() {
      _classCallCheck(this, ThreddedPostForm);

      this.textareaSelector = 'textarea';
    }

    _createClass(ThreddedPostForm, [{
      key: 'init',
      value: function init($nodes) {
        $nodes.find(this.textareaSelector).autosize();
      }
    }]);

    return ThreddedPostForm;
  })();

  $(function () {
    var $nodes = $(COMPONENT_SELECTOR);
    if ($nodes.length) {
      new ThreddedPostForm().init($nodes);
    }
  });
})(jQuery);
