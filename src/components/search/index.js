import angular from 'angular';

import SearchComponent from './search.component';
import SearchBoxComponent from './search-box/search-box.component';
import SearchResultsComponent from './search-results/search-results.component';

const searchModule =
          angular.module('components.search', [])
              .component('search', SearchComponent)
              .component('searchBox', SearchBoxComponent)
              .component('searchResults', SearchResultsComponent);

export default searchModule.name;
