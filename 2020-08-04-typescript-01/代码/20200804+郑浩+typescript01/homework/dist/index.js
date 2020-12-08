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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/getUser.ts":
/*!****************************!*\
  !*** ./src/api/getUser.ts ***!
  \****************************/
/*! exports provided: getUser, getUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
// import axios from 'axios'
class Axios {
    get(url, query) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                let data = xhr.responseText;
                resolve(data);
            };
            xhr.open('get', url, true);
            xhr.send();
        });
    }
}
let axios = new Axios();
// getUser 在封装的过程中，并不清楚具体使用中会传入的参数类型是什么？
// 范型：为类型定义的参数
function getUser(query) {
    return axios.get('/user', {
        query
    });
}
function getUsers() {
    return new Promise(() => {
        //....
    });
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_getUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/getUser */ "./src/api/getUser.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let myName = "郑浩";
console.log(`Hello ${myName}`);
let button = document.querySelector('button');
button.onclick = function () {
    return __awaiter(this, void 0, void 0, function* () {
        let rs = yield Object(_api_getUser__WEBPACK_IMPORTED_MODULE_0__["getUser"])({ id: 1 });
        rs.username;
        rs.age;
        let users = yield Object(_api_getUser__WEBPACK_IMPORTED_MODULE_0__["getUsers"])();
        // users.username;
        // users.forEach(user => {
        //     user.username;
        // })
        // rs.ag;
        // new Promise<number>((resolve) => {
        //     resolve(123);
        // }).then( val => {
        //     val.toFixed();
        // } );
    });
};
// 重载
// 上面定义了一个函数的多种不同形态，没有函数体（没有具体的实现），只有结构
// 下面的才是这个函数的具体实现
// 在一个函数中不能去定义两套不一样的参数类型约束
// 1: value 是数字 unit 必须是一个字符串的单位
// 2: value 是字符串的时候，unit 是不存在的
// function method1(value: number, unit: string);
// function method1(value: string);
// function method1(value: any, unit?: any) {
//     console.log(value, unit);
// }
// function method1(value: string) {
//     console.log(value, unit);
// }
// method1( 1, 'px' );
// method1( '100px' );
// method1( '1px', 'px' );


/***/ })

/******/ });
//# sourceMappingURL=index.js.map