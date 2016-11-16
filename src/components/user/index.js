import angular from 'angular';

import UserComponent from './user.component';
import UserService from './user.service';

const userModule =
          angular.module('components.user', [])
              .component('user', UserComponent)
              .service('userService', UserService);

export default userModule.name;
