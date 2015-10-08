'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function ($) {
  var COMPONENT_SELECTOR = '[data-thredded-topic-form]';

  var ThreddedTopicForm = (function () {
    function ThreddedTopicForm() {
      _classCallCheck(this, ThreddedTopicForm);

      this.titleSelector = '[data-thredded-topic-form-title]';
      this.compactSelector = 'form.is-compact';
      this.expandedSelector = 'form.is-expanded';
      this.escapeElements = 'input, textarea';
      this.escapeKeyCode = 27;
    }

    _createClass(ThreddedTopicForm, [{
      key: 'toggleExpanded',
      value: function toggleExpanded(child, expanded) {
        jQuery(child).closest(expanded ? this.compactSelector : this.expandedSelector).toggleClass('is-compact is-expanded');
      }
    }, {
      key: 'init',
      value: function init($nodes) {
        var _this = this;

        $nodes.filter(this.compactSelector).on('focus', this.titleSelector, function (e) {
          _this.toggleExpanded(e.target, true);
        }).on('keydown', this.escapeElements, function (e) {
          if (e.keyCode == _this.escapeKeyCode) {
            _this.toggleExpanded(e.target, false);
            e.target.blur();
          }
        }).on('blur', this.escapeElements, function (e) {
          var blurredEl = e.target;
          $(document.body).one('mouseup touchend', function (e) {
            var $blurredElForm = $(blurredEl).closest('form');
            // Un-expand if the new focus element is outside of the same form and
            // all the input elements are empty.
            if (!$(e.target).closest('form').is($blurredElForm) && $blurredElForm.find(_this.escapeElements).is(function () {
              return !this.value;
            })) {
              _this.toggleExpanded(blurredEl, false);
            }
          });
        });
      }
    }]);

    return ThreddedTopicForm;
  })();

  $(function () {
    var $nodes = $(COMPONENT_SELECTOR);
    if ($nodes.length) {
      new ThreddedTopicForm().init($nodes);
    }
  });
})(jQuery);
