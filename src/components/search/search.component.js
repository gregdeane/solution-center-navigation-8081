import template from './search.html';
import controller from './search.controller';
import './search.scss';

const searchComponent = {
  bindings: {
    searchableItems: '<',
    onClickAction: '&'
  },
  template,
  controller
};

export default searchComponent;
