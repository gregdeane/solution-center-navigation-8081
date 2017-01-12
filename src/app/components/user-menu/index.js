import angular from 'angular';

import UserMenuComponent from './user-menu.component';

const userModule =
          angular.module('components.user-menu', [])
              .component('userMenu', UserMenuComponent);

export default userModule.name;
