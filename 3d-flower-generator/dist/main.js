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
      var numPetals = petalSettings.number || (Math.round(Math.random() * 12) + 4);
      var colour = petalSettings.colour || defaultColours[Math.floor(Math.random() * defaultColours.length)];

      for (var i = 0; i < numPetals; ++i) {
        var petalContainer = petalTemplate.cloneNode(true);
        petalContainer.style.transform = 'rotate(' + (360/numPetals*i) + 'deg)';
        petalsContainer.appendChild(petalContainer);
        petalContainer.firstElementChild.classList.add(colour);
      }
    });


    flower.classList.add('debug');

    return flower;
  };
}

document.addEventListener('DOMContentLoaded', () => {
  var stage = document.querySelector('#stage');
  var flowerTemplate = __WEBPACK_IMPORTED_MODULE_0__dom_js___default.a.createElementFromTemplate(__WEBPACK_IMPORTED_MODULE_1__templates_flower_html___default.a);
  var petalTemplate = __WEBPACK_IMPORTED_MODULE_0__dom_js___default.a.createElementFromTemplate(__WEBPACK_IMPORTED_MODULE_2__templates_petal_html___default.a);

  var flowerGenerator = new FlowerGenerator(flowerTemplate, petalTemplate);
  
  var flower = flowerGenerator.createFlower(100, [
    {
      number: 6,
      colour: 'blue'
    }
  ]);

  stage.appendChild(flower);

  document.addEventListener('mousemove', (e) => {
    var p = e.clientY / window.innerHeight;
    
    document.querySelector('.flower-transform').style.transform = 'rotateX(' + (-50*p) + 'deg)';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODhmMTIwNzIzYjc2MjdjNjNjYTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2Zsb3dlci5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcGV0YWwuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7O0FDdEREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ05BLHFLOzs7Ozs7QUNBQSwwRiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODhmMTIwNzIzYjc2MjdjNjNjYTMiLCJpbXBvcnQgZG9tIGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCBmbG93ZXJIVE1MIGZyb20gJy4uL3RlbXBsYXRlcy9mbG93ZXIuaHRtbCc7XG5pbXBvcnQgcGV0YWxIVE1MIGZyb20gJy4uL3RlbXBsYXRlcy9wZXRhbC5odG1sJztcblxuZnVuY3Rpb24gRmxvd2VyR2VuZXJhdG9yKGZsb3dlclRlbXBsYXRlLCBwZXRhbFRlbXBsYXRlKSB7XG5cbiAgdmFyIGRlZmF1bHRDb2xvdXJzID0gW1xuICAgICdvcmFuZ2UnLCAncmVkJywgJ2JsdWUnLCAncGluaydcbiAgXTtcblxuICB0aGlzLmNyZWF0ZUZsb3dlciA9IGZ1bmN0aW9uIChwaXN0aWxSYWRpdXMsIHBldGFscykge1xuICAgIHZhciBmbG93ZXIgPSBmbG93ZXJUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgdmFyIHBldGFsc0NvbnRhaW5lciA9IGZsb3dlci5xdWVyeVNlbGVjdG9yKCcucGV0YWxzJyk7XG5cbiAgICBwZXRhbHMuZm9yRWFjaCgocGV0YWxTZXR0aW5ncykgPT4ge1xuICAgICAgdmFyIG51bVBldGFscyA9IHBldGFsU2V0dGluZ3MubnVtYmVyIHx8IChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMikgKyA0KTtcbiAgICAgIHZhciBjb2xvdXIgPSBwZXRhbFNldHRpbmdzLmNvbG91ciB8fCBkZWZhdWx0Q29sb3Vyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkZWZhdWx0Q29sb3Vycy5sZW5ndGgpXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QZXRhbHM7ICsraSkge1xuICAgICAgICB2YXIgcGV0YWxDb250YWluZXIgPSBwZXRhbFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgcGV0YWxDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgnICsgKDM2MC9udW1QZXRhbHMqaSkgKyAnZGVnKSc7XG4gICAgICAgIHBldGFsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwZXRhbENvbnRhaW5lcik7XG4gICAgICAgIHBldGFsQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoY29sb3VyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgZmxvd2VyLmNsYXNzTGlzdC5hZGQoJ2RlYnVnJyk7XG5cbiAgICByZXR1cm4gZmxvd2VyO1xuICB9O1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICB2YXIgc3RhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhZ2UnKTtcbiAgdmFyIGZsb3dlclRlbXBsYXRlID0gZG9tLmNyZWF0ZUVsZW1lbnRGcm9tVGVtcGxhdGUoZmxvd2VySFRNTCk7XG4gIHZhciBwZXRhbFRlbXBsYXRlID0gZG9tLmNyZWF0ZUVsZW1lbnRGcm9tVGVtcGxhdGUocGV0YWxIVE1MKTtcblxuICB2YXIgZmxvd2VyR2VuZXJhdG9yID0gbmV3IEZsb3dlckdlbmVyYXRvcihmbG93ZXJUZW1wbGF0ZSwgcGV0YWxUZW1wbGF0ZSk7XG4gIFxuICB2YXIgZmxvd2VyID0gZmxvd2VyR2VuZXJhdG9yLmNyZWF0ZUZsb3dlcigxMDAsIFtcbiAgICB7XG4gICAgICBudW1iZXI6IDYsXG4gICAgICBjb2xvdXI6ICdibHVlJ1xuICAgIH1cbiAgXSk7XG5cbiAgc3RhZ2UuYXBwZW5kQ2hpbGQoZmxvd2VyKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgIHZhciBwID0gZS5jbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbG93ZXItdHJhbnNmb3JtJykuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVgoJyArICgtNTAqcCkgKyAnZGVnKSc7XG4gIH0pO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVFbGVtZW50RnJvbVRlbXBsYXRlOiBmdW5jdGlvbiAodGVtcGxhdGUpIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiBkaXYuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvZG9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJmbG93ZXItdHJhbnNmb3JtXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImZsb3dlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm92YXJ5XFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicGV0YWxzXFxcIj48L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9mbG93ZXIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGV0YWwtdHJhbnNmb3JtXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcInBldGFsXFxcIj48L2Rpdj5cXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcGV0YWwuaHRtbFxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9