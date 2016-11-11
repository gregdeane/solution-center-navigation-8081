import angular from 'angular';

import ApplicationsComponent from './applications.component';
import ApplicationsService from './applications.service';

const applicationsModule =
          angular.module('components.applications', [])
              .component('applications', ApplicationsComponent)
              .service('applicationsService', ApplicationsService);

export default applicationsModule.name;
