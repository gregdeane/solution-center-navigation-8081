import template from './navigation.html';
import controller from './navigation.controller';
import './navigation.scss';

const navigationComponent = {
  bindings: {
    products: '<'
  },
  template,
  controller
};

export default navigationComponent;
