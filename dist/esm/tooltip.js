import './chunk-1fafdf15.js';
import './helpers.js';
import './chunk-652f2dad.js';
import { r as registerComponent, u as use } from './chunk-cca88db8.js';
import { T as Tooltip } from './chunk-eb6f7227.js';
export { T as BTooltip } from './chunk-eb6f7227.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Tooltip);
  }
};
use(Plugin);

export default Plugin;
