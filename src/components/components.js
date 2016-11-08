import angular from 'angular';

import AppHeader from './app-header';

const componentsModule =
          angular.module('components', [
            AppHeader
          ]);

export default componentsModule.name;
