import angular from 'angular';

import UsersComponent from './users.component';

const usersModule =
          angular.module('components.users', [])
              .component('users', UsersComponent);

export default usersModule.name;
