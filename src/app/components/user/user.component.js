import template from './user.html';
import controller from './user.controller';
import './user.scss';

const userComponent = {
  bindings: {
    user: '<'
  },
  template,
  controller
};

export default userComponent;
