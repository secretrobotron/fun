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

  this.createFlower = function (petals, pistilRadius) {
    var flower = flowerTemplate.cloneNode(true);

    // Up
    for (var i = 0; i < petals; ++i) {
      var petal = petalTemplate.cloneNode(true);
      petal.style.transform = 'rotate(' + (360/petals*i) + 'deg)';
      flower.querySelector('.petals').appendChild(petal);
    }

    flower.classList.add('debug');

    return flower;
  };
}

document.addEventListener('DOMContentLoaded', () => {
  var stage = document.querySelector('#stage');
  var flowerTemplate = __WEBPACK_IMPORTED_MODULE_0__dom_js___default.a.createElementFromTemplate(__WEBPACK_IMPORTED_MODULE_1__templates_flower_html___default.a);
  var petalTemplate = __WEBPACK_IMPORTED_MODULE_0__dom_js___default.a.createElementFromTemplate(__WEBPACK_IMPORTED_MODULE_2__templates_petal_html___default.a);

  var flowerGenerator = new FlowerGenerator(flowerTemplate, petalTemplate);
  
  var flower = flowerGenerator.createFlower(8, 100);

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

module.exports = "<div class=\"petal\">\n  <div class=\"visual\"></div>\n</div>";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWE1ZmU5YTE0Mzk3MGJhNmEwODQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2Zsb3dlci5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcGV0YWwuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7QUN0Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDTkEscUs7Ozs7OztBQ0FBLGlGIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5YTVmZTlhMTQzOTcwYmE2YTA4NCIsImltcG9ydCBkb20gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IGZsb3dlckhUTUwgZnJvbSAnLi4vdGVtcGxhdGVzL2Zsb3dlci5odG1sJztcbmltcG9ydCBwZXRhbEhUTUwgZnJvbSAnLi4vdGVtcGxhdGVzL3BldGFsLmh0bWwnO1xuXG5mdW5jdGlvbiBGbG93ZXJHZW5lcmF0b3IoZmxvd2VyVGVtcGxhdGUsIHBldGFsVGVtcGxhdGUpIHtcblxuICB0aGlzLmNyZWF0ZUZsb3dlciA9IGZ1bmN0aW9uIChwZXRhbHMsIHBpc3RpbFJhZGl1cykge1xuICAgIHZhciBmbG93ZXIgPSBmbG93ZXJUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAvLyBVcFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGV0YWxzOyArK2kpIHtcbiAgICAgIHZhciBwZXRhbCA9IHBldGFsVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgcGV0YWwuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgnICsgKDM2MC9wZXRhbHMqaSkgKyAnZGVnKSc7XG4gICAgICBmbG93ZXIucXVlcnlTZWxlY3RvcignLnBldGFscycpLmFwcGVuZENoaWxkKHBldGFsKTtcbiAgICB9XG5cbiAgICBmbG93ZXIuY2xhc3NMaXN0LmFkZCgnZGVidWcnKTtcblxuICAgIHJldHVybiBmbG93ZXI7XG4gIH07XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHZhciBzdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFnZScpO1xuICB2YXIgZmxvd2VyVGVtcGxhdGUgPSBkb20uY3JlYXRlRWxlbWVudEZyb21UZW1wbGF0ZShmbG93ZXJIVE1MKTtcbiAgdmFyIHBldGFsVGVtcGxhdGUgPSBkb20uY3JlYXRlRWxlbWVudEZyb21UZW1wbGF0ZShwZXRhbEhUTUwpO1xuXG4gIHZhciBmbG93ZXJHZW5lcmF0b3IgPSBuZXcgRmxvd2VyR2VuZXJhdG9yKGZsb3dlclRlbXBsYXRlLCBwZXRhbFRlbXBsYXRlKTtcbiAgXG4gIHZhciBmbG93ZXIgPSBmbG93ZXJHZW5lcmF0b3IuY3JlYXRlRmxvd2VyKDgsIDEwMCk7XG5cbiAgc3RhZ2UuYXBwZW5kQ2hpbGQoZmxvd2VyKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgIHZhciBwID0gZS5jbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbG93ZXItdHJhbnNmb3JtJykuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVgoJyArICgtNTAqcCkgKyAnZGVnKSc7XG4gIH0pO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVFbGVtZW50RnJvbVRlbXBsYXRlOiBmdW5jdGlvbiAodGVtcGxhdGUpIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiBkaXYuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvZG9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJmbG93ZXItdHJhbnNmb3JtXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImZsb3dlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm92YXJ5XFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicGV0YWxzXFxcIj48L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9mbG93ZXIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGV0YWxcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwidmlzdWFsXFxcIj48L2Rpdj5cXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcGV0YWwuaHRtbFxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9