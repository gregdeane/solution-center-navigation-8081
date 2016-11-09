import template from './products.html';
import controller from './products.controller';
import './products.scss';

const productsComponent = {
  bindings: {
    products: '<'
  },
  template,
  controller
};

export default productsComponent;
