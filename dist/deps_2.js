webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(5);
	module.exports = __webpack_require__(6);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	    car: 'Honda Civic'
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	    demo: 'testing 1 2'
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function () {
		var str = [].map.call(arguments, function (str) {
			return str.trim();
		}).filter(function (str) {
			return str.length;
		}).join('-');

		if (!str.length) {
			return '';
		}

		if (str.length === 1 || !(/[_.\- ]+/).test(str) ) {
			if (str[0] === str[0].toLowerCase() && str.slice(1) !== str.slice(1).toLowerCase()) {
				return str;
			}

			return str.toLowerCase();
		}

		return str
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, function (m, p1) {
			return p1.toUpperCase();
		});
	};


/***/ }
]);