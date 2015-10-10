webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	    message: "A is for Apple"
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	    name: "Zaphod Beeblebrox"
	};

/***/ },
/* 3 */
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