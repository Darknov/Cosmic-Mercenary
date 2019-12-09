/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/entities/Entity.js":
/*!********************************!*\
  !*** ./src/entities/Entity.js ***!
  \********************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Entity\", function() { return Entity; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Entity =\n/*#__PURE__*/\nfunction (_Phaser$GameObjects$C) {\n  _inherits(Entity, _Phaser$GameObjects$C);\n\n  /**\r\n   * Creates entity(object) on the scene\r\n   * @param {Object} config - standard phaser 3 config\r\n   * @param {Phaser.Scene} config.scene - scene that has this object \r\n   * @param {number} config.x - x coordinate on the scene\r\n   * @param {number} config.y - y coordinate on the scene\r\n   * @param {Array} config.children - name of the texture used for rendering this object\r\n   */\n  function Entity(config) {\n    var _this;\n\n    _classCallCheck(this, Entity);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Entity).call(this, config.scene, config.x, config.y, []));\n    config.scene.add.existing(_assertThisInitialized(_this));\n    config.scene.physics.add.existing(_assertThisInitialized(_this));\n\n    _this.scene.gameObjects.push(_assertThisInitialized(_this));\n\n    return _this;\n  }\n\n  return Entity;\n}(Phaser.GameObjects.Container);\n\n//# sourceURL=webpack:///./src/entities/Entity.js?");

/***/ }),

/***/ "./src/entities/Player.js":
/*!********************************!*\
  !*** ./src/entities/Player.js ***!
  \********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ \"./src/entities/Entity.js\");\n/* harmony import */ var _libraries_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libraries/utils */ \"./src/libraries/utils.js\");\n/* harmony import */ var _entities_Shot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/Shot */ \"./src/entities/Shot.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Player =\n/*#__PURE__*/\nfunction (_Entity) {\n  _inherits(Player, _Entity);\n\n  /**\r\n   * Creates player entity\r\n   * @param {Object} config - standard phaser 3 config\r\n   * @param {Phaser.Scene} config.scene - scene that has this object \r\n   * @param {number} config.x - x coordinate on the scene\r\n   * @param {number} config.y - y coordinate on the scene\r\n   */\n  function Player(config) {\n    var _this;\n\n    _classCallCheck(this, Player);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, config));\n\n    _this.buildContainerComponents();\n\n    _this.setProperties();\n\n    _this.rotateToPointer();\n\n    _this.scene.input.on('pointerdown', function (pointer) {\n      _this.shot(pointer);\n    }, _assertThisInitialized(_this));\n\n    _this.droneCircle = new Phaser.Geom.Circle(_this.x, _this.y, 150);\n    _this.drones = new Phaser.GameObjects.Container(_this.scene, _this.x, _this.y);\n\n    _this.scene.add.existing(_this.drones);\n\n    _this.scene.physics.add.existing(_this.drones);\n\n    _this.drones.add(_this.scene.physics.add.sprite(150, 150, 'robot').setAngle(135));\n\n    _this.drones.add(_this.scene.physics.add.sprite(-150, 150, 'robot').setAngle(-135));\n\n    _this.drones.add(_this.scene.physics.add.sprite(150, -150, 'robot').setAngle(45));\n\n    _this.drones.add(_this.scene.physics.add.sprite(-150, -150, 'robot').setAngle(-45)); // Phaser.Actions.PlaceOnCircle(this.drones, this.droneCircle);\n\n\n    return _this;\n  }\n\n  _createClass(Player, [{\n    key: \"update\",\n    value: function update(time, delta) {\n      this.moveToPointer();\n      this.updateDrones(time, delta);\n    }\n  }, {\n    key: \"rotateToPointer\",\n    value: function rotateToPointer() {\n      var _this2 = this;\n\n      var camera = this.scene.cameras.main;\n      this.scene.input.on('pointermove', function (pointer) {\n        Object(_libraries_utils__WEBPACK_IMPORTED_MODULE_1__[\"rotateTo\"])(_this2, pointer, {\n          x: _this2.x - camera.scrollX * _this2.scrollFactorX,\n          y: _this2.y - camera.scrollY * _this2.scrollFactorY\n        }, 90);\n      }, this);\n    }\n  }, {\n    key: \"buildContainerComponents\",\n    value: function buildContainerComponents() {\n      this.ship = this.scene.add.sprite(0, 0, 'player');\n      this.guns = [];\n      this.guns.push(this.scene.physics.add.sprite(-36, 20, 'shot1_asset'));\n      this.guns.push(this.scene.physics.add.sprite(40, 20, 'shot1_asset'));\n      this.guns[0].setAngle(-90);\n      this.guns[1].setAngle(-90);\n      this.exhaust = this.scene.add.sprite(-1, 77, 'exhaust1');\n      this.exhaust.setScale(0.15);\n      this.scene.anims.create({\n        key: 'exhaust',\n        frames: [{\n          key: 'exhaust1'\n        }, {\n          key: 'exhaust2'\n        }, {\n          key: 'exhaust3'\n        }, {\n          key: 'exhaust4'\n        }, {\n          key: 'exhaust5'\n        }, {\n          key: 'exhaust6'\n        }, {\n          key: 'exhaust7'\n        }, {\n          key: 'exhaust8'\n        }, {\n          key: 'exhaust9'\n        }, {\n          key: 'exhaust10'\n        }],\n        frameRate: 10,\n        repeat: -1\n      });\n      this.scene.anims.create({\n        key: 'turbo',\n        frames: [{\n          key: 'exhaust5'\n        }, {\n          key: 'exhaust6'\n        }, {\n          key: 'exhaust7'\n        }, {\n          key: 'exhaust8'\n        }],\n        frameRate: 10,\n        repeat: -1\n      });\n      this.exhaust.play('exhaust');\n      this.add([].concat(_toConsumableArray(this.guns), [this.ship, this.exhaust]));\n    }\n  }, {\n    key: \"setProperties\",\n    value: function setProperties() {\n      this.speed = 2500;\n      this.body.maxSpeed = 500;\n      this.maxPointerDistance = 300;\n      this.body.useDamping = true;\n      this.body.setDrag(0.97); // gives somewhat natural 'feeling' to the ship *imo*\n\n      this.body.setOffset(-35, -35);\n      this.body.setCircle(35);\n    }\n  }, {\n    key: \"getSpeed\",\n    value: function getSpeed(pointer) {\n      var camera = this.scene.cameras.main;\n      var dist = Object(_libraries_utils__WEBPACK_IMPORTED_MODULE_1__[\"distance\"])(this.x, this.y, pointer.x + camera.scrollX * this.scrollFactorX, pointer.y + camera.scrollY * this.scrollFactorY);\n\n      if (dist > this.maxPointerDistance) {\n        dist = this.maxPointerDistance;\n      }\n\n      var speed = this.speed / this.maxPointerDistance * (dist - 50);\n\n      if (speed <= 0) {\n        speed = 0;\n      }\n\n      return speed;\n    }\n  }, {\n    key: \"moveToPointer\",\n    value: function moveToPointer() {\n      var camera = this.scene.cameras.main;\n      var pointer = this.scene.input.mousePointer;\n      this.scene.physics.accelerateToObject(this, {\n        x: pointer.x + camera.scrollX * this.scrollFactorX,\n        y: pointer.y + camera.scrollY * this.scrollFactorY\n      }, this.getSpeed(pointer));\n    }\n  }, {\n    key: \"shot\",\n    value: function shot(pointer) {\n      var _this3 = this;\n\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this.guns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var gun = _step.value;\n          var shot = new _entities_Shot__WEBPACK_IMPORTED_MODULE_2__[\"Shot\"]({\n            scene: this.scene,\n            x: gun.body.center.x,\n            y: gun.body.center.y\n          }, {\n            image: 'Shot3_asset',\n            speed: 1000,\n            angle: this.angle - 90,\n            animationIn: ['Shot3_1', 'Shot3_2', 'Shot3_3', 'Shot3_4', 'Shot3_5', 'Shot3_6']\n          });\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      this.drones.iterate(function (child) {\n        console.log(child);\n        var shot = new _entities_Shot__WEBPACK_IMPORTED_MODULE_2__[\"Shot\"]({\n          scene: _this3.scene,\n          x: child.body.center.x,\n          y: child.body.center.y\n        }, {\n          image: 'shot2_asset',\n          speed: 1000,\n          angle: _this3.angle - 90,\n          animationIn: ['shot2_1', 'shot2_2', 'shot2_3', 'shot2_4', 'shot2_5', 'shot2_6']\n        });\n      });\n    }\n  }, {\n    key: \"updateDrones\",\n    value: function updateDrones(time, delta) {\n      this.drones.body.setVelocity(this.body.velocity.x, this.body.velocity.y);\n      this.drones.setAngle(time / 30);\n      this.drones.iterate(function (child) {// console.log(child.body.center)\n      });\n    }\n  }]);\n\n  return Player;\n}(_Entity__WEBPACK_IMPORTED_MODULE_0__[\"Entity\"]);\n\n//# sourceURL=webpack:///./src/entities/Player.js?");

/***/ }),

/***/ "./src/entities/Shot.js":
/*!******************************!*\
  !*** ./src/entities/Shot.js ***!
  \******************************/
/*! exports provided: Shot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Shot\", function() { return Shot; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ \"./src/entities/Entity.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar Shot =\n/*#__PURE__*/\nfunction (_Entity) {\n  _inherits(Shot, _Entity);\n\n  function Shot(config, shotConfig) {\n    var _this;\n\n    _classCallCheck(this, Shot);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Shot).call(this, config));\n\n    _this.setProperties(_objectSpread({}, config, {}, shotConfig));\n\n    _this.buildContainerComponents(_objectSpread({}, shotConfig));\n\n    return _this;\n  }\n\n  _createClass(Shot, [{\n    key: \"setProperties\",\n    value: function setProperties(_ref) {\n      var x = _ref.x,\n          y = _ref.y,\n          _ref$angle = _ref.angle,\n          angle = _ref$angle === void 0 ? 0 : _ref$angle,\n          _ref$speed = _ref.speed,\n          speed = _ref$speed === void 0 ? 0 : _ref$speed;\n      this.x = x;\n      this.y = y;\n      this.setAngle(angle);\n      this.scene.physics.velocityFromRotation(Phaser.Math.DegToRad(angle), speed, this.body.velocity);\n    }\n  }, {\n    key: \"buildContainerComponents\",\n    value: function buildContainerComponents(_ref2) {\n      var image = _ref2.image,\n          _ref2$animationIn = _ref2.animationIn,\n          animationIn = _ref2$animationIn === void 0 ? [] : _ref2$animationIn,\n          _ref2$animationOut = _ref2.animationOut,\n          animationOut = _ref2$animationOut === void 0 ? [] : _ref2$animationOut;\n      var shot = this.scene.add.sprite(0, 0);\n\n      if (!this.scene.anims.exists(\"\".concat(image, \"_animationIn\"))) {\n        var inFrames = [];\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n          for (var _iterator = animationIn[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var frame = _step.value;\n            inFrames.push({\n              key: frame\n            });\n          }\n        } catch (err) {\n          _didIteratorError = true;\n          _iteratorError = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n              _iterator[\"return\"]();\n            }\n          } finally {\n            if (_didIteratorError) {\n              throw _iteratorError;\n            }\n          }\n        }\n\n        inFrames.push({\n          key: image\n        });\n        this.scene.anims.create({\n          key: \"\".concat(image, \"_animationIn\"),\n          frames: inFrames,\n          frameRate: 30,\n          repeat: 0\n        });\n      }\n\n      if (!this.scene.anims.exists(\"\".concat(image, \"animationOut\"))) {\n        var outFrames = [];\n        var _iteratorNormalCompletion2 = true;\n        var _didIteratorError2 = false;\n        var _iteratorError2 = undefined;\n\n        try {\n          for (var _iterator2 = animationOut[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n            var _frame = _step2.value;\n            outFrames.push({\n              key: _frame\n            });\n          }\n        } catch (err) {\n          _didIteratorError2 = true;\n          _iteratorError2 = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n              _iterator2[\"return\"]();\n            }\n          } finally {\n            if (_didIteratorError2) {\n              throw _iteratorError2;\n            }\n          }\n        }\n\n        this.scene.anims.create({\n          key: \"\".concat(image, \"_animationIn\"),\n          frames: outFrames,\n          frameRate: 10,\n          repeat: 0\n        });\n      }\n\n      shot.play(\"\".concat(image, \"_animationIn\"));\n      this.add(shot);\n    }\n  }]);\n\n  return Shot;\n}(_Entity__WEBPACK_IMPORTED_MODULE_0__[\"Entity\"]);\n\n//# sourceURL=webpack:///./src/entities/Shot.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scenes_demoScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/demoScene */ \"./src/scenes/demoScene.js\");\n\n\nvar gameConfig = {\n  width: window.innerWidth * window.devicePixelRatio,\n  height: window.innerHeight * window.devicePixelRatio,\n  scene: _scenes_demoScene__WEBPACK_IMPORTED_MODULE_1__[\"DemoScene\"],\n  physics: {\n    \"default\": 'arcade',\n    arcade: {\n      debug: false\n    }\n  }\n};\nvar game = new Phaser.Game(gameConfig); // prevent opening context menu with right click\n\ngame.input.mouse.disableContextMenu();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/libraries/utils.js":
/*!********************************!*\
  !*** ./src/libraries/utils.js ***!
  \********************************/
/*! exports provided: abs, getRandomInt, rotateTo, distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"abs\", function() { return abs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomInt\", function() { return getRandomInt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rotateTo\", function() { return rotateTo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"distance\", function() { return distance; });\n/**\r\n * Returns positive number\r\n * @param {number} number\r\n */\nfunction abs(number) {\n  return number > 0 ? number : -number;\n}\n/**\r\n * Returns an integer between <min, max)\r\n * @param {number} min - minimal number to be randomly selected. Inclusive.\r\n * @param {number} max - maximal number to be randomly selected. Exclusive.\r\n */\n\nfunction getRandomInt(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive\n}\n/**\r\n * Rotates given entity to the given position\r\n * @param {Object} entity - Entity that should be rotated\r\n * @param {Object} positionTo - point to which Entity should be rotated\r\n * @param {number} positionTo.x - x coordinate\r\n * @param {number} positionTo.y - y coordinate\r\n * @param {Object} position - position of the entity in case we want to rotate from position different than the entity\r\n * @param {number} position.x - x coordinate of the entity\r\n * @param {number} position.y - y coordinate of the entity\r\n * @param {number} offsetAngle - Offset angle in case image is in different position than expected\r\n */\n\nfunction rotateTo(entity, positionTo) {\n  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {\n    x: entity.x,\n    y: entity.y\n  };\n  var offsetAngle = arguments.length > 3 ? arguments[3] : undefined;\n  var angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(position.x, position.y, positionTo.x, positionTo.y);\n  entity.setAngle(angle + offsetAngle);\n}\n/**\r\n * Returns distance between points\r\n * @param {number} x1 - x coordinate of point 1\r\n * @param {number} y1 - y coordinate of point 1\r\n * @param {number} x2 - x coordinate of point 2\r\n * @param {number} y2 - y coordinate of point 2\r\n */\n\nfunction distance(x1, y1, x2, y2) {\n  var dx = x1 - x2;\n  var dy = y1 - y2;\n  return Math.sqrt(dx * dx + dy * dy);\n}\n\n//# sourceURL=webpack:///./src/libraries/utils.js?");

/***/ }),

/***/ "./src/scenes/demoScene.js":
/*!*********************************!*\
  !*** ./src/scenes/demoScene.js ***!
  \*********************************/
/*! exports provided: DemoScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DemoScene\", function() { return DemoScene; });\n/* harmony import */ var _entities_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/Player */ \"./src/entities/Player.js\");\n/* harmony import */ var _loadingBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadingBar */ \"./src/scenes/loadingBar.js\");\n/* harmony import */ var _libraries_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libraries/utils */ \"./src/libraries/utils.js\");\n/* harmony import */ var _sceneAssets_demoSceneAssets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sceneAssets/demoSceneAssets */ \"./src/scenes/sceneAssets/demoSceneAssets.js\");\n/* harmony import */ var _sceneAssets_loadAssets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sceneAssets/loadAssets */ \"./src/scenes/sceneAssets/loadAssets.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar width = 3000;\nvar height = 3000;\nvar DemoScene =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(DemoScene, _Phaser$Scene);\n\n  function DemoScene(config) {\n    _classCallCheck(this, DemoScene);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(DemoScene).call(this, _objectSpread({}, config, {\n      key: 'DemoScene'\n    })));\n  }\n\n  _createClass(DemoScene, [{\n    key: \"preload\",\n    value: function preload() {\n      Object(_loadingBar__WEBPACK_IMPORTED_MODULE_1__[\"addLoadingBar\"])(this);\n      Object(_sceneAssets_loadAssets__WEBPACK_IMPORTED_MODULE_4__[\"loadAssets\"])(this, _sceneAssets_demoSceneAssets__WEBPACK_IMPORTED_MODULE_3__[\"demoSceneAssets\"]);\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      this.gameObjects = [];\n      setBackground.call(this);\n      populate.call(this);\n      this.cameras.main.setBounds(-width / 2, -height / 2, width, height);\n    }\n  }, {\n    key: \"update\",\n    value: function update(time, delta) {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this.gameObjects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var gameObject = _step.value;\n          gameObject.update(time, delta);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  }]);\n\n  return DemoScene;\n}(Phaser.Scene);\n\nfunction populate() {\n  this.player = new _entities_Player__WEBPACK_IMPORTED_MODULE_0__[\"Player\"]({\n    scene: this,\n    x: 0,\n    y: 0\n  });\n  this.cameras.main.startFollow(this.player);\n} // background tests, looks byatiful\n\n\nfunction setBackground() {\n  this.background = this.add.tileSprite(0, 0, width, height, 'background');\n  var nebula = this.add.image(0, 0, 'el' + Object(_libraries_utils__WEBPACK_IMPORTED_MODULE_2__[\"getRandomInt\"])(7, 11));\n  nebula.setDisplaySize(width, height);\n  nebula.width = width;\n  nebula.height = height;\n\n  for (var i = 0; i < 15; i++) {\n    var el = this.add.image(Object(_libraries_utils__WEBPACK_IMPORTED_MODULE_2__[\"getRandomInt\"])(-width / 2, width / 2), Object(_libraries_utils__WEBPACK_IMPORTED_MODULE_2__[\"getRandomInt\"])(-width / 2, width / 2), 'el' + Object(_libraries_utils__WEBPACK_IMPORTED_MODULE_2__[\"getRandomInt\"])(1, 7));\n    el.setAngle(Object(_libraries_utils__WEBPACK_IMPORTED_MODULE_2__[\"getRandomInt\"])(0, 180));\n    el.scale = Math.random();\n  }\n}\n\n//# sourceURL=webpack:///./src/scenes/demoScene.js?");

/***/ }),

/***/ "./src/scenes/loadingBar.js":
/*!**********************************!*\
  !*** ./src/scenes/loadingBar.js ***!
  \**********************************/
/*! exports provided: addLoadingBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addLoadingBar\", function() { return addLoadingBar; });\n/**\r\n * Adds loading bar for the sceen\r\n * @param {Phaser.Scene} scene - sceen that we are addding loading bar for \r\n */\nfunction addLoadingBar(scene) {\n  var progress = scene.add.graphics();\n  scene.load.on('progress', function (value) {\n    progress.clear();\n    progress.fillStyle(0xffffff, 1);\n    progress.fillRect(0, 270, 800 * value, 60);\n  });\n  scene.load.on('complete', function () {\n    progress.destroy();\n  });\n}\n\n//# sourceURL=webpack:///./src/scenes/loadingBar.js?");

/***/ }),

/***/ "./src/scenes/sceneAssets/assetPacks/backgroundElements.js":
/*!*****************************************************************!*\
  !*** ./src/scenes/sceneAssets/assetPacks/backgroundElements.js ***!
  \*****************************************************************/
/*! exports provided: backgroundElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backgroundElements\", function() { return backgroundElements; });\nvar backgroundElements = [['el1', 'assets/backgrounds/elements/l6_satellite02-01.png'], ['el2', 'assets/backgrounds/elements/l3_planet-01.png'], ['el3', 'assets/backgrounds/elements/l3_planet02-01.png'], ['el4', 'assets/backgrounds/elements/l3_sun-01.png'], ['el5', 'assets/backgrounds/elements/l4_planet02-01.png'], ['el6', 'assets/backgrounds/elements/l4_satellite01-01.png'], ['el7', 'assets/backgrounds/elements/l1_nebula-01.png'], ['el8', 'assets/backgrounds/elements/l1_nebula-02.png'], ['el9', 'assets/backgrounds/elements/l1_nebula-03.png'], ['el10', 'assets/backgrounds/elements/l1_nebula-04.png']];\n\n//# sourceURL=webpack:///./src/scenes/sceneAssets/assetPacks/backgroundElements.js?");

/***/ }),

/***/ "./src/scenes/sceneAssets/assetPacks/backgrounds.js":
/*!**********************************************************!*\
  !*** ./src/scenes/sceneAssets/assetPacks/backgrounds.js ***!
  \**********************************************************/
/*! exports provided: backgrounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backgrounds\", function() { return backgrounds; });\nvar backgrounds = [['background', 'assets/backgrounds/l2_stars-01.png']];\n\n//# sourceURL=webpack:///./src/scenes/sceneAssets/assetPacks/backgrounds.js?");

/***/ }),

/***/ "./src/scenes/sceneAssets/assetPacks/exhaust1.js":
/*!*******************************************************!*\
  !*** ./src/scenes/sceneAssets/assetPacks/exhaust1.js ***!
  \*******************************************************/
/*! exports provided: exhaust */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exhaust\", function() { return exhaust; });\nvar exhaust = [['exhaust1', 'assets/ships/exhaust1/Exhaust_4_000.png'], ['exhaust2', 'assets/ships/exhaust1/Exhaust_4_001.png'], ['exhaust3', 'assets/ships/exhaust1/Exhaust_4_002.png'], ['exhaust4', 'assets/ships/exhaust1/Exhaust_4_003.png'], ['exhaust5', 'assets/ships/exhaust1/Exhaust_4_004.png'], ['exhaust6', 'assets/ships/exhaust1/Exhaust_4_005.png'], ['exhaust7', 'assets/ships/exhaust1/Exhaust_4_006.png'], ['exhaust8', 'assets/ships/exhaust1/Exhaust_4_007.png'], ['exhaust9', 'assets/ships/exhaust1/Exhaust_4_008.png'], ['exhaust10', 'assets/ships/exhaust1/Exhaust_4_009.png']];\n\n//# sourceURL=webpack:///./src/scenes/sceneAssets/assetPacks/exhaust1.js?");

/***/ }),

/***/ "./src/scenes/sceneAssets/assetPacks/ships.js":
/*!****************************************************!*\
  !*** ./src/scenes/sceneAssets/assetPacks/ships.js ***!
  \****************************************************/
/*! exports provided: ships */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ships\", function() { return ships; });\nvar ships = [['player', 'assets/ships/playerShip1_blue.png'], ['robot', 'assets/ships/Robot.png']];\n\n//# sourceURL=webpack:///./src/scenes/sceneAssets/assetPacks/ships.js?");

/***/ }),

/***/ "./src/scenes/sceneAssets/assetPacks/shots.js":
/*!****************************************************!*\
  !*** ./src/scenes/sceneAssets/assetPacks/shots.js ***!
  \****************************************************/
/*! exports provided: shots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shots\", function() { return shots; });\nvar shots = [['shot1_1', 'assets/weapons/Shot1/shot1_1.png'], ['shot1_2', 'assets/weapons/Shot1/shot1_2.png'], ['shot1_3', 'assets/weapons/Shot1/shot1_3.png'], ['shot1_4', 'assets/weapons/Shot1/shot1_4.png'], ['shot1_asset', 'assets/weapons/Shot1/shot1_asset.png'], ['shot1_exp1', 'assets/weapons/Shot1/shot1_exp1.png'], ['shot1_exp2', 'assets/weapons/Shot1/shot1_exp2.png'], ['shot1_exp3', 'assets/weapons/Shot1/shot1_exp3.png'], ['shot1_exp4', 'assets/weapons/Shot1/shot1_exp4.png'], ['shot1_exp5', 'assets/weapons/Shot1/shot1_exp5.png'], ['shot2_1', 'assets/weapons/Shot2/shot2_1.png'], ['shot2_2', 'assets/weapons/Shot2/shot2_2.png'], ['shot2_3', 'assets/weapons/Shot2/shot2_3.png'], ['shot2_4', 'assets/weapons/Shot2/shot2_4.png'], ['shot2_5', 'assets/weapons/Shot2/shot2_5.png'], ['shot2_6', 'assets/weapons/Shot2/shot2_6.png'], ['shot2_asset', 'assets/weapons/Shot2/shot2_asset.png'], ['shot2_exp1', 'assets/weapons/Shot2/shot2_exp1.png'], ['shot2_exp2', 'assets/weapons/Shot2/shot2_exp2.png'], ['shot2_exp3', 'assets/weapons/Shot2/shot2_exp3.png'], ['shot2_exp4', 'assets/weapons/Shot2/shot2_exp4.png'], ['shot2_exp5', 'assets/weapons/Shot2/shot2_exp5.png'], ['shot2_exp6', 'assets/weapons/Shot2/shot2_exp6.png'], ['Shot3_1', 'assets/weapons/Shot3/Shot3_1.png'], ['Shot3_2', 'assets/weapons/Shot3/Shot3_2.png'], ['Shot3_3', 'assets/weapons/Shot3/Shot3_3.png'], ['Shot3_4', 'assets/weapons/Shot3/Shot3_4.png'], ['Shot3_5', 'assets/weapons/Shot3/Shot3_5.png'], ['Shot3_6', 'assets/weapons/Shot3/Shot3_6.png'], ['Shot3_asset', 'assets/weapons/Shot3/Shot3_asset.png'], ['Shot3_exp1', 'assets/weapons/Shot3/Shot3_exp1.png'], ['Shot3_exp2', 'assets/weapons/Shot3/Shot3_exp2.png'], ['Shot3_exp3', 'assets/weapons/Shot3/Shot3_exp3.png'], ['Shot3_exp4', 'assets/weapons/Shot3/Shot3_exp4.png'], ['Shot3_exp5', 'assets/weapons/Shot3/Shot3_exp5.png'], ['Shot3_exp6', 'assets/weapons/Shot3/Shot3_exp6.png'], ['Shot3_exp7', 'assets/weapons/Shot3/Shot3_exp7.png'], ['Shot4_1', 'assets/weapons/Shot4/Shot4_1.png'], ['Shot4_2', 'assets/weapons/Shot4/Shot4_2.png'], ['Shot4_3', 'assets/weapons/Shot4/Shot4_3.png'], ['Shot4_4', 'assets/weapons/Shot4/Shot4_4.png'], ['Shot4_5', 'assets/weapons/Shot4/Shot4_5.png'], ['Shot4_asset', 'assets/weapons/Shot4/Shot4_asset.png'], ['Shot4_exp_1', 'assets/weapons/Shot4/Shot4_exp_1.png'], ['Shot4_exp_2', 'assets/weapons/Shot4/Shot4_exp_2.png'], ['Shot4_exp_3', 'assets/weapons/Shot4/Shot4_exp_3.png'], ['Shot4_exp_4', 'assets/weapons/Shot4/Shot4_exp_4.png'], ['Shot4_exp_5', 'assets/weapons/Shot4/Shot4_exp_5.png'], ['Shot4_exp_6', 'assets/weapons/Shot4/Shot4_exp_6.png'], ['Shot5_1', 'assets/weapons/Shot5/Shot5_1.png'], ['Shot5_2', 'assets/weapons/Shot5/Shot5_2.png'], ['Shot5_3', 'assets/weapons/Shot5/Shot5_3.png'], ['Shot5_4', 'assets/weapons/Shot5/Shot5_4.png'], ['Shot5_asset', 'assets/weapons/Shot5/Shot5_asset.png'], ['Shot5_exp_1', 'assets/weapons/Shot5/Shot5_exp_1.png'], ['Shot5_exp_2', 'assets/weapons/Shot5/Shot5_exp_2.png'], ['Shot5_exp_3', 'assets/weapons/Shot5/Shot5_exp_3.png'], ['Shot5_exp_4', 'assets/weapons/Shot5/Shot5_exp_4.png'], ['Shot5_exp_5', 'assets/weapons/Shot5/Shot5_exp_5.png'], ['Shot5_exp_6', 'assets/weapons/Shot5/Shot5_exp_6.png'], ['Shot5_exp_7', 'assets/weapons/Shot5/Shot5_exp_7.png'], ['Shot5_exp_8', 'assets/weapons/Shot5/Shot5_exp_8.png'], ['Shot_1', 'assets/weapons/Shot6/Shot_1.png'], ['Shot_2', 'assets/weapons/Shot6/Shot_2.png'], ['Shot_3', 'assets/weapons/Shot6/Shot_3.png'], ['Shot_4', 'assets/weapons/Shot6/Shot_4.png'], ['Shot_5', 'assets/weapons/Shot6/Shot_5.png'], ['Shot_asset', 'assets/weapons/Shot6/Shot_asset.png'], ['Shot_exp_1', 'assets/weapons/Shot6/Shot_exp_1.png'], ['Shot_exp_2', 'assets/weapons/Shot6/Shot_exp_2.png'], ['Shot_exp_3', 'assets/weapons/Shot6/Shot_exp_3.png'], ['Shot_exp_4', 'assets/weapons/Shot6/Shot_exp_4.png'], ['Shot_exp_5', 'assets/weapons/Shot6/Shot_exp_5.png'], ['Shot_exp_6', 'assets/weapons/Shot6/Shot_exp_6.png'], ['Shot_exp_7', 'assets/weapons/Shot6/Shot_exp_7.png'], ['Shot_exp_8', 'assets/weapons/Shot6/Shot_exp_8.png']];\n\n//# sourceURL=webpack:///./src/scenes/sceneAssets/assetPacks/shots.js?");

/***/ }),

/***/ "./src/scenes/sceneAssets/demoSceneAssets.js":
/*!***************************************************!*\
  !*** ./src/scenes/sceneAssets/demoSceneAssets.js ***!
  \***************************************************/
/*! exports provided: demoSceneAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"demoSceneAssets\", function() { return demoSceneAssets; });\n/* harmony import */ var _assetPacks_exhaust1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assetPacks/exhaust1 */ \"./src/scenes/sceneAssets/assetPacks/exhaust1.js\");\n/* harmony import */ var _assetPacks_backgroundElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assetPacks/backgroundElements */ \"./src/scenes/sceneAssets/assetPacks/backgroundElements.js\");\n/* harmony import */ var _assetPacks_ships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assetPacks/ships */ \"./src/scenes/sceneAssets/assetPacks/ships.js\");\n/* harmony import */ var _assetPacks_backgrounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assetPacks/backgrounds */ \"./src/scenes/sceneAssets/assetPacks/backgrounds.js\");\n/* harmony import */ var _assetPacks_shots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assetPacks/shots */ \"./src/scenes/sceneAssets/assetPacks/shots.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\n\n\n\nvar demoSceneAssets = [];\ndemoSceneAssets.push.apply(demoSceneAssets, _toConsumableArray(_assetPacks_exhaust1__WEBPACK_IMPORTED_MODULE_0__[\"exhaust\"]));\ndemoSceneAssets.push.apply(demoSceneAssets, _toConsumableArray(_assetPacks_backgroundElements__WEBPACK_IMPORTED_MODULE_1__[\"backgroundElements\"]));\ndemoSceneAssets.push.apply(demoSceneAssets, _toConsumableArray(_assetPacks_ships__WEBPACK_IMPORTED_MODULE_2__[\"ships\"]));\ndemoSceneAssets.push.apply(demoSceneAssets, _toConsumableArray(_assetPacks_backgrounds__WEBPACK_IMPORTED_MODULE_3__[\"backgrounds\"]));\ndemoSceneAssets.push.apply(demoSceneAssets, _toConsumableArray(_assetPacks_shots__WEBPACK_IMPORTED_MODULE_4__[\"shots\"]));\n\n//# sourceURL=webpack:///./src/scenes/sceneAssets/demoSceneAssets.js?");

/***/ }),

/***/ "./src/scenes/sceneAssets/loadAssets.js":
/*!**********************************************!*\
  !*** ./src/scenes/sceneAssets/loadAssets.js ***!
  \**********************************************/
/*! exports provided: loadAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadAssets\", function() { return loadAssets; });\n/**\r\n * Loads assets for given scene from given array of asset names and paths\r\n * @param {Phaser.Scene`} scene - A scene that we are loading assets for \r\n * @param {Array} sceneAssets - Array of asset names and paths to load\r\n */\nvar loadAssets = function loadAssets(scene) {\n  var sceneAssets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = sceneAssets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var asset = _step.value;\n      scene.load.image(asset[0], asset[1]);\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/scenes/sceneAssets/loadAssets.js?");

/***/ })

/******/ });