import template from './menu.html';
import controller from './menu.controller';
import './menu.scss';

const menuComponent = {
  bindings: {
    items: '<'
  },
  template,
  controller
};

export default menuComponent;
