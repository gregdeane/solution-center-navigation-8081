import angular from 'angular';

import ApplicationsComponent from './applications.component';

const applicationsModule =
          angular.module('components.applications', [])
              .component('applications', ApplicationsComponent);

export default applicationsModule.name;
