"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var maybe1 = exports.maybe1 = function maybe1(f) {
  return function (x) {
    return x === undefined ? undefined : f(x);
  };
};
var maybe2 = exports.maybe2 = function maybe2(f) {
  return function (x, y) {
    return x === undefined || y === undefined ? undefined : f(x, y);
  };
};
var maybeN = exports.maybeN = function maybeN(f) {
  return function () {
    for (var _len = arguments.length, xs = Array(_len), _key = 0; _key < _len; _key++) {
      xs[_key] = arguments[_key];
    }

    console.log(JSON.stringify(xs));
    var terms = xs.slice(0, xs.length - 1);
    var r = terms.reduce(function (ts, t) {
      return ts === undefined || t === undefined ? undefined : ts;
    }, terms);
    return r === undefined ? undefined : f.apply(undefined, _toConsumableArray(terms));
  };
};