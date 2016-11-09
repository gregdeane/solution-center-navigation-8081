import angular from 'angular';

import MenuComponent from './menu.component';

const menuModule =
          angular.module('components.menu', [])
              .component('menu', MenuComponent);

export default menuModule.name;
