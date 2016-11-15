import template from './search-box.html';
import controller from './search-box.controller';
import '../search.scss';

const searchBoxComponent = {
  bindings: {
    onChangeAction: '&'
  },
  template,
  controller
};

export default searchBoxComponent;
