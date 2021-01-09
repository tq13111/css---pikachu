// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"AQoi":[function(require,module,exports) {

},{}],"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "body {\n  height: 100vh;\n}\n\n.skin {\n  position: relative;\n  top: -90px;\n}\n\n.nose {\n  position: relative;\n  border: 10px solid;\n  border-color: black transparent transparent;\n  width: 0;\n  height: 0;\n  top: 260px;\n  left: 50%;\n  margin-left: -10px;\n}\n\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(25deg);\n  }\n  66% {\n    transform: rotate(-25deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n.nose:hover {\n  transform-origin: 50% 50%;\n  animation: wave 0.3s infinite linear;\n}\n\n.wrapper {\n  width: 20px;\n  height: 5px;\n  overflow: hidden;\n  position: absolute;\n  top: -15px;\n  left: -10px;\n}\n\n.shan {\n  width: 20px;\n  height: 10px;\n  background-color: black;\n  border-radius: 50%;\n}\n\n.eye {\n  width: 63px;\n  height: 63px;\n  position: absolute;\n  top: 220px;\n  border: 3px solid #000;\n  left: 50%;\n  margin-left: -32px;\n  background-color: #2e2e2e;\n  border-radius: 50%;\n}\n\n.eye:before {\n  content: \"\";\n  border: 3px solid black;\n  border-radius: 50%;\n  background-color: #fff;\n  width: 25px;\n  height: 25px;\n  display: block;\n  position: absolute;\n  left: 8px;\n  top: -2px;\n}\n\n@keyframes x {\n  0% {\n    transform: translateY(-120px);\n  }\n  100% {\n    transform: translateY(-15px);\n  }\n}\n\n.eye:after {\n  content: \"\";\n  display: block;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  position: absolute;\n  background: rgb(255, 230, 0);\n  top: -4px;\n  left: -4px;\n  animation: x 2s infinite alternate ease-out;\n}\n\n.eye.left {\n  transform: translateX(-120px);\n}\n\n.eye.right {\n  transform: translateX(120px);\n}\n\n.mouth {\n  width: 200px;\n  height: 200px;\n  position: relative;\n  left: 50%;\n  top: 265px;\n  margin-left: -100px;\n}\n\n.up .lip {\n  width: 83px;\n  height: 25px;\n  border: 3px solid #000;\n  background-color: #ffe600;\n  position: absolute;\n  z-index: 2;\n}\n\n.up .lip.left {\n  left: 16px;\n  border-top: #ffe600;\n  border-right: #ffe600;\n  border-bottom-left-radius: 60px 30px;\n  transform: rotate(-20deg);\n}\n\n.up .lip.right {\n  right: 16px;\n  border-top: #ffe600;\n  border-left: #ffe600;\n  transform: rotate(20deg);\n  border-bottom-right-radius: 60px 30px;\n}\n\n.down {\n  width: 228px;\n  height: 160px;\n  position: absolute;\n  left: 50%;\n  top: 10px;\n  margin-left: -114px;\n  overflow: hidden;\n}\n\n.down .big {\n  width: 140px;\n  height: 800px;\n  border: 4px solid black;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  margin-left: -70px;\n  border-radius: 100px/360px;\n  background-color: #ff485f;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.down .big .small {\n  width: 130px;\n  height: 100px;\n  position: absolute;\n  left: 50%;\n  bottom: 20px;\n  margin-left: -65px;\n  border-top-left-radius: 50%;\n  border-top-right-radius: 50%;\n  box-shadow: 0 -50px 0 #9b000a;\n  z-index: 2;\n}\n\n.face {\n  width: 88px;\n  height: 88px;\n  border: 3px solid black;\n  background-color: #f00;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.face.left {\n  left: 50%;\n  top: 330px;\n  margin-left: -44px;\n  transform: translateX(-160px);\n}\n\n.face > img {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n}\n\n.face.left > img {\n  transform: rotateY(180deg);\n  transform-origin: top left;\n}\n\n.face.right {\n  left: 50%;\n  top: 330px;\n  margin-left: -44px;\n  transform: translateX(160px);\n}\n\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

require("./reset.css");

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  id: undefined,
  delay: 60,
  ui: {
    html: document.querySelector("#html"),
    css: document.querySelector("#css")
  },
  events: {
    "#pauseBtn": "pause",
    "#playBtn": "play",
    "#slowBtn": "slow",
    "#normalBtn": "normal",
    "#quickBtn": "quick"
  },
  init: function init() {
    player.ui.css.innerHTML = _css.default.substring(0, player.n);
    player.ui.html.innerText = _css.default.substring(0, player.n);
    player.play();
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n++;

    if (_css.default[player.n]) {
      player.ui.css.innerHTML = _css.default.substring(0, player.n);
      player.ui.html.innerText = _css.default.substring(0, player.n);
      player.ui.html.scrollTop = 9999;
      player.play();
    }
  },
  play: function play() {
    player.id = setTimeout(player.run, player.delay);
  },
  pause: function pause() {
    clearTimeout(player.id);
  },
  slow: function slow() {
    player.pause();
    player.delay = 150;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.delay = 60;
    player.play();
  },
  quick: function quick() {
    player.pause();
    player.delay = 0;
    player.play();
  }
};
player.init();
},{"./reset.css":"AQoi","./css":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.0569e491.js.map