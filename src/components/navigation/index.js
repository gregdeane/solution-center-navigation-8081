import angular from 'angular';

import NavigationComponent from './navigation.component';

const navigationModule =
          angular.module('components.navigation', ['common'])
              .component('scNavigation', NavigationComponent);

export default navigationModule.name;
