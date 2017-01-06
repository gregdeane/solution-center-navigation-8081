import template from './navigation.html';
import controller from './navigation.controller';
import './navigation.scss';

const navigationComponent = {
  bindings: {
    products: '<',
    user: '<',
    userBusinessPartners: '<'
  },
  template,
  controller
};

export default navigationComponent;
