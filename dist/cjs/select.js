'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-14c82365.js');
require('./helpers.js');
require('./chunk-60255743.js');
require('./chunk-f15fa0c2.js');
require('./chunk-16a405b8.js');
var __chunk_5 = require('./chunk-13e039f5.js');
var __chunk_15 = require('./chunk-75057ab0.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_15.Select);
  }
};
__chunk_5.use(Plugin);

exports.BSelect = __chunk_15.Select;
exports.default = Plugin;