'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-14c82365.js');
var helpers = require('./helpers.js');
var __chunk_2 = require('./chunk-60255743.js');
require('./chunk-f15fa0c2.js');
require('./chunk-16a405b8.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-e2eb88e7.js');
require('./chunk-c32dd7a9.js');
var autocomplete = require('./autocomplete.js');
var button = require('./button.js');
require('./chunk-0710a23f.js');
var carousel = require('./carousel.js');
require('./chunk-1f7d7e31.js');
require('./chunk-0e165b6d.js');
var checkbox = require('./checkbox.js');
var collapse = require('./collapse.js');
require('./chunk-47a14d84.js');
require('./chunk-ae7e641a.js');
require('./chunk-f52dc3e6.js');
require('./chunk-53cabd25.js');
var clockpicker = require('./clockpicker.js');
require('./chunk-75057ab0.js');
require('./chunk-f34ffbe3.js');
var datepicker = require('./datepicker.js');
require('./chunk-49389e76.js');
var datetimepicker = require('./datetimepicker.js');
require('./chunk-8c4fd0fd.js');
var dialog = require('./dialog.js');
var dropdown = require('./dropdown.js');
var field = require('./field.js');
var icon = require('./icon.js');
var image = require('./image.js');
var input = require('./input.js');
require('./chunk-f1df1c63.js');
require('./chunk-0f2c3ac4.js');
var loading = require('./loading.js');
var menu = require('./menu.js');
require('./chunk-d1be3c8a.js');
var message = require('./message.js');
var modal = require('./modal.js');
var notification = require('./notification.js');
require('./chunk-57008e43.js');
var navbar = require('./navbar.js');
var numberinput = require('./numberinput.js');
require('./chunk-d41a9d04.js');
var pagination = require('./pagination.js');
var progress = require('./progress.js');
var radio = require('./radio.js');
var rate = require('./rate.js');
var select = require('./select.js');
var skeleton = require('./skeleton.js');
var sidebar = require('./sidebar.js');
require('./chunk-402fb43f.js');
var slider = require('./slider.js');
var snackbar = require('./snackbar.js');
require('./chunk-b4c84266.js');
require('./chunk-2271b0f8.js');
var steps = require('./steps.js');
var _switch = require('./switch.js');
var table = require('./table.js');
var tabs = require('./tabs.js');
require('./chunk-cd81a7d4.js');
var tag = require('./tag.js');
var taginput = require('./taginput.js');
var timepicker = require('./timepicker.js');
var toast = require('./toast.js');
var tooltip = require('./tooltip.js');
var upload = require('./upload.js');
var config = require('./config.js');



var components = /*#__PURE__*/Object.freeze({
    Autocomplete: autocomplete.default,
    Button: button.default,
    Carousel: carousel.default,
    Checkbox: checkbox.default,
    Clockpicker: clockpicker.default,
    Collapse: collapse.default,
    Datepicker: datepicker.default,
    Datetimepicker: datetimepicker.default,
    Dialog: dialog.default,
    Dropdown: dropdown.default,
    Field: field.default,
    Icon: icon.default,
    Image: image.default,
    Input: input.default,
    Loading: loading.default,
    Menu: menu.default,
    Message: message.default,
    Modal: modal.default,
    Navbar: navbar.default,
    Notification: notification.default,
    Numberinput: numberinput.default,
    Pagination: pagination.default,
    Progress: progress.default,
    Radio: radio.default,
    Rate: rate.default,
    Select: select.default,
    Skeleton: skeleton.default,
    Sidebar: sidebar.default,
    Slider: slider.default,
    Snackbar: snackbar.default,
    Steps: steps.default,
    Switch: _switch.default,
    Table: table.default,
    Tabs: tabs.default,
    Tag: tag.default,
    Taginput: taginput.default,
    Timepicker: timepicker.default,
    Toast: toast.default,
    Tooltip: tooltip.default,
    Upload: upload.default
});

var Buefy = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    __chunk_2.setVueInstance(Vue); // Options

    __chunk_2.setOptions(helpers.merge(__chunk_2.config, options, true)); // Components

    for (var componentKey in components) {
      Vue.use(components[componentKey]);
    } // Config component


    __chunk_5.registerComponentProgrammatic(Vue, 'config', config.default);
  }
};
__chunk_5.use(Buefy);

exports.bound = helpers.bound;
exports.createAbsoluteElement = helpers.createAbsoluteElement;
exports.createNewEvent = helpers.createNewEvent;
exports.escapeRegExpChars = helpers.escapeRegExpChars;
exports.getMonthNames = helpers.getMonthNames;
exports.getValueByPath = helpers.getValueByPath;
exports.getWeekdayNames = helpers.getWeekdayNames;
exports.hasFlag = helpers.hasFlag;
exports.indexOf = helpers.indexOf;
exports.isCustomElement = helpers.isCustomElement;
exports.isDefined = helpers.isDefined;
exports.isMobile = helpers.isMobile;
exports.isVueComponent = helpers.isVueComponent;
exports.isWebpSupported = helpers.isWebpSupported;
exports.matchWithGroups = helpers.matchWithGroups;
exports.merge = helpers.merge;
exports.mod = helpers.mod;
exports.multiColumnSort = helpers.multiColumnSort;
exports.removeElement = helpers.removeElement;
exports.sign = helpers.sign;
exports.toCssWidth = helpers.toCssWidth;
exports.Autocomplete = autocomplete.default;
exports.Button = button.default;
exports.Carousel = carousel.default;
exports.Checkbox = checkbox.default;
exports.Collapse = collapse.default;
exports.Clockpicker = clockpicker.default;
exports.Datepicker = datepicker.default;
exports.Datetimepicker = datetimepicker.default;
exports.Dialog = dialog.default;
exports.DialogProgrammatic = dialog.DialogProgrammatic;
exports.Dropdown = dropdown.default;
exports.Field = field.default;
exports.Icon = icon.default;
exports.Image = image.default;
exports.Input = input.default;
exports.Loading = loading.default;
exports.LoadingProgrammatic = loading.LoadingProgrammatic;
exports.Menu = menu.default;
exports.Message = message.default;
exports.Modal = modal.default;
exports.ModalProgrammatic = modal.ModalProgrammatic;
exports.Notification = notification.default;
exports.NotificationProgrammatic = notification.NotificationProgrammatic;
exports.Navbar = navbar.default;
exports.Numberinput = numberinput.default;
exports.Pagination = pagination.default;
exports.Progress = progress.default;
exports.Radio = radio.default;
exports.Rate = rate.default;
exports.Select = select.default;
exports.Skeleton = skeleton.default;
exports.Sidebar = sidebar.default;
exports.Slider = slider.default;
exports.Snackbar = snackbar.default;
exports.SnackbarProgrammatic = snackbar.SnackbarProgrammatic;
exports.Steps = steps.default;
exports.Switch = _switch.default;
exports.Table = table.default;
exports.Tabs = tabs.default;
exports.Tag = tag.default;
exports.Taginput = taginput.default;
exports.Timepicker = timepicker.default;
exports.Toast = toast.default;
exports.ToastProgrammatic = toast.ToastProgrammatic;
exports.Tooltip = tooltip.default;
exports.Upload = upload.default;
exports.ConfigProgrammatic = config.default;
exports.default = Buefy;
