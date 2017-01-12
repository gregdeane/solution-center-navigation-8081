import ngRedux from 'ng-redux';

import { MOCKED_ENVIRONMENT } from './common/mocks';

import NavigationComponent from './navigation.component';
import NavigationService from './navigation.service';
import CommonModule from './common/common';
import ComponentsModule from './components/components';
import reducers from './navigation.reducers';

const NavigationModule =
  angular.module('navigation', [
    ngRedux,
    CommonModule,
    ComponentsModule
  ])
  .component('scNavigation', NavigationComponent)
  .service('navigationService', NavigationService);

NavigationModule.config(($ngReduxProvider, ScEnvironmentsProvider) => {
  // TODO Remove after development phase
  ScEnvironmentsProvider.setCurrentEnvironment(MOCKED_ENVIRONMENT);

  $ngReduxProvider.createStoreWith(reducers);
});

export default NavigationModule.name;
