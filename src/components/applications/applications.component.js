import template from './applications.html';
import controller from './applications.controller';
import './applications.scss';

const applicationsComponent = {
  bindings: {
    products: '<',
    userBusinessPartners: '<'
  },
  template,
  controller
};

export default applicationsComponent;
