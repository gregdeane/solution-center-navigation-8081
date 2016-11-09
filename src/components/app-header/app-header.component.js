import template from './app-header.html';
import controller from './app-header.controller';
import './app-header.scss';

const appHeaderComponent = {
  bindings: {
    products: '<',
    user: '<',
    userBusinessPartners: '<'
  },
  template,
  controller
};

export default appHeaderComponent;
