import './chunk-1fafdf15.js';
import './helpers.js';
import './chunk-652f2dad.js';
import './chunk-de2a60ed.js';
import { r as registerComponent, u as use } from './chunk-cca88db8.js';
import { P as Pagination, a as PaginationButton } from './chunk-3aed0e8d.js';
export { P as BPagination, a as BPaginationButton } from './chunk-3aed0e8d.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Pagination);
    registerComponent(Vue, PaginationButton);
  }
};
use(Plugin);

export default Plugin;
