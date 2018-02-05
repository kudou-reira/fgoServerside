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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var FETCH_TEST = exports.FETCH_TEST = 'fetch_test';
var FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';
var INITIAL_CARDS = exports.INITIAL_CARDS = 'search_cards';
var SEARCH_QUERY = exports.SEARCH_QUERY = 'search_query';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.scrapeQuery = exports.searchBarInitialize = exports.fetchCurrentUser = exports.fetchAdmins = exports.fetchUsers = undefined;

var _axios = __webpack_require__(9);

var _axios2 = _interopRequireDefault(_axios);

var _types = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchUsers = exports.fetchUsers = function fetchUsers() {
	return function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, axiosInstance) {
			var res;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return _axios2.default.get('http://localhost:5000/users');

						case 2:
							res = _context.sent;


							dispatch({
								type: _types.FETCH_USERS,
								payload: res.data
							});

						case 4:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		return function (_x, _x2, _x3) {
			return _ref.apply(this, arguments);
		};
	}();
};

var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, axiosInstance) {
			var res;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return axiosInstance.get('http://localhost:5000/admins', { withCredentials: true });

						case 2:
							res = _context2.sent;


							dispatch({
								type: _types.FETCH_ADMINS,
								payload: res.data
							});

						case 4:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined);
		}));

		return function (_x4, _x5, _x6) {
			return _ref2.apply(this, arguments);
		};
	}();
};

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
	return function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, axiosInstance) {
			var res;
			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.next = 2;
							return axiosInstance.get('http://localhost:5000/api/current_user');

						case 2:
							res = _context3.sent;


							dispatch({
								type: _types.FETCH_CURRENT_USER,
								payload: res.data
							});

						case 4:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, undefined);
		}));

		return function (_x7, _x8, _x9) {
			return _ref3.apply(this, arguments);
		};
	}();
};

var searchBarInitialize = exports.searchBarInitialize = function searchBarInitialize(name) {
	return function (dispatch) {
		_axios2.default.get('http://localhost:8080/testGoApi', {
			params: {
				name: name
			}
		}).then(function (_ref4) {
			var data = _ref4.data;

			dispatch({
				type: _types.INITIAL_CARDS,
				payload: data
			});
		});
	};
};

var scrapeQuery = exports.scrapeQuery = function scrapeQuery(cardType, pageLink) {
	return function (dispatch) {
		_axios2.default.get('http://localhost:8080/fetchCard', {
			params: {
				cardType: cardType,
				pageLink: pageLink
			}
		}).then(function (_ref5) {
			var data = _ref5.data;

			dispatch({
				type: _types.SEARCH_QUERY,
				payload: data
			});
		});
	};
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(4);

var _header = __webpack_require__(7);

var _header2 = _interopRequireDefault(_header);

var _actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// class App extends Component {

// 	render() {
// 		{console.log(this.props.route.routes)}
// 		return(
// 			<div>
// 				<Header />
// 				{renderRoutes(this.props.route.routes)}
// 			</div>
// 		);
// 	}
// }

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'full' },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_header2.default, null),
					_react2.default.createElement(
						'div',
						null,
						(0, _reactRouterConfig.renderRoutes)(this.props.route.routes)
					)
				)
			);
		}
	}]);

	return App;
}(_react.Component);

;

function loadData(store) {
	return store.dispatch((0, _actions.fetchCurrentUser)());
}

exports.default = {
	component: App,
	loadData: loadData
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AppBar = __webpack_require__(22);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _IconButton = __webpack_require__(23);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FlatButton = __webpack_require__(24);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = __webpack_require__(8);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(5);

var _colors = __webpack_require__(25);

var _google = __webpack_require__(26);

var _google2 = _interopRequireDefault(_google);

var _facebook = __webpack_require__(27);

var _facebook2 = _interopRequireDefault(_facebook);

var _twitter = __webpack_require__(28);

var _twitter2 = _interopRequireDefault(_twitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'handleTouchTap',
		value: function handleTouchTap() {
			alert('onClick triggered on the title component');
		}
	}, {
		key: 'renderContent',
		value: function renderContent() {
			var styles = {
				title: {
					cursor: 'pointer'
				},
				color: {
					backgroundColor: _colors.blueGrey900
				}
			};

			var style = {
				marginTop: 6,
				marginBottom: 6,
				marginLeft: 13,
				marginRight: 13
			};

			switch (this.props.auth) {
				case null:
					return;
				case false:
					return _react2.default.createElement(_AppBar2.default, {
						title: _react2.default.createElement(
							'span',
							{ style: styles.title },
							'Fate/Grand Order View'
						),
						style: { backgroundColor: _colors.blueGrey900 },
						titleStyle: styles.color,
						showMenuIconButton: false,
						iconElementRight: _react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(_RaisedButton2.default, {
								icon: _react2.default.createElement(_google2.default, { style: { marginTop: 5 } }),
								style: style,
								href: "/auth/google"
							}),
							_react2.default.createElement(_RaisedButton2.default, {
								icon: _react2.default.createElement(_facebook2.default, { style: { marginTop: 5 } }),
								style: style,
								href: "/auth/facebook"
							}),
							_react2.default.createElement(_RaisedButton2.default, {
								icon: _react2.default.createElement(_twitter2.default, { style: { marginTop: 5 } }),
								style: style,
								href: "/auth/twitter"
							})
						)
					});
				default:
					return _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_AppBar2.default, {
							title: _react2.default.createElement(
								'span',
								{ style: styles.title },
								'Fate/Grand Order View'
							),
							style: { backgroundColor: _colors.blueGrey900 },
							titleStyle: styles.color,
							showMenuIconButton: false,
							iconElementRight: _react2.default.createElement(_FlatButton2.default, {
								label: 'Logout',
								href: "/api/logout"
							})
						})
					);
			}
		}
	}, {
		key: 'renderEmailSignup',
		value: function renderEmailSignup() {
			switch (this.props.auth) {
				case null:
					return;
				case false:
					return _react2.default.createElement(
						'div',
						null,
						'sign up here with email'
					);
				default:
					return;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'header should be here',
				this.renderContent()
			);
		}
	}]);

	return Header;
}(_react.Component);

function loadData(store) {
	return store.dispatch(fetchCurrentUser());
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Header);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(3);

var _reactHelmet = __webpack_require__(11);

var _windowOrGlobal = __webpack_require__(29);

var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);

var _reactGridLayout = __webpack_require__(30);

var _reactGridLayout2 = _interopRequireDefault(_reactGridLayout);

var _header = __webpack_require__(7);

var _header2 = _interopRequireDefault(_header);

var _savedTeams = __webpack_require__(31);

var _savedTeams2 = _interopRequireDefault(_savedTeams);

var _searchbar = __webpack_require__(32);

var _searchbar2 = _interopRequireDefault(_searchbar);

var _dailyWindow = __webpack_require__(35);

var _dailyWindow2 = _interopRequireDefault(_dailyWindow);

var _recentSearch = __webpack_require__(36);

var _recentSearch2 = _interopRequireDefault(_recentSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
	__webpack_require__(37);
	__webpack_require__(40);
	// var styles = require('./layout/index.css');
}

var ResponsiveReactGridLayout = (0, _reactGridLayout.WidthProvider)(_reactGridLayout.Responsive);

var UsersPage = function (_Component) {
	_inherits(UsersPage, _Component);

	function UsersPage() {
		_classCallCheck(this, UsersPage);

		var _this = _possibleConstructorReturn(this, (UsersPage.__proto__ || Object.getPrototypeOf(UsersPage)).call(this));

		_this.state = {
			widthWindow: '0',
			heightWindow: '0'
		};

		_this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
		return _this;
	}

	_createClass(UsersPage, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.updateWindowDimensions();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			// this.props.fetchUser();
			// window.addEventListener('resize', this.updateWindowDimensions);
			this.props.fetchUsers();
			_windowOrGlobal2.default.addEventListener('resize', this.updateWindowDimensions);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			// window.removeEventListener('resize', this.updateWindowDimensions);
			_windowOrGlobal2.default.removeEventListener('resize', this.updateWindowDimensions);
		}
	}, {
		key: 'updateWindowDimensions',
		value: function updateWindowDimensions() {
			var w = window,
			    d = document,
			    documentElement = d.documentElement,
			    body = d.getElementsByTagName('body')[0],
			    width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
			    height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

			this.setState({ widthWindow: width, heightWindow: height });
		}
	}, {
		key: 'renderUsers',
		value: function renderUsers() {
			return this.props.users.map(function (user) {
				return _react2.default.createElement(
					'li',
					{ key: user.id },
					user.name
				);
			});
		}
	}, {
		key: 'head',
		value: function head() {
			return _react2.default.createElement(
				_reactHelmet.Helmet,
				null,
				_react2.default.createElement(
					'title',
					null,
					'Users app'
				),
				_react2.default.createElement('meta', { property: 'og:title', content: 'Users app' })
			);
		}
	}, {
		key: 'render',
		value: function render() {

			var layout = [{ i: 'searchbar', x: 9, y: 0, w: 3, h: 4 }, { i: 'savedTeams', x: 9, y: 7, w: 3, h: 3 }, { i: 'dailyWindow', x: 0, y: 0, w: 5, h: 6 }, { i: 'recentSearch', x: 9, y: 4, w: 3, h: 3 }];

			return _react2.default.createElement(
				'div',
				null,
				this.head(),
				_react2.default.createElement(
					'div',
					{ className: 'full' },
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(_searchbar2.default, null)
						),
						_react2.default.createElement(
							_reactGridLayout2.default,
							{
								className: 'layout',
								layout: layout,
								cols: 12,
								rowHeight: 30,
								width: this.state.widthWindow
							},
							_react2.default.createElement(
								'div',
								{ key: 'savedTeams' },
								_react2.default.createElement(_savedTeams2.default, null)
							),
							_react2.default.createElement(
								'div',
								{ key: 'dailyWindow' },
								_react2.default.createElement(_dailyWindow2.default, null)
							),
							_react2.default.createElement(
								'div',
								{ key: 'recentSearch' },
								_react2.default.createElement(_recentSearch2.default, null)
							)
						)
					)
				)
			);
		}
	}]);

	return UsersPage;
}(_react.Component);

function mapStateToProps(state) {
	return {
		users: state.users
	};
}

//use this to fetch data
function loadData(store) {
	return store.dispatch((0, _actions.fetchUsers)());
}

exports.default = {
	loadData: loadData,
	component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersPage)
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(39);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
	var _ref$staticContext = _ref.staticContext,
	    staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

	staticContext.notFound = true;
	return _react2.default.createElement(
		'h1',
		null,
		'Route not found'
	);
};

exports.default = {
	component: NotFoundPage
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(3);

var _requireAuth = __webpack_require__(42);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminsListPage = function (_Component) {
	_inherits(AdminsListPage, _Component);

	function AdminsListPage() {
		_classCallCheck(this, AdminsListPage);

		return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
	}

	_createClass(AdminsListPage, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchAdmins();
		}
	}, {
		key: 'renderAdmins',
		value: function renderAdmins() {
			return this.props.admins.map(function (admin) {
				return _react2.default.createElement(
					'li',
					{ key: admin.id },
					admin.name
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h3',
					null,
					'Protected list of admins'
				),
				_react2.default.createElement(
					'ul',
					null,
					this.renderAdmins()
				)
			);
		}
	}]);

	return AdminsListPage;
}(_react.Component);

function mapStateToProps(state) {
	return {
		admins: state.admins
	};
}

function loadData(store) {
	return store.dispatch((0, _actions.fetchAdmins)());
}

exports.default = {
	component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })((0, _requireAuth2.default)(AdminsListPage)),
	loadData: loadData
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

var _express = __webpack_require__(19);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(4);

var _expressHttpProxy = __webpack_require__(20);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(21);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(43);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(49);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var proxy2 = __webpack_require__(56); // const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/home').default;

//polyfill gives babel methods

var cors = __webpack_require__(57);

var _require = __webpack_require__(58),
    JSDOM = _require.JSDOM;

var app = (0, _express2.default)();

// if (typeof(window) == 'undefined'){
//     global.window = new Object();
// }

process.env.BROWSER = false;
var dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost' });
global.window = dom.window;
global.document = window.document;
// global.navigator = window.navigator;

// global.navigator = global.navigator || {};
// global.navigator.userAgent = global.navigator.userAgent || 'all';

app.use(cors());

var apiProxy = proxy2('/api', { target: 'http://localhost:5000' });
var authProxy = proxy2('/auth', { target: 'http://localhost:5000' });
app.use(apiProxy);
app.use(authProxy);

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {

	var store = (0, _createStore2.default)(req);
	// do all the store outside of renderer
	var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
		var route = _ref.route;

		return route.loadData ? route.loadData(store) : null;
	}).map(function (promise) {
		if (promise) {
			return new Promise(function (resolve, reject) {
				promise.then(resolve).catch(resolve);
			});
		}
	});

	//promise all is a native function that takes an array of promises and returns one single array
	Promise.all(promises).then(function () {
		var context = {};
		var content = (0, _renderer2.default)(req, store, context);

		console.log(context);
		if (context.url) {
			return res.redirect(301, context.url);
		}

		if (context.notFound) {
			res.status(404);
		}

		// initialize and load data into store
		res.send(content);
	});
});

app.listen(3000, function () {
	console.log('listening on port 3000');
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _app = __webpack_require__(6);

var _app2 = _interopRequireDefault(_app);

var _usersPage = __webpack_require__(10);

var _usersPage2 = _interopRequireDefault(_usersPage);

var _notFoundPage = __webpack_require__(14);

var _notFoundPage2 = _interopRequireDefault(_notFoundPage);

var _adminsPage = __webpack_require__(15);

var _adminsPage2 = _interopRequireDefault(_adminsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default () => {
// 	return (
// 		<div>
// 			<Route exact path ='/' component={Home} />
// 			<Route path="/hi" component={() => 'Hi'} />
// 			<Route path="/users" component={UsersList} />
// 		</div>
// 	)
// }

exports.default = [_extends({}, _app2.default, {
	routes: [_extends({
		path: '/'
	}, _usersPage2.default, {
		exact: true
	}), _extends({
		path: '/admin'
	}, _adminsPage2.default), _extends({}, _notFoundPage2.default)]
})];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("material-ui/FlatButton");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("material-ui-community-icons/icons/google");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("material-ui-community-icons/icons/facebook");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("material-ui-community-icons/icons/twitter");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("window-or-global");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-grid-layout");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SavedTeams = function (_Component) {
	_inherits(SavedTeams, _Component);

	function SavedTeams() {
		_classCallCheck(this, SavedTeams);

		return _possibleConstructorReturn(this, (SavedTeams.__proto__ || Object.getPrototypeOf(SavedTeams)).apply(this, arguments));
	}

	_createClass(SavedTeams, [{
		key: 'renderContent',
		value: function renderContent() {
			switch (this.props.auth) {
				case null:
					return;
				case false:
					return _react2.default.createElement(
						'div',
						null,
						'you are not logged in!'
					);
				default:
					return _react2.default.createElement(
						'div',
						null,
						'here are your savedTeams'
					);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				this.renderContent()
			);
		}
	}]);

	return SavedTeams;
}(_react.Component);

exports.default = SavedTeams;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(8);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reactSelect = __webpack_require__(33);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
	__webpack_require__(34);
	// var styles = require('../layout/index.css');
}

var SearchBar = function (_Component) {
	_inherits(SearchBar, _Component);

	function SearchBar() {
		_classCallCheck(this, SearchBar);

		var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this));

		_this.state = {
			searchLink: '',
			placeholder: 'Search for servant or ce'
		};

		_this.buttonClicked = _this.buttonClicked.bind(_this);
		_this.onInputChange = _this.onInputChange.bind(_this);
		return _this;
	}

	_createClass(SearchBar, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.searchBarInitialize("fgo");
		}
	}, {
		key: 'buttonClicked',
		value: function buttonClicked() {
			// console.log("i was clicked");
			// this.props.scrapeQuery("fgo");
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(val) {
			var _this2 = this;

			this.setState({
				searchLink: val.value
			}, function () {
				var cardParams = _this2.checkCardParams(_this2.state.searchLink);

				_this2.props.scrapeQuery(cardParams.cardType, _this2.state.searchLink);
				_this2.setState({
					placeholder: '' + cardParams.engName
				});
			});
		}
	}, {
		key: 'checkCardParams',
		value: function checkCardParams(card) {
			var servantCard;
			var ceCard;
			servantCard = this.props.search.initialResults.Results.servants.filter(function (query) {
				return query.pageLink === card;
			});

			if (servantCard.length < 1) {
				ceCard = this.props.search.initialResults.Results.ce.filter(function (query) {
					return query.pageLink === card;
				});
				return ceCard[0];
			} else {
				return servantCard[0];
			}
		}
	}, {
		key: 'renderSearchBar',
		value: function renderSearchBar() {
			// on component mount, do the fetching and searching and pass in the json with all the names of CEs and servants
			// use regex to narrow down the choices and display them as results in the dropdown

			var tempServants = [];
			var tempCE = [];
			var options = [{ value: 0, label: 'Loading craft essences and servants...' }];

			if (this.props.search.initialResults !== null) {
				tempServants = this.props.search.initialResults.Results.servants.map(function (servant) {
					return {
						value: servant.pageLink,
						label: _react2.default.createElement(
							'div',
							{ className: 'searchContainer' },
							_react2.default.createElement(
								'div',
								{ className: 'equalHMWrap eqWrap' },
								_react2.default.createElement(
									'div',
									{ className: 'equalHM' },
									_react2.default.createElement('img', { src: servant.icon })
								),
								_react2.default.createElement(
									'div',
									{ className: 'equalMid' },
									servant.engName,
									' ',
									_react2.default.createElement('br', null),
									servant.jpName
								),
								_react2.default.createElement(
									'div',
									{ className: 'equalHM' },
									_react2.default.createElement(
										'div',
										{ className: 'vert' },
										servant.rarity
									)
								)
							)
						)
					};
				});

				tempCE = this.props.search.initialResults.Results.ce.map(function (ce) {
					return {
						value: ce.pageLink,
						label: _react2.default.createElement(
							'div',
							{ className: 'searchContainer' },
							_react2.default.createElement(
								'div',
								{ className: 'equalHMWrap eqWrap' },
								_react2.default.createElement(
									'div',
									{ className: 'equalHM' },
									_react2.default.createElement('img', { src: ce.icon })
								),
								_react2.default.createElement(
									'div',
									{ className: 'equalMid' },
									ce.engName
								),
								_react2.default.createElement(
									'div',
									{ className: 'equalHM' },
									_react2.default.createElement(
										'div',
										{ className: 'vert' },
										ce.rarity
									)
								)
							)
						)
					};
				});

				options = tempServants.concat(tempCE);
			}

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'bind' },
					_react2.default.createElement(_reactSelect2.default, {
						name: 'form-field-name',
						placeholder: this.state.placeholder,
						options: options,
						onChange: this.onInputChange
					})
				)
			);
		}

		// change this to fire an action

	}, {
		key: 'renderSearchProps',
		value: function renderSearchProps() {
			if (this.props.search.results !== null) {
				return _react2.default.createElement(
					'div',
					null,
					'Your returned props value from go API is valid.'
				);
			}
		}

		//how to center within the rnd component

	}, {
		key: 'render',
		value: function render() {

			var style = {
				marginTop: 6,
				marginBottom: 6,
				marginLeft: 13,
				marginRight: 13
			};

			return _react2.default.createElement(
				'div',
				{ className: 'boxBorder' },
				'this is SearchBar',
				this.renderSearchBar(),
				_react2.default.createElement(_RaisedButton2.default, {
					label: 'default',
					style: style,
					onClick: this.buttonClicked
				})
			);
		}
	}]);

	return SearchBar;
}(_react.Component);

function mapStateToProps(state) {
	return {
		search: state.search
	};
}

function loadData(store) {
	return store.dispatch(searchBar);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { searchBarInitialize: _actions.searchBarInitialize, scrapeQuery: _actions.scrapeQuery })(SearchBar);

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-select/dist/react-select.css");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DailyWindow = function (_Component) {
	_inherits(DailyWindow, _Component);

	function DailyWindow() {
		_classCallCheck(this, DailyWindow);

		return _possibleConstructorReturn(this, (DailyWindow.__proto__ || Object.getPrototypeOf(DailyWindow)).apply(this, arguments));
	}

	_createClass(DailyWindow, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'this is the daily window'
			);
		}
	}]);

	return DailyWindow;
}(_react.Component);

exports.default = DailyWindow;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecentSearch = function (_Component) {
	_inherits(RecentSearch, _Component);

	function RecentSearch() {
		_classCallCheck(this, RecentSearch);

		return _possibleConstructorReturn(this, (RecentSearch.__proto__ || Object.getPrototypeOf(RecentSearch)).apply(this, arguments));
	}

	_createClass(RecentSearch, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Recently searched'
			);
		}
	}]);

	return RecentSearch;
}(_react.Component);

exports.default = RecentSearch;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./styles.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(undefined);
// imports


// module
exports.push([module.i, ".react-grid-layout {\n  position: relative;\n  transition: height 200ms ease;\n}\n.react-grid-item {\n  transition: all 200ms ease;\n  transition-property: left, top;\n}\n.react-grid-item.cssTransforms {\n  transition-property: transform;\n}\n.react-grid-item.resizing {\n  z-index: 1;\n  will-change: width, height;\n}\n\n.react-grid-item.react-draggable-dragging {\n  transition: none;\n  z-index: 3;\n  will-change: transform;\n}\n\n.react-grid-item.react-grid-placeholder {\n  background: red;\n  opacity: 0.2;\n  transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.react-grid-item > .react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: 0;\n  right: 0;\n  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  cursor: se-resize;\n}\n", ""]);

// exports


/***/ }),
/* 39 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./styles.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(undefined);
// imports


// module
exports.push([module.i, ".react-resizable {\n  position: relative;\n}\n.react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: 0;\n  right: 0;\n  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  cursor: se-resize;\n}\n", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
	var RequireAuth = function (_Component) {
		_inherits(RequireAuth, _Component);

		function RequireAuth() {
			_classCallCheck(this, RequireAuth);

			return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
		}

		_createClass(RequireAuth, [{
			key: 'render',
			value: function render() {
				switch (this.props.auth) {
					case false:
						return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
					case null:
						return _react2.default.createElement(
							'div',
							null,
							'Loading...'
						);
					default:
						return _react2.default.createElement(ChildComponent, this.props);
				}
			}
		}]);

		return RequireAuth;
	}(_react.Component);

	function mapStateToProps(state) {
		return {
			auth: state.auth
		};
	}

	return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(44);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(4);

var _serializeJavascript = __webpack_require__(45);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(11);

var _routes = __webpack_require__(46);

var _routes2 = _interopRequireDefault(_routes);

var _getMuiTheme = __webpack_require__(47);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = __webpack_require__(48);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {

	global.navigator = {
		userAgent: req.headers['user-agent']
	};

	var muiTheme = (0, _getMuiTheme2.default)({ userAgent: req.headers['user-agent'] });

	var content = (0, _server.renderToString)(_react2.default.createElement(
		_MuiThemeProvider2.default,
		{ muiTheme: muiTheme },
		_react2.default.createElement(
			_reactRedux.Provider,
			{ store: store },
			_react2.default.createElement(
				_reactRouterDom.StaticRouter,
				{ location: req.path, context: context },
				_react2.default.createElement(
					'div',
					null,
					(0, _reactRouterConfig.renderRoutes)(_routes2.default)
				)
			)
		)
	));

	var helmet = _reactHelmet.Helmet.renderStatic();

	// 				<link rel="stylesheet" href="./layout/index.css">

	return '\n\t\t<html>\n\t\t\t<head>\n\t\t\t\t' + helmet.title.toString() + '\n\t\t\t\t' + helmet.meta.toString() + '\n\t\t\t\t<meta charset="utf-8">\n\t\t\t    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n\t\t\t    <meta name="theme-color" content="#000000">\n\t\t\t\t<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">\n\t\t\t\t<link rel="stylesheet" href="./index.css">\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<div id="root">' + content + '</div>\n\t\t\t\t<script>\n\t\t\t\t\twindow.INITIAL_STATE = ' + JSON.stringify(store.getState()) + '\n\t\t\t\t</script>\n\t\t\t\t<script src="bundle.js"></script>\n\t\t\t</body>\n\t\t</html>\n\t';
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _app = __webpack_require__(6);

var _app2 = _interopRequireDefault(_app);

var _usersPage = __webpack_require__(10);

var _usersPage2 = _interopRequireDefault(_usersPage);

var _notFoundPage = __webpack_require__(14);

var _notFoundPage2 = _interopRequireDefault(_notFoundPage);

var _adminsPage = __webpack_require__(15);

var _adminsPage2 = _interopRequireDefault(_adminsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default () => {
// 	return (
// 		<div>
// 			<Route exact path ='/' component={Home} />
// 			<Route path="/hi" component={() => 'Hi'} />
// 			<Route path="/users" component={UsersList} />
// 		</div>
// 	)
// }

exports.default = [_extends({}, _app2.default, {
	routes: [_extends({
		path: '/'
	}, _usersPage2.default, {
		exact: true
	}), _extends({
		path: '/admin'
	}, _adminsPage2.default), _extends({}, _notFoundPage2.default)]
})];

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(16);

var _reduxThunk = __webpack_require__(50);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(9);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(51);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {

	var axiosInstance = _axios2.default.create({
		baseURL: 'http://localhost:5000',
		headers: { cookie: req.get('cookie') || '' }
	});

	var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

	return store;
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(16);

var _usersReducer = __webpack_require__(52);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = __webpack_require__(53);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminsReducer = __webpack_require__(54);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

var _searchReducer = __webpack_require__(55);

var _searchReducer2 = _interopRequireDefault(_searchReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	users: _usersReducer2.default,
	auth: _authReducer2.default,
	admins: _adminsReducer2.default,
	search: _searchReducer2.default
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _types = __webpack_require__(2);

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case _types.FETCH_USERS:
			return action.payload;
		default:
			return state;
	}
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var action = arguments[1];

	switch (action.type) {
		case _types.FETCH_CURRENT_USER:
			return action.payload || false;
		default:
			return state;
	}
};

var _types = __webpack_require__(2);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _types = __webpack_require__(2);

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case _types.FETCH_ADMINS:
			return action.payload;
		default:
			return state;
	}
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	var action = arguments[1];

	// console.log(action);
	switch (action.type) {
		case _types.INITIAL_CARDS:
			return _extends({}, state, { initialResults: action.payload });
		case _types.SEARCH_QUERY:
			return _extends({}, state, { queryResult: action.payload });
		default:
			return state;
	}
};

var _types = __webpack_require__(2);

var INITIAL_STATE = {
	initialResults: null,
	queryResult: null
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("jsdom");

/***/ })
/******/ ]);