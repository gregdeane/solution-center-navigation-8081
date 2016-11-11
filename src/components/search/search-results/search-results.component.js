import template from './search-results.html';
import controller from './search-results.controller';
import '../search.scss';

const searchResultsComponent = {
  bindings: {
    searchResults: '<',
    onClickAction: '&'
  },
  template,
  controller
};

export default searchResultsComponent;
