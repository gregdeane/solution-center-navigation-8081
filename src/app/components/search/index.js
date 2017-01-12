import angular from 'angular';

import SearchComponent from './search.component';
import SearchService from './search.service';

const searchModule =
          angular.module('components.search', [])
              .component('search', SearchComponent)
              .service('searchService', SearchService);

export default searchModule.name;
