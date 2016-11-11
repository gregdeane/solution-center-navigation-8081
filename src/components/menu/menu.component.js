import template from './menu.html';
import controller from './menu.controller';
import './menu.scss';

const menuComponent = {
  bindings: {
    items: '<',
    onClickAction: '&'
  },
  template,
  controller
};

export default menuComponent;
