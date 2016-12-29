import template from './products.html';
import controller from './products.controller';
import './products.scss';

const productsComponent = {
  bindings: {
    products: '<',
    userBusinessPartners: '<'
  },
  template,
  controller
};

export default productsComponent;
