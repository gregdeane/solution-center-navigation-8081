import angular from 'angular';

import NavigationComponent from './navigation.component';

const navigationModule =
          angular.module('components.navigation', [])
              .component('navigation', NavigationComponent);

export default navigationModule.name;
