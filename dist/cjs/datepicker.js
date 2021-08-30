'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-14c82365.js');
require('./helpers.js');
require('./chunk-60255743.js');
require('./chunk-f15fa0c2.js');
require('./chunk-16a405b8.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-e2eb88e7.js');
require('./chunk-0710a23f.js');
require('./chunk-ae7e641a.js');
require('./chunk-f52dc3e6.js');
require('./chunk-53cabd25.js');
require('./chunk-75057ab0.js');
var __chunk_16 = require('./chunk-f34ffbe3.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_16.Datepicker);
  }
};
__chunk_5.use(Plugin);

exports.BDatepicker = __chunk_16.Datepicker;
exports.default = Plugin;
