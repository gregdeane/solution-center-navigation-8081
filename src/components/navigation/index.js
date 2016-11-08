import angular from 'angular';

import navigationComponent from './navigation.component';

const navigationModule =
          angular.module('components.navigation', [])
              .component('scNavigation', navigationComponent);

export default navigationModule.name;