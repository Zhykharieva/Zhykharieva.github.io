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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/list.json":
/*!****************************!*\
  !*** ./src/data/list.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"_id\":\"60618c79b97bc12dbec866ed\",\"name\":\"Mack Sampson\"},{\"_id\":\"60618c79ea651080267b5e95\",\"name\":\"Santana Wagner\"},{\"_id\":\"60618c7985618a0dcef90469\",\"name\":\"Holly Ferrell\"},{\"_id\":\"60618c795311e4b95074bf64\",\"name\":\"Simone Moreno\"},{\"_id\":\"60618c796ceb55ed88d6377f\",\"name\":\"Galloway Rocha\"},{\"_id\":\"60618c79ff43a11985795e8a\",\"name\":\"Lauri Payne\"},{\"_id\":\"60618c7950b1e7fecd1d5d7f\",\"name\":\"Bessie Steele\"},{\"_id\":\"60618c7915852a375e3581a1\",\"name\":\"Merritt Hayden\"},{\"_id\":\"60618c794c76210da9e77838\",\"name\":\"Beverly Sutton\"},{\"_id\":\"60618c7903660b3c0906f7b8\",\"name\":\"Harding Avery\"},{\"_id\":\"60618c79d4158f1e8eab347b\",\"name\":\"Jewell Ward\"},{\"_id\":\"60618c794f6ef72ee8a57b8f\",\"name\":\"Stephanie Cantrell\"},{\"_id\":\"60618c79e46d48e4e2c91ed1\",\"name\":\"Johanna Ballard\"},{\"_id\":\"60618c7991c52a28ed2238bd\",\"name\":\"Lolita Blackburn\"},{\"_id\":\"60618c79f0a7be201019e79d\",\"name\":\"Dean Singleton\"},{\"_id\":\"60618c79f83c3250cdb46737\",\"name\":\"Berta Dunn\"},{\"_id\":\"60618c79247bc10118947016\",\"name\":\"Kenya Cabrera\"},{\"_id\":\"60618c79e2cbb03458b6f8b1\",\"name\":\"Summers Giles\"},{\"_id\":\"60618c7910838433495eb14c\",\"name\":\"Lupe Tanner\"},{\"_id\":\"60618c79afe5c01065595ad7\",\"name\":\"Trujillo Guthrie\"},{\"_id\":\"60618c799d566ec555303087\",\"name\":\"Hines Tillman\"},{\"_id\":\"60618c79e0ca968faea3d078\",\"name\":\"Charles Workman\"},{\"_id\":\"60618c79ca56312297d420fd\",\"name\":\"Sondra Mathis\"},{\"_id\":\"60618c792c9176ceadcba089\",\"name\":\"Strickland Johns\"},{\"_id\":\"60618c798661b93823650e8e\",\"name\":\"Petersen Navarro\"},{\"_id\":\"60618c79388948e075c86049\",\"name\":\"Ora Trevino\"},{\"_id\":\"60618c79f5747a09a7f87fc3\",\"name\":\"Bonita Velez\"},{\"_id\":\"60618c79ce97722629cdd6df\",\"name\":\"Marlene Holder\"},{\"_id\":\"60618c791dd1bba7ff7725bf\",\"name\":\"Gamble Chapman\"},{\"_id\":\"60618c794459c11cf58e6479\",\"name\":\"Lucile Tyson\"},{\"_id\":\"60618c79fc52e1c5cb50f226\",\"name\":\"Burnett Wilkerson\"},{\"_id\":\"60618c79c7f5080eaf2d53b2\",\"name\":\"Abbott Holman\"},{\"_id\":\"60618c79c47f9b987977ee67\",\"name\":\"Sadie Cox\"},{\"_id\":\"60618c790f0236916f22a782\",\"name\":\"Staci Moses\"},{\"_id\":\"60618c793719011e91f0367c\",\"name\":\"Michael Ellison\"},{\"_id\":\"60618c797579e64f53e1d2a0\",\"name\":\"Frederick Frederick\"},{\"_id\":\"60618c79d1e67038747a3227\",\"name\":\"Schwartz Gibson\"},{\"_id\":\"60618c799d5f1e2fe513be08\",\"name\":\"Shanna Mccarty\"},{\"_id\":\"60618c79f8c13ab58874dc1b\",\"name\":\"Bender Stewart\"},{\"_id\":\"60618c79da4312b0a460475b\",\"name\":\"Zamora Kirby\"},{\"_id\":\"60618c797dcd937770e36e7b\",\"name\":\"Leila Frost\"},{\"_id\":\"60618c791b60cb38353a69fe\",\"name\":\"Bernard Merritt\"},{\"_id\":\"60618c79c968e815bf2bc482\",\"name\":\"Deidre Hudson\"},{\"_id\":\"60618c79e30bb084e48d4362\",\"name\":\"Ruiz Mack\"},{\"_id\":\"60618c79c3dd36e8a457489d\",\"name\":\"Schmidt Osborn\"},{\"_id\":\"60618c791936c19027bcd138\",\"name\":\"Hartman Duran\"},{\"_id\":\"60618c797d7ac06025bf3446\",\"name\":\"Cole Kerr\"},{\"_id\":\"60618c79c597359af3c0c913\",\"name\":\"Santiago Simpson\"},{\"_id\":\"60618c79b0447ee19dc77894\",\"name\":\"Amparo Hurley\"},{\"_id\":\"60618c7960534ba7a304ab49\",\"name\":\"Lorene Norman\"},{\"_id\":\"60618c7941663c6ae48538ba\",\"name\":\"Twila Peterson\"},{\"_id\":\"60618c791f5334a1b5a9a7a2\",\"name\":\"Mara Hines\"},{\"_id\":\"60618c79b71a764ee8b7dca3\",\"name\":\"Velez Ingram\"},{\"_id\":\"60618c7945d4dc164c319643\",\"name\":\"Sharlene Ayers\"},{\"_id\":\"60618c79e1929b7040e02682\",\"name\":\"Catalina Parks\"},{\"_id\":\"60618c799370bddfa714a780\",\"name\":\"Felicia Le\"},{\"_id\":\"60618c7984b041f2062ea9b0\",\"name\":\"Helene Brooks\"},{\"_id\":\"60618c79e81deb817d42db3c\",\"name\":\"Marina Mendoza\"},{\"_id\":\"60618c79241bcada617d9958\",\"name\":\"Duncan Calhoun\"},{\"_id\":\"60618c794bd05e4d9faf8efd\",\"name\":\"Estela Marsh\"},{\"_id\":\"60618c79d2d4be3c1e1a955b\",\"name\":\"Lester Potts\"},{\"_id\":\"60618c79b323ac4b1c86be46\",\"name\":\"Jeannine Knox\"},{\"_id\":\"60618c79d0a19790d4be871f\",\"name\":\"Blanca Valencia\"},{\"_id\":\"60618c794c56bb3a793d7a6a\",\"name\":\"Kim Gray\"},{\"_id\":\"60618c79a7cf700513dfe45a\",\"name\":\"Nash Lawson\"},{\"_id\":\"60618c79daaab382af04a3c0\",\"name\":\"Osborn Kaufman\"},{\"_id\":\"60618c79b373eb705df7c286\",\"name\":\"Barker Patterson\"},{\"_id\":\"60618c7959b415e752535802\",\"name\":\"Cote Erickson\"},{\"_id\":\"60618c799e7f5d9e49caa3dc\",\"name\":\"Frankie Briggs\"},{\"_id\":\"60618c796a9a3f6911b74fda\",\"name\":\"Gilmore Booker\"},{\"_id\":\"60618c79e87280a33a6a46d3\",\"name\":\"Gena Davenport\"},{\"_id\":\"60618c790342274945120c61\",\"name\":\"Frances David\"},{\"_id\":\"60618c79b09c069bbda63295\",\"name\":\"Sharp Strickland\"},{\"_id\":\"60618c79b10dd6fc60578555\",\"name\":\"Shauna Allen\"},{\"_id\":\"60618c79c974168e6e021d3d\",\"name\":\"Harris Bell\"},{\"_id\":\"60618c7970c53dd2272b96da\",\"name\":\"Hardin Underwood\"},{\"_id\":\"60618c7903e71e9978b19956\",\"name\":\"Crystal Carr\"},{\"_id\":\"60618c793206e35c7e0682e3\",\"name\":\"Pearson Cote\"},{\"_id\":\"60618c79af76accb4189bce3\",\"name\":\"Phoebe Chase\"},{\"_id\":\"60618c79e261096179dfeeeb\",\"name\":\"Vance Berg\"},{\"_id\":\"60618c7938296b7e2cc42557\",\"name\":\"Gay Mercer\"},{\"_id\":\"60618c794d1f0da9ecce3ddb\",\"name\":\"Miranda Sullivan\"},{\"_id\":\"60618c79bae60e8fef12fddd\",\"name\":\"Susanna Barber\"},{\"_id\":\"60618c799dd034a332f927a3\",\"name\":\"Jolene Osborne\"},{\"_id\":\"60618c7903781ce166f5fb20\",\"name\":\"Daniels Bailey\"},{\"_id\":\"60618c79e9090b319ce388f4\",\"name\":\"Good Castro\"},{\"_id\":\"60618c792345765f7bb3d584\",\"name\":\"Buchanan Garcia\"},{\"_id\":\"60618c79df3fa15cabf48222\",\"name\":\"Marilyn Maldonado\"},{\"_id\":\"60618c7954755eaec49694fa\",\"name\":\"Klein Allison\"},{\"_id\":\"60618c7981e17e8beb73e913\",\"name\":\"Ayala Aguirre\"},{\"_id\":\"60618c79dfd7a4b50aab4f3c\",\"name\":\"Bertie Cotton\"},{\"_id\":\"60618c799d02a6e0a0672f0c\",\"name\":\"Clarissa Snider\"},{\"_id\":\"60618c79c4c87d930ee168bd\",\"name\":\"Meghan Myers\"},{\"_id\":\"60618c79481eed7436f0df0a\",\"name\":\"Dollie Livingston\"},{\"_id\":\"60618c798f1f31c457517b3a\",\"name\":\"Rodriquez Espinoza\"},{\"_id\":\"60618c79ad8cb1d790c286e8\",\"name\":\"Evelyn Bass\"},{\"_id\":\"60618c793272ce341f60512b\",\"name\":\"Elsa Lowery\"},{\"_id\":\"60618c7988ee1794f449c462\",\"name\":\"Christian Harrell\"},{\"_id\":\"60618c794f911a82347435ec\",\"name\":\"Cohen Case\"}]");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_result_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/result.services */ "./src/services/result.services.js");



Object(_services_result_services__WEBPACK_IMPORTED_MODULE_0__["renderLayout"])();

const selectContainer = document.querySelector('.option-container select');
const numberedList = document.querySelector('ol');
selectContainer.addEventListener('change', () => Object(_services_result_services__WEBPACK_IMPORTED_MODULE_0__["onSelectOption"])(selectContainer, numberedList));




/***/ }),

/***/ "./src/services/result.services.js":
/*!*****************************************!*\
  !*** ./src/services/result.services.js ***!
  \*****************************************/
/*! exports provided: renderLayout, onSelectOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderLayout", function() { return renderLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSelectOption", function() { return onSelectOption; });
/* harmony import */ var _view_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/render.js */ "./src/view/render.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");



let userModel = __webpack_require__(/*! ../data/list.json */ "./src/data/list.json");

const renderLayout = () => {
  Object(_view_render_js__WEBPACK_IMPORTED_MODULE_0__["renderLettersList"])();
  const numberedListElement = document.createElement('ol');
  const mainElement = document.querySelector('.main');
  mainElement.append(numberedListElement);
}

const onSelectOption = (container, numberedListElement) => {
    let currentLetter = container.value;
    if(!currentLetter){
      return  numberedListElement.innerHTML = '';
    }
    let nameList = userModel.slice().filter(item =>  item.name[0] === currentLetter)
    numberedListElement.innerHTML = '';

    if(!nameList.length){
      Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["createMarkdown"])('div', `Any users don't have name with first letter  ${currentLetter}`, numberedListElement)
    }
    nameList.forEach(item => {
      Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["createMarkdown"])('li', item.name, numberedListElement);
    })
}




/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: generateRandomLetters, createMarkdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomLetters", function() { return generateRandomLetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarkdown", function() { return createMarkdown; });
const FIRST_SYMBOL_NUMBER = 97;
const SYMBOL_QUANTITY = 25;

const  generateRandomCharacter = () => {
  return  String.fromCharCode(Math.trunc(Math.random()*SYMBOL_QUANTITY+FIRST_SYMBOL_NUMBER));
};

const  generateRandomLetters = (arrLength) => {
    let uniqueList = [];
    while(uniqueList.length < arrLength){
        let letter = generateRandomCharacter().toUpperCase();

        if(uniqueList.indexOf(letter) === -1) {
            uniqueList.push(letter);
        }
    }
    return uniqueList
  }

  const  createMarkdown = (elem, text, container) => {
    const createdElement = document.createElement(elem);
    createdElement.innerText = text
    container.append(createdElement)
  };


/***/ }),

/***/ "./src/view/render.js":
/*!****************************!*\
  !*** ./src/view/render.js ***!
  \****************************/
/*! exports provided: renderLettersList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderLettersList", function() { return renderLettersList; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const LETTERS_QUANTITY = 5;

const renderLettersList = () => {
    const mainElement = document.querySelector('.main');
    mainElement.innerHTML = '';
    const selectElementContainer = document.createElement('div');
    selectElementContainer.className = 'option-container';
    const select = document.createElement('select');
    const lettersList = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomLetters"])(LETTERS_QUANTITY);
    const emtyOption = new Option('', '');
      emtyOption.className = 'letter-select';
      select.prepend(emtyOption);
    lettersList.forEach(letter => {
      const letterSelect = new Option(letter, letter);
      letterSelect.className = 'letter-select'
      letterSelect.innerText= `${letter}`
      select.append(letterSelect);
    } );
    selectElementContainer.append(select);
    mainElement.append(selectElementContainer)
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map