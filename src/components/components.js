import angular from 'angular';

import Navigation from './navigation';

const componentsModule =
          angular.module('components', [
            Navigation
          ]);

export default componentsModule.name;