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
})({"C:/Users/T/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/T/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/T/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"reset.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/T/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "/*\n*\u73B0\u5728\u5F00\u59CB\u6765\u753B\u4E00\u53EA\u53EF\u7231\u7684\u76AE\u5361\u4E18\n*\u9996\u5148\u753B\u76AE\u5361\u4E18\u7684\u76AE\n*/\n#view {\n  background: #ffe600;\n}\n\n.skin {\n  position: relative;\n  top: -90px;\n}\n\n/*\n*\u63A5\u4E0B\u6765\u753B\u76AE\u5361\u4E18\u7684\u9F3B\u5B50\n*/\n.nose {\n  position: relative;\n  top: 260px;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: 10px solid;\n  border-color: black transparent transparent;\n  margin-left: -10px;\n}\n\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(25deg);\n  }\n  66% {\n    transform: rotate(-25deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n.nose:hover {\n  transform-origin: 50% 50%;\n  animation: wave 0.3s infinite linear;\n}\n\n.wrapper {\n  width: 20px;\n  height: 5px;\n  overflow: hidden;\n  position: absolute;\n  top: -15px;\n  left: -10px;\n}\n\n.shan {\n  width: 20px;\n  height: 10px;\n  background-color: black;\n  border-radius: 50%;\n}\n\n/*\n*\u63A5\u4E0B\u6765\u753B\u76AE\u5361\u4E18\u7684\u773C\u775B\n*/\n.eye {\n  width: 63px;\n  height: 63px;\n  position: absolute;\n  top: 220px;\n  border: 3px solid #000;\n  left: 50%;\n  margin-left: -32px;\n  background-color: #2e2e2e;\n  border-radius: 50%;\n}\n\n.eye:before {\n  content: \"\";\n  border: 3px solid black;\n  border-radius: 50%;\n  background-color: #fff;\n  width: 25px;\n  height: 25px;\n  display: block;\n  position: absolute;\n  left: 8px;\n  top: -2px;\n}\n\n.eye.left {\n  transform: translateX(-120px);\n}\n\n.eye.right {\n  transform: translateX(120px);\n}\n\n/*\n*\u63A5\u4E0B\u6765\u753B\u76AE\u5361\u4E18\u7684\u5634\u5DF4\n*/\n.mouth {\n  width: 200px;\n  height: 200px;\n  position: relative;\n  left: 50%;\n  top: 265px;\n  margin-left: -100px;\n}\n\n.up .lip {\n  width: 83px;\n  height: 25px;\n  border: 3px solid #000;\n  background-color: #ffe600;\n  position: absolute;\n  z-index: 2;\n}\n\n.up .lip.left {\n  left: 16px;\n  border-top: #ffe600;\n  border-right: #ffe600;\n  border-bottom-left-radius: 60px 30px;\n  transform: rotate(-20deg);\n}\n\n.up .lip.right {\n  right: 16px;\n  border-top: #ffe600;\n  border-left: #ffe600;\n  transform: rotate(20deg);\n  border-bottom-right-radius: 60px 30px;\n}\n\n/*\n*\u63A5\u4E0B\u6765\u753B\u76AE\u5361\u4E18\u7684\u820C\u5934\n*/\n.down {\n  width: 228px;\n  height: 160px;\n  position: absolute;\n  left: 50%;\n  top: 10px;\n  margin-left: -114px;\n  overflow: hidden;\n}\n\n.down .big {\n  width: 140px;\n  height: 800px;\n  border: 4px solid black;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  margin-left: -70px;\n  border-radius: 100px/360px;\n  background-color: #ff485f;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.down .big .small {\n  width: 130px;\n  height: 100px;\n  position: absolute;\n  left: 50%;\n  bottom: 20px;\n  margin-left: -65px;\n  border-top-left-radius: 50%;\n  border-top-right-radius: 50%;\n  box-shadow: 0 -50px 0 #9b000a;\n  z-index: 2;\n}\n\n/*\n*\u63A5\u4E0B\u6765\u753B\u76AE\u5361\u4E18\u7684\u8138\n*/\n.face {\n  width: 88px;\n  height: 88px;\n  border: 3px solid black;\n  background-color: #f00;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.face.left {\n  left: 50%;\n  top: 330px;\n  margin-left: -44px;\n  transform: translateX(-160px);\n}\n\n.face > img {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n}\n\n.face.left > img {\n  transform: rotateY(180deg);\n  transform-origin: top left;\n}\n\n.face.right {\n  left: 50%;\n  top: 330px;\n  margin-left: -44px;\n  transform: translateX(160px);\n}\n\n/*\n*\u6700\u540E\u8BA9\u53EF\u7231\u7684\u76AE\u5361\u4E18\u7728\u7728\u773C\n*/\n.eye:after {\n  position: absolute;\n  top: -90px;\n  left: -6px;\n  content: \"\";\n  display: block;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background: #ffe600;\n}\n\n@keyframes x {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(70px);\n  }\n}\n\n.eye:after {\n  animation: x 2s infinite alternate ease-out;\n}\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
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
        (function () {
          var value = player.events[key];

          document.querySelector(key).onclick = function (e) {
            player.click(e);
            player[value]();
          };
        })();
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
  },
  click: function click(e) {
    var buttonList = e.target.parentElement.children;

    for (var i = 0; i < buttonList.length; i++) {
      buttonList[i].classList.remove('active');
    }

    e.target.classList.add('active');
  }
};
player.init();
},{"./reset.css":"reset.css","./css":"css.js"}],"C:/Users/T/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62930" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/T/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map