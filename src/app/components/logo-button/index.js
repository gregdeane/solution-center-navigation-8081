import angular from 'angular';

import LogoButtonComponent from './logo-button.component';

const logoButtonModule =
          angular.module('components.logo-button', [])
              .component('logoButton', LogoButtonComponent);

export default logoButtonModule.name;
