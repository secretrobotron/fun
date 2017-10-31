/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flower_generator_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stage_js__ = __webpack_require__(5);



document.addEventListener('DOMContentLoaded', () => {
  var stage = new __WEBPACK_IMPORTED_MODULE_1__stage_js__["a" /* default */]();
  var flowerGenerator = new __WEBPACK_IMPORTED_MODULE_0__flower_generator_js__["a" /* default */]();
  
  var flower = flowerGenerator.createRandomFlower(100);


  flower.style.transform = 'translateX(100px) translateY(100px) translateZ(-700px) rotateX(-10deg)';
  stage.add(flower);

  stage.enableMouseDragging();
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dom_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_flower_html__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_flower_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__templates_flower_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_petal_html__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_petal_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__templates_petal_html__);




function FlowerGenerator() {
  var flowerTemplate = __WEBPACK_IMPORTED_MODULE_0__dom_js___default.a.createElementFromTemplate(__WEBPACK_IMPORTED_MODULE_1__templates_flower_html___default.a);
  var petalTemplate = __WEBPACK_IMPORTED_MODULE_0__dom_js___default.a.createElementFromTemplate(__WEBPACK_IMPORTED_MODULE_2__templates_petal_html___default.a);

  var defaultColours = [
    'orange', 'red', 'blue', 'pink'
  ];

  this.createFlower = function (pistilRadius, petals) {
    var flower = flowerTemplate.cloneNode(true);
    var petalsContainer = flower.querySelector('.petals');

    petals.forEach((petalSettings) => {
      var numPetals = petalSettings.number;
      var colour = petalSettings.colour;
      var rotation = petalSettings.rotation || 0;

      for (var i = 0; i < numPetals; ++i) {
        var petalContainer = petalTemplate.cloneNode(true);
        var petal = petalContainer.firstElementChild;

        petalContainer.style.transform = 'rotateZ(' + (360/numPetals*i) + 'deg)';
        petal.style.transform = 'translateZ(-40px) rotateX(' + rotation + 'deg) rotateY(-' + rotation + 'deg)';
        
        petal.classList.add(colour);
        petalsContainer.appendChild(petalContainer);
      }
    });

    flower.classList.add('debug');

    return flower;
  };

  this.createRandomFlower = function(pistilRadius) {
    var layers = [];

    var numLayers = 1 + Math.round(Math.random() * 3);

    for (var i = 0; i < numLayers; ++i) {
      layers.push({
        number: Math.round(Math.random() * 12) + 4,
        colour: defaultColours[Math.floor(Math.random() * defaultColours.length)],
        rotation: 15 + Math.round(Math.random() * 15)
      });
    }

    return this.createFlower(pistilRadius, layers);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (FlowerGenerator);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
  createElementFromTemplate: function (template) {
    var div = document.createElement('div');
    div.innerHTML = template;
    return div.firstElementChild;
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<div class=\"flower-transform\">\n  <div class=\"flower\">\n    <div class=\"ovary\"></div>\n    <div class=\"petals\"></div>\n  </div>\n</div>\n";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<div class=\"petal-transform\">\n  <div class=\"petal\"></div>\n</div>";

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Stage() {

  var stageContainer = document.querySelector('.stage-container');
  var stageRotationTransform = stageContainer.querySelector('.stage-transform.rotation');
  var stageTranslationTransform = stageContainer.querySelector('.stage-transform.translation');
  var stageElement = stageContainer.querySelector('.stage');

  var mouseDownPosition = {x: 0, y: 0};
  var currentSkyboxRotation = {x: 0, y: 0};
  var lastSkyboxRotation = {x: 0, y: 0};

  const rotationDampeningFactor = 6;

  function onMouseMove(e) {
    var dx = mouseDownPosition.x - e.clientX;
    var dy = mouseDownPosition.y - e.clientY;

    currentSkyboxRotation.x = lastSkyboxRotation.x - (dy / rotationDampeningFactor);
    currentSkyboxRotation.y = lastSkyboxRotation.y + (dx / rotationDampeningFactor);

    stageRotationTransform.style.transform ='rotateX(' + currentSkyboxRotation.x + 'deg) rotateY(' + currentSkyboxRotation.y + 'deg)';
  }

  function onMouseUp(e) {
    lastSkyboxRotation.x = currentSkyboxRotation.x;
    lastSkyboxRotation.y = currentSkyboxRotation.y;

    stageContainer.classList.remove('dragging');

    window.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

  function onMouseDown(e) {
    mouseDownPosition.x = e.clientX;
    mouseDownPosition.y = e.clientY;

    stageContainer.classList.add('dragging');
    
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
  }

  this.add = function (element) {
    stageElement.appendChild(element);
  };

  this.enableMouseDragging = function () {
    stageContainer.addEventListener('mousedown', onMouseDown);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Stage);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDkxM2Q5OTYwNzI0MGNiMjZhNDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zsb3dlci1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2Zsb3dlci5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcGV0YWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQzdEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDTkEscUs7Ozs7OztBQ0FBLDBGOzs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCLCtCQUErQjtBQUMvQiw0QkFBNEI7O0FBRTVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDkxM2Q5OTYwNzI0MGNiMjZhNDIiLCJpbXBvcnQgRmxvd2VyR2VuZXJhdG9yIGZyb20gJy4vZmxvd2VyLWdlbmVyYXRvci5qcyc7XG5pbXBvcnQgU3RhZ2UgZnJvbSAnLi9zdGFnZS5qcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHZhciBzdGFnZSA9IG5ldyBTdGFnZSgpO1xuICB2YXIgZmxvd2VyR2VuZXJhdG9yID0gbmV3IEZsb3dlckdlbmVyYXRvcigpO1xuICBcbiAgdmFyIGZsb3dlciA9IGZsb3dlckdlbmVyYXRvci5jcmVhdGVSYW5kb21GbG93ZXIoMTAwKTtcblxuXG4gIGZsb3dlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgxMDBweCkgdHJhbnNsYXRlWSgxMDBweCkgdHJhbnNsYXRlWigtNzAwcHgpIHJvdGF0ZVgoLTEwZGVnKSc7XG4gIHN0YWdlLmFkZChmbG93ZXIpO1xuXG4gIHN0YWdlLmVuYWJsZU1vdXNlRHJhZ2dpbmcoKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZG9tIGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCBmbG93ZXJIVE1MIGZyb20gJy4uL3RlbXBsYXRlcy9mbG93ZXIuaHRtbCc7XG5pbXBvcnQgcGV0YWxIVE1MIGZyb20gJy4uL3RlbXBsYXRlcy9wZXRhbC5odG1sJztcblxuZnVuY3Rpb24gRmxvd2VyR2VuZXJhdG9yKCkge1xuICB2YXIgZmxvd2VyVGVtcGxhdGUgPSBkb20uY3JlYXRlRWxlbWVudEZyb21UZW1wbGF0ZShmbG93ZXJIVE1MKTtcbiAgdmFyIHBldGFsVGVtcGxhdGUgPSBkb20uY3JlYXRlRWxlbWVudEZyb21UZW1wbGF0ZShwZXRhbEhUTUwpO1xuXG4gIHZhciBkZWZhdWx0Q29sb3VycyA9IFtcbiAgICAnb3JhbmdlJywgJ3JlZCcsICdibHVlJywgJ3BpbmsnXG4gIF07XG5cbiAgdGhpcy5jcmVhdGVGbG93ZXIgPSBmdW5jdGlvbiAocGlzdGlsUmFkaXVzLCBwZXRhbHMpIHtcbiAgICB2YXIgZmxvd2VyID0gZmxvd2VyVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgIHZhciBwZXRhbHNDb250YWluZXIgPSBmbG93ZXIucXVlcnlTZWxlY3RvcignLnBldGFscycpO1xuXG4gICAgcGV0YWxzLmZvckVhY2goKHBldGFsU2V0dGluZ3MpID0+IHtcbiAgICAgIHZhciBudW1QZXRhbHMgPSBwZXRhbFNldHRpbmdzLm51bWJlcjtcbiAgICAgIHZhciBjb2xvdXIgPSBwZXRhbFNldHRpbmdzLmNvbG91cjtcbiAgICAgIHZhciByb3RhdGlvbiA9IHBldGFsU2V0dGluZ3Mucm90YXRpb24gfHwgMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QZXRhbHM7ICsraSkge1xuICAgICAgICB2YXIgcGV0YWxDb250YWluZXIgPSBwZXRhbFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgdmFyIHBldGFsID0gcGV0YWxDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgICAgcGV0YWxDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVooJyArICgzNjAvbnVtUGV0YWxzKmkpICsgJ2RlZyknO1xuICAgICAgICBwZXRhbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWigtNDBweCkgcm90YXRlWCgnICsgcm90YXRpb24gKyAnZGVnKSByb3RhdGVZKC0nICsgcm90YXRpb24gKyAnZGVnKSc7XG4gICAgICAgIFxuICAgICAgICBwZXRhbC5jbGFzc0xpc3QuYWRkKGNvbG91cik7XG4gICAgICAgIHBldGFsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwZXRhbENvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmbG93ZXIuY2xhc3NMaXN0LmFkZCgnZGVidWcnKTtcblxuICAgIHJldHVybiBmbG93ZXI7XG4gIH07XG5cbiAgdGhpcy5jcmVhdGVSYW5kb21GbG93ZXIgPSBmdW5jdGlvbihwaXN0aWxSYWRpdXMpIHtcbiAgICB2YXIgbGF5ZXJzID0gW107XG5cbiAgICB2YXIgbnVtTGF5ZXJzID0gMSArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1MYXllcnM7ICsraSkge1xuICAgICAgbGF5ZXJzLnB1c2goe1xuICAgICAgICBudW1iZXI6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEyKSArIDQsXG4gICAgICAgIGNvbG91cjogZGVmYXVsdENvbG91cnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGVmYXVsdENvbG91cnMubGVuZ3RoKV0sXG4gICAgICAgIHJvdGF0aW9uOiAxNSArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDE1KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRmxvd2VyKHBpc3RpbFJhZGl1cywgbGF5ZXJzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxvd2VyR2VuZXJhdG9yO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvZmxvd2VyLWdlbmVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlRWxlbWVudEZyb21UZW1wbGF0ZTogZnVuY3Rpb24gKHRlbXBsYXRlKSB7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gZGl2LmZpcnN0RWxlbWVudENoaWxkO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2RvbS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZmxvd2VyLXRyYW5zZm9ybVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJmbG93ZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJvdmFyeVxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBldGFsc1xcXCI+PC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvZmxvd2VyLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBldGFsLXRyYW5zZm9ybVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJwZXRhbFxcXCI+PC9kaXY+XFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3BldGFsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gU3RhZ2UoKSB7XG5cbiAgdmFyIHN0YWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YWdlLWNvbnRhaW5lcicpO1xuICB2YXIgc3RhZ2VSb3RhdGlvblRyYW5zZm9ybSA9IHN0YWdlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZS10cmFuc2Zvcm0ucm90YXRpb24nKTtcbiAgdmFyIHN0YWdlVHJhbnNsYXRpb25UcmFuc2Zvcm0gPSBzdGFnZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuc3RhZ2UtdHJhbnNmb3JtLnRyYW5zbGF0aW9uJyk7XG4gIHZhciBzdGFnZUVsZW1lbnQgPSBzdGFnZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuc3RhZ2UnKTtcblxuICB2YXIgbW91c2VEb3duUG9zaXRpb24gPSB7eDogMCwgeTogMH07XG4gIHZhciBjdXJyZW50U2t5Ym94Um90YXRpb24gPSB7eDogMCwgeTogMH07XG4gIHZhciBsYXN0U2t5Ym94Um90YXRpb24gPSB7eDogMCwgeTogMH07XG5cbiAgY29uc3Qgcm90YXRpb25EYW1wZW5pbmdGYWN0b3IgPSA2O1xuXG4gIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGUpIHtcbiAgICB2YXIgZHggPSBtb3VzZURvd25Qb3NpdGlvbi54IC0gZS5jbGllbnRYO1xuICAgIHZhciBkeSA9IG1vdXNlRG93blBvc2l0aW9uLnkgLSBlLmNsaWVudFk7XG5cbiAgICBjdXJyZW50U2t5Ym94Um90YXRpb24ueCA9IGxhc3RTa3lib3hSb3RhdGlvbi54IC0gKGR5IC8gcm90YXRpb25EYW1wZW5pbmdGYWN0b3IpO1xuICAgIGN1cnJlbnRTa3lib3hSb3RhdGlvbi55ID0gbGFzdFNreWJveFJvdGF0aW9uLnkgKyAoZHggLyByb3RhdGlvbkRhbXBlbmluZ0ZhY3Rvcik7XG5cbiAgICBzdGFnZVJvdGF0aW9uVHJhbnNmb3JtLnN0eWxlLnRyYW5zZm9ybSA9J3JvdGF0ZVgoJyArIGN1cnJlbnRTa3lib3hSb3RhdGlvbi54ICsgJ2RlZykgcm90YXRlWSgnICsgY3VycmVudFNreWJveFJvdGF0aW9uLnkgKyAnZGVnKSc7XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlVXAoZSkge1xuICAgIGxhc3RTa3lib3hSb3RhdGlvbi54ID0gY3VycmVudFNreWJveFJvdGF0aW9uLng7XG4gICAgbGFzdFNreWJveFJvdGF0aW9uLnkgPSBjdXJyZW50U2t5Ym94Um90YXRpb24ueTtcblxuICAgIHN0YWdlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuICAgIG1vdXNlRG93blBvc2l0aW9uLnggPSBlLmNsaWVudFg7XG4gICAgbW91c2VEb3duUG9zaXRpb24ueSA9IGUuY2xpZW50WTtcblxuICAgIHN0YWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgfVxuXG4gIHRoaXMuYWRkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBzdGFnZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH07XG5cbiAgdGhpcy5lbmFibGVNb3VzZURyYWdnaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHN0YWdlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9zdGFnZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9