'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xor = exports.or = exports.and = exports.not = undefined;

var _maybe = require('./maybe');

var not = exports.not = (0, _maybe.maybe1)(function (x) {
  return !x;
});
var and = exports.and = (0, _maybe.maybeN)(function () {
  for (var _len = arguments.length, xs = Array(_len), _key = 0; _key < _len; _key++) {
    xs[_key] = arguments[_key];
  }

  return xs.reduce(function (xs, x) {
    return xs && x;
  });
}, true);
var or = exports.or = (0, _maybe.maybeN)(function () {
  for (var _len2 = arguments.length, xs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    xs[_key2] = arguments[_key2];
  }

  return xs.reduce(function (xs, x) {
    return xs || x;
  });
}, false);
var xor = exports.xor = (0, _maybe.maybe2)(function (x, y) {
  return (x || y) && !(x && y);
});