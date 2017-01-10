import angular from 'angular';

import UserComponent from './user.component';

const userModule =
          angular.module('components.user', [])
              .component('user', UserComponent);

export default userModule.name;
