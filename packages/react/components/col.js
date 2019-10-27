function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __reactComponentDispatchEvent from '../runtime-helpers/react-component-dispatch-event.js';
import __reactComponentSlots from '../runtime-helpers/react-component-slots.js';
import __reactComponentSetProps from '../runtime-helpers/react-component-set-props.js';

var F7Col =
/*#__PURE__*/
function (_React$Component) {
  _inherits(F7Col, _React$Component);

  function F7Col(props, context) {
    var _this;

    _classCallCheck(this, F7Col);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(F7Col).call(this, props, context));
    _this.__reactRefs = {};

    (function () {
      Utils.bindMethods(_assertThisInitialized(_this), ['onClick', 'onResize']);
    })();

    return _this;
  }

  _createClass(F7Col, [{
    key: "onClick",
    value: function onClick(event) {
      this.dispatchEvent('click', event);
    }
  }, {
    key: "onResize",
    value: function onResize(el) {
      if (el === this.eventTargetEl) {
        this.dispatchEvent('grid:resize gridResize');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _Utils$classNames,
          _this2 = this;

      var self = this;
      var props = self.props;
      var className = props.className,
          id = props.id,
          style = props.style,
          tag = props.tag,
          width = props.width,
          xsmall = props.xsmall,
          small = props.small,
          medium = props.medium,
          large = props.large,
          xlarge = props.xlarge,
          resizable = props.resizable,
          resizableFixed = props.resizableFixed,
          resizableAbsolute = props.resizableAbsolute,
          resizableHandler = props.resizableHandler;
      var ColTag = tag;
      var classes = Utils.classNames(className, (_Utils$classNames = {
        col: width === 'auto'
      }, _defineProperty(_Utils$classNames, "col-".concat(width), width !== 'auto'), _defineProperty(_Utils$classNames, "xsmall-".concat(xsmall), xsmall), _defineProperty(_Utils$classNames, "small-".concat(small), small), _defineProperty(_Utils$classNames, "medium-".concat(medium), medium), _defineProperty(_Utils$classNames, "large-".concat(large), large), _defineProperty(_Utils$classNames, "xlarge-".concat(xlarge), xlarge), _defineProperty(_Utils$classNames, "resizable", resizable), _defineProperty(_Utils$classNames, 'resizable-fixed', resizableFixed), _defineProperty(_Utils$classNames, 'resizable-absolute', resizableAbsolute), _Utils$classNames), Mixins.colorClasses(props));
      return React.createElement(ColTag, {
        id: id,
        style: style,
        className: classes,
        ref: function ref(__reactNode) {
          _this2.__reactRefs['el'] = __reactNode;
        }
      }, this.slots['default'], resizable && resizableHandler && React.createElement('span', {
        className: 'resize-handler'
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var self = this;
      var el = self.refs.el;
      if (!el || !self.$f7) return;
      el.removeEventListener('click', self.onClick);
      self.$f7.off('gridResize', self.onResize);
      delete self.eventTargetEl;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;
      self.eventTargetEl = self.refs.el;
      self.eventTargetEl.addEventListener('click', self.onClick);
      self.$f7ready(function (f7) {
        f7.on('gridResize', self.onResize);
      });
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(events) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return __reactComponentDispatchEvent.apply(void 0, [this, events].concat(args));
    }
  }, {
    key: "slots",
    get: function get() {
      return __reactComponentSlots(this.props);
    }
  }, {
    key: "refs",
    get: function get() {
      return this.__reactRefs;
    },
    set: function set(refs) {}
  }]);

  return F7Col;
}(React.Component);

__reactComponentSetProps(F7Col, Object.assign({
  id: [String, Number],
  className: String,
  style: Object,
  tag: {
    type: String,
    default: 'div'
  },
  width: {
    type: [Number, String],
    default: 'auto'
  },
  xsmall: {
    type: [Number, String]
  },
  small: {
    type: [Number, String]
  },
  medium: {
    type: [Number, String]
  },
  large: {
    type: [Number, String]
  },
  xlarge: {
    type: [Number, String]
  },
  resizable: Boolean,
  resizableFixed: Boolean,
  resizableAbsolute: Boolean,
  resizableHandler: {
    type: Boolean,
    default: true
  }
}, Mixins.colorProps));

F7Col.displayName = 'f7-col';
export default F7Col;