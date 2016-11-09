import angular from 'angular';

import AppHeaderComponent from './app-header.component';

const appHeaderModule =
          angular.module('components.app-header', [])
              .component('scNavigation', AppHeaderComponent);

export default appHeaderModule.name;
