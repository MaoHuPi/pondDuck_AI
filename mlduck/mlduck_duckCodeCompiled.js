"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mlIdList = [];

var mlBasic = /*#__PURE__*/function () {
  function mlBasic() {
    _classCallCheck(this, mlBasic);
  }

  _createClass(mlBasic, null, [{
    key: "getArg",
    value: // static idList = [];
    function getArg() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var argName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return argName in args ? args[argName] : defaultValue;
    }
  }, {
    key: "randint",
    value: function randint(a, b) {
      return Math.floor(mlBasic.randfloat(a, b));
    }
  }, {
    key: "randfloat",
    value: function randfloat(a, b) {
      var min = Math.min(a, b);
      var max = Math.max(a, b);
      return min + Math.random() * (max - min);
    }
  }, {
    key: "pick",
    value: function pick(list) {
      return list[mlBasic.randint(0, list.length - 1)];
    }
  }, {
    key: "randid",
    value: function randid() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [[48, 57], [65, 90], [97, 122]];
      // a~b 包含b
      var charCodeList = [];
      var output = undefined;

      var _iterator = _createForOfIteratorHelper(range),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var r = _step.value;

          if (_typeof(r) == 'object' && r.length > 0) {
            var min = Math.min.apply(Math, _toConsumableArray(r));
            var max = Math.max.apply(Math, _toConsumableArray(r));

            for (var charCode = min; charCode <= max; charCode++) {
              charCodeList.push(charCode);
            }
          }
        } // while(output == undefined || (typeof output == 'string' && mlBasic.idList.indexOf(output) > -1)){

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      while (output == undefined || typeof output == 'string' && mlIdList.indexOf(output) > -1) {
        output = [];

        for (var i = 0; i < length; i++) {
          output[i] = mlBasic.pick(charCodeList);
        }

        output = String.fromCharCode.apply(String, _toConsumableArray(output));
      } // mlBasic.idList.push(output);


      mlIdList.push(output);
      return output;
    }
  }, {
    key: "sigmoid",
    value: function sigmoid(x) {
      var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      return 1 / (1 + Math.exp(-x / k));
    }
  }]);

  return mlBasic;
}();

var mlPoint = /*#__PURE__*/function () {
  function mlPoint() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, mlPoint);

    this.id = mlBasic.randid(5);
    this.activation = mlBasic.getArg(args, 'activation', mlBasic.sigmoid);
    this.outputs = mlBasic.getArg(args, 'output', []);
    this.value = mlBasic.getArg(args, 'value', 0);
  }

  _createClass(mlPoint, [{
    key: "send",
    value: function send() {
      this.value = this.activation(this.value);

      var _iterator2 = _createForOfIteratorHelper(this.outputs),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var line = _step2.value;
          line.transportation(this.value);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "connect",
    value: function connect(point) {
      var gate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
      this.outputs.push(new mlLine({
        gate: gate,
        output: point
      }));
    }
  }, {
    key: "pack",
    value: function pack() {
      return {
        id: this.id,
        outputs: this.outputs.map(function (line) {
          return line.pack();
        })
      };
    }
  }]);

  return mlPoint;
}();

var mlLine = /*#__PURE__*/function () {
  function mlLine() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, mlLine);

    this.gate = mlBasic.getArg(args, 'gate', 0.5);
    this.output = mlBasic.getArg(args, 'output', null);
  }

  _createClass(mlLine, [{
    key: "transportation",
    value: function transportation() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.output) {
        this.output.value = value * this.gate;
      }
    }
  }, {
    key: "pack",
    value: function pack() {
      return {
        gate: this.gate,
        output: this.output.id
      };
    }
  }]);

  return mlLine;
}();

var mlModel = /*#__PURE__*/function () {
  function mlModel() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, mlModel);

    this.architecture = mlBasic.getArg(args, 'architecture', [1, 2, 1]);
    this.layers = [];
    this.init(false);
  }

  _createClass(mlModel, [{
    key: "init",
    value: function init() {
      var _this = this;

      var autoConnect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.layers = [];

      for (var layerIndex = 0; layerIndex < this.architecture.length; layerIndex++) {
        this.layers[layerIndex] = this.layers[layerIndex] || [];

        var _loop = function _loop(pointIndex) {
          var pointNow = new mlPoint();
          _this.layers[layerIndex][pointIndex] = pointNow;

          if (autoConnect && layerIndex - 1 > -1) {
            _this.layers[layerIndex - 1].forEach(function (point) {
              // 暫時先全部連接並隨機gate
              point.connect(pointNow, mlBasic.randfloat(0, 1));
            });
          }
        };

        for (var pointIndex = 0; pointIndex < this.architecture[layerIndex]; pointIndex++) {
          _loop(pointIndex);
        }
      }
    }
  }, {
    key: "calculate",
    value: function calculate() {
      for (var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++) {
        inputs[_key] = arguments[_key];
      }

      this.layers[0].map(function (point, i) {
        point.value = inputs.length > i ? inputs[i] : point.value;
      });

      var _iterator3 = _createForOfIteratorHelper(this.layers),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var layer = _step3.value;

          var _iterator4 = _createForOfIteratorHelper(layer),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var point = _step4.value;
              point.send();
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var output = this.layers[this.layers.length - 1].map(function (point) {
        return point.value;
      });
      return output;
    }
  }, {
    key: "pack",
    value: function pack() {
      return {
        layers: this.layers.map(function (layer) {
          return layer.map(function (point) {
            return point.pack();
          });
        })
      };
    }
  }], [{
    key: "load",
    value: function load() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var modle = new mlModel();
      var layers = mlBasic.getArg(data, 'layers', false);

      if (layers) {
        var architecture = layers.map(function (layer) {
          return layer.length;
        });
        modle.architecture = architecture;
        modle.init(false);

        for (var layerIndex = 0; layerIndex < modle.layers.length; layerIndex++) {
          for (var pointIndex = 0; pointIndex < modle.layers[layerIndex].length; pointIndex++) {
            modle.layers[layerIndex][pointIndex].id = layers[layerIndex][pointIndex].id;
          }
        }

        for (var _layerIndex = 0; _layerIndex < modle.layers.length; _layerIndex++) {
          for (var _pointIndex = 0; _pointIndex < modle.layers[_layerIndex].length; _pointIndex++) {
            if (_layerIndex + 1 < modle.layers.length) {
              var point = modle.layers[_layerIndex][_pointIndex];

              var outputsId = layers[_layerIndex][_pointIndex].outputs.map(function (line) {
                return line.output;
              });

              var _iterator5 = _createForOfIteratorHelper(modle.layers[_layerIndex + 1]),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var point2 = _step5.value;
                  var outputIndex = outputsId.indexOf(point2.id);

                  if (outputIndex > -1) {
                    point.connect(point2, layers[_layerIndex][_pointIndex].outputs[outputIndex].gate);
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          }
        }
      }

      return modle;
    }
  }, {
    key: "random",
    value: function random(architecture) {
      var modle = new mlModel({
        architecture: architecture
      });
      modle.init(true);
      return modle;
    }
  }]);

  return mlModel;
}();

var scanDeg = 0;
var swimDeg = 0;
var cannonDeg = 0;
var cannonRange = 0;
var isSwimming = false;
var toCannon = false; // let duck = mlModel.load({"layers":[[{"id":"xWbqr","outputs":[{"gate":0.8780864129646111,"output":"XYPI6"}]},{"id":"W7oLQ","outputs":[{"gate":0.472921669675888,"output":"XYPI6"}]},{"id":"Q56o3","outputs":[{"gate":0.6461417957668862,"output":"XYPI6"}]},{"id":"D4wUy","outputs":[{"gate":0.005683763441956646,"output":"XYPI6"}]},{"id":"flaXl","outputs":[{"gate":0.23625976983412733,"output":"XYPI6"}]},{"id":"vtone","outputs":[{"gate":0.24147474806281366,"output":"XYPI6"}]},{"id":"EhCa7","outputs":[{"gate":0.27750912617211565,"output":"XYPI6"}]},{"id":"qPHn5","outputs":[{"gate":0.2707397041750961,"output":"XYPI6"}]},{"id":"mmPNh","outputs":[{"gate":0.5337863615202196,"output":"XYPI6"}]},{"id":"8MGRS","outputs":[{"gate":0.630139043892366,"output":"XYPI6"}]},{"id":"uJG2G","outputs":[{"gate":0.1299973766752276,"output":"XYPI6"}]}],[{"id":"XYPI6","outputs":[{"gate":0.17233402786778385,"output":"WClEX"},{"gate":0.5852301936854971,"output":"2KDyl"},{"gate":0.29963518281242707,"output":"BM6is"},{"gate":0.680097397543028,"output":"usagN"},{"gate":0.6762739836163905,"output":"UXviJ"},{"gate":0.2268404701703275,"output":"GDZ0H"}]}],[{"id":"WClEX","outputs":[]},{"id":"2KDyl","outputs":[]},{"id":"BM6is","outputs":[]},{"id":"usagN","outputs":[]},{"id":"UXviJ","outputs":[]},{"id":"GDZ0H","outputs":[]}]]});

var duck = new mlModel({
  architecture: [1, 6]
});

while (true) {
  var response = duck.calculate(getX(), getY(), scanDeg, scan(scanDeg), swimDeg, isSwimming, damage(), health(), speed(), cannonDeg, cannonRange);
  scanDeg = Math.floor(response[0] * 360);
  swimDeg = Math.floor(response[1] * 360); // isSwimming = response[2] > 0.5 ? true : false;

  isSwimming = true;
  cannonDeg = Math.floor(response[3] * 360);
  cannonDeg = Math.floor(response[4] * 100);
  toCannon = response[5] > 0.5 ? true : false;
  [1e3, scanDeg, swimDeg, cannonDeg, cannonRange, isSwimming ? 1 : 0, toCannon ? 1 : 0].forEach(function (n) {
    log(n);
  });

  if (isSwimming) {
    swim(swimDeg);
  } else {
    stop();
  }

  log(getX());

  if (toCannon) {
    cannon(cannonDeg, cannonRange);
  }
}