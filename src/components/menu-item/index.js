import angular from 'angular';

import MenuItemComponent from './menu-item.component';

const menuItemModule =
          angular.module('components.menu-item', [])
              .component('menuItem', MenuItemComponent);

export default menuItemModule.name;
