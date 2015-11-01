webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(3);
	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var c = __webpack_require__(2);

	module.exports = {
	    message: "A is for Apple" + c.car
	};

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var esprima = __webpack_require__(4);
	console.log(esprima);

	module.exports = {
	    name: "Zaphod Beeblebrox"
	};

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (min, max) {
		if (max === undefined) {
			max = min;
			min = 0;
		}

		if (typeof min !== 'number' || typeof max !== 'number') {
			throw new TypeError('Expected all arguments to be numbers');
		}

		return Math.floor(Math.random() * (max - min + 1) + min);
	};


/***/ }
]);