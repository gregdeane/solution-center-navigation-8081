import template from './logo.html';
import controller from './logo.controller';
import './logo.scss';

const logoComponent = {
  bindings: {
    source: '<'
  },
  template,
  controller
};

export default logoComponent;
