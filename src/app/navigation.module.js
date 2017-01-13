import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';

import { MOCKED_ENVIRONMENT } from './common/mocks';

import NavigationActions from './navigation.actions';
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
  .factory('NavigationActions', NavigationActions)
  .component('scNavigation', NavigationComponent)
  .service('navigationService', NavigationService);

NavigationModule.config(($ngReduxProvider, ScEnvironmentsProvider) => {
  let middleware = [thunk];

  // TODO Remove after development phase
  ScEnvironmentsProvider.setCurrentEnvironment(MOCKED_ENVIRONMENT);

  $ngReduxProvider.createStoreWith(reducers, middleware);
});

export default NavigationModule.name;
