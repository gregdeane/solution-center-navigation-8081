import template from './help.html';
import controller from './help.controller';
import './help.scss';

const helpComponent = {
  bindings: {
    products: '<'
  },
  template,
  controller
};

export default helpComponent;
