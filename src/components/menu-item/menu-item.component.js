import template from './menu-item.html';
import controller from './menu-item.controller';
import './menu-item.scss';

const menuItemComponent = {
  bindings: {
    item: '<',
    onClickAction: '<',
    isToggle: '<',
    isHighlighted: '<',
    highlightedClass: '<'
  },
  template,
  controller
};

export default menuItemComponent;
