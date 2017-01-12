import angular from 'angular';

import NavigationComponent from './navigation.component';
import NavigationService from './navigation.service';

const navigationModule =
        angular.module('components.navigation', ['common'])
          .component('scNavigation', NavigationComponent)
          .service('navigationService', NavigationService);

export default navigationModule.name;
