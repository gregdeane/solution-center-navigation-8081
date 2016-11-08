import angular from 'angular';

import LogoComponent from './logo.component';

const logoModule =
          angular.module('components.logo', [])
              .component('logo', LogoComponent);

export default logoModule.name;
