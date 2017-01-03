import angular from 'angular';

import AppHeaderComponent from './app-header.component';
import AppHeaderService from './app-header.service';

const appHeaderModule =
          angular.module('components.app-header', ['common'])
              .component('scNavigation', AppHeaderComponent)
              .service('appHeaderService', AppHeaderService);

export default appHeaderModule.name;
