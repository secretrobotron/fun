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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dom_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_flower_html__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_flower_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__templates_flower_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_petal_html__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_petal_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__templates_petal_html__);




function FlowerGenerator(flowerTemplate, petalTemplate) {

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

    var numLayers = 4 + Math.round(Math.random() * 8);

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

document.addEventListener('DOMContentLoaded', () => {
  var stage = document.querySelector('#stage');
  var flowerTemplate = __WEBPACK_IMPORTED_MODULE_0__dom_js___default.a.createElementFromTemplate(__WEBPACK_IMPORTED_MODULE_1__templates_flower_html___default.a);
  var petalTemplate = __WEBPACK_IMPORTED_MODULE_0__dom_js___default.a.createElementFromTemplate(__WEBPACK_IMPORTED_MODULE_2__templates_petal_html___default.a);

  var flowerGenerator = new FlowerGenerator(flowerTemplate, petalTemplate);
  
  var flower = flowerGenerator.createRandomFlower(100);

  stage.appendChild(flower);

  flower.style.transform = 'translateX(100px) translateY(100px) translateZ(-700px) rotateX(-10deg)';

  document.addEventListener('mousemove', (e) => {
    var py = (e.clientY - (window.innerHeight / 2)) / window.innerHeight / 2;
    var px = (e.clientX - (window.innerWidth / 2)) / window.innerWidth / 2;
    var skyboxRotationX = py * Math.PI*2;
    var skyboxRotationY = px * Math.PI*4;

    document.querySelector('.stage-transform.rotation').style.transform ='rotateX(' + skyboxRotationX + 'rad) rotateY(' + skyboxRotationY + 'rad)';
  });
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  createElementFromTemplate: function (template) {
    var div = document.createElement('div');
    div.innerHTML = template;
    return div.firstElementChild;
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<div class=\"flower-transform\">\n  <div class=\"flower\">\n    <div class=\"ovary\"></div>\n    <div class=\"petals\"></div>\n  </div>\n</div>\n";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<div class=\"petal-transform\">\n  <div class=\"petal\"></div>\n</div>";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzBlZDE4NDZmZWZlN2RiZWFkODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2Zsb3dlci5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcGV0YWwuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7OztBQzFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNOQSxxSzs7Ozs7O0FDQUEsMEYiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGMwZWQxODQ2ZmVmZTdkYmVhZDgwIiwiaW1wb3J0IGRvbSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgZmxvd2VySFRNTCBmcm9tICcuLi90ZW1wbGF0ZXMvZmxvd2VyLmh0bWwnO1xuaW1wb3J0IHBldGFsSFRNTCBmcm9tICcuLi90ZW1wbGF0ZXMvcGV0YWwuaHRtbCc7XG5cbmZ1bmN0aW9uIEZsb3dlckdlbmVyYXRvcihmbG93ZXJUZW1wbGF0ZSwgcGV0YWxUZW1wbGF0ZSkge1xuXG4gIHZhciBkZWZhdWx0Q29sb3VycyA9IFtcbiAgICAnb3JhbmdlJywgJ3JlZCcsICdibHVlJywgJ3BpbmsnXG4gIF07XG5cbiAgdGhpcy5jcmVhdGVGbG93ZXIgPSBmdW5jdGlvbiAocGlzdGlsUmFkaXVzLCBwZXRhbHMpIHtcbiAgICB2YXIgZmxvd2VyID0gZmxvd2VyVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgIHZhciBwZXRhbHNDb250YWluZXIgPSBmbG93ZXIucXVlcnlTZWxlY3RvcignLnBldGFscycpO1xuXG4gICAgcGV0YWxzLmZvckVhY2goKHBldGFsU2V0dGluZ3MpID0+IHtcbiAgICAgIHZhciBudW1QZXRhbHMgPSBwZXRhbFNldHRpbmdzLm51bWJlcjtcbiAgICAgIHZhciBjb2xvdXIgPSBwZXRhbFNldHRpbmdzLmNvbG91cjtcbiAgICAgIHZhciByb3RhdGlvbiA9IHBldGFsU2V0dGluZ3Mucm90YXRpb24gfHwgMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QZXRhbHM7ICsraSkge1xuICAgICAgICB2YXIgcGV0YWxDb250YWluZXIgPSBwZXRhbFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgdmFyIHBldGFsID0gcGV0YWxDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgICAgcGV0YWxDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVooJyArICgzNjAvbnVtUGV0YWxzKmkpICsgJ2RlZyknO1xuICAgICAgICBwZXRhbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWigtNDBweCkgcm90YXRlWCgnICsgcm90YXRpb24gKyAnZGVnKSByb3RhdGVZKC0nICsgcm90YXRpb24gKyAnZGVnKSc7XG4gICAgICAgIFxuICAgICAgICBwZXRhbC5jbGFzc0xpc3QuYWRkKGNvbG91cik7XG4gICAgICAgIHBldGFsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwZXRhbENvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmbG93ZXIuY2xhc3NMaXN0LmFkZCgnZGVidWcnKTtcblxuICAgIHJldHVybiBmbG93ZXI7XG4gIH07XG5cbiAgdGhpcy5jcmVhdGVSYW5kb21GbG93ZXIgPSBmdW5jdGlvbihwaXN0aWxSYWRpdXMpIHtcbiAgICB2YXIgbGF5ZXJzID0gW107XG5cbiAgICB2YXIgbnVtTGF5ZXJzID0gNCArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1MYXllcnM7ICsraSkge1xuICAgICAgbGF5ZXJzLnB1c2goe1xuICAgICAgICBudW1iZXI6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEyKSArIDQsXG4gICAgICAgIGNvbG91cjogZGVmYXVsdENvbG91cnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGVmYXVsdENvbG91cnMubGVuZ3RoKV0sXG4gICAgICAgIHJvdGF0aW9uOiAxNSArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDE1KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRmxvd2VyKHBpc3RpbFJhZGl1cywgbGF5ZXJzKTtcbiAgfTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgdmFyIHN0YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWdlJyk7XG4gIHZhciBmbG93ZXJUZW1wbGF0ZSA9IGRvbS5jcmVhdGVFbGVtZW50RnJvbVRlbXBsYXRlKGZsb3dlckhUTUwpO1xuICB2YXIgcGV0YWxUZW1wbGF0ZSA9IGRvbS5jcmVhdGVFbGVtZW50RnJvbVRlbXBsYXRlKHBldGFsSFRNTCk7XG5cbiAgdmFyIGZsb3dlckdlbmVyYXRvciA9IG5ldyBGbG93ZXJHZW5lcmF0b3IoZmxvd2VyVGVtcGxhdGUsIHBldGFsVGVtcGxhdGUpO1xuICBcbiAgdmFyIGZsb3dlciA9IGZsb3dlckdlbmVyYXRvci5jcmVhdGVSYW5kb21GbG93ZXIoMTAwKTtcblxuICBzdGFnZS5hcHBlbmRDaGlsZChmbG93ZXIpO1xuXG4gIGZsb3dlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgxMDBweCkgdHJhbnNsYXRlWSgxMDBweCkgdHJhbnNsYXRlWigtNzAwcHgpIHJvdGF0ZVgoLTEwZGVnKSc7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICB2YXIgcHkgPSAoZS5jbGllbnRZIC0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpKSAvIHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG4gICAgdmFyIHB4ID0gKGUuY2xpZW50WCAtICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpKSAvIHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgICB2YXIgc2t5Ym94Um90YXRpb25YID0gcHkgKiBNYXRoLlBJKjI7XG4gICAgdmFyIHNreWJveFJvdGF0aW9uWSA9IHB4ICogTWF0aC5QSSo0O1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YWdlLXRyYW5zZm9ybS5yb3RhdGlvbicpLnN0eWxlLnRyYW5zZm9ybSA9J3JvdGF0ZVgoJyArIHNreWJveFJvdGF0aW9uWCArICdyYWQpIHJvdGF0ZVkoJyArIHNreWJveFJvdGF0aW9uWSArICdyYWQpJztcbiAgfSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZUVsZW1lbnRGcm9tVGVtcGxhdGU6IGZ1bmN0aW9uICh0ZW1wbGF0ZSkge1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIGRpdi5maXJzdEVsZW1lbnRDaGlsZDtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9kb20uanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZsb3dlci10cmFuc2Zvcm1cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiZmxvd2VyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwib3ZhcnlcXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwZXRhbHNcXFwiPjwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL2Zsb3dlci5odG1sXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwZXRhbC10cmFuc2Zvcm1cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwicGV0YWxcXFwiPjwvZGl2PlxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wZXRhbC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=