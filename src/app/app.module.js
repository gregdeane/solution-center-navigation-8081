import ngRedux from 'ng-redux';

import { ScEnvironmentsProvider } from 'solution-center-communicator';
import { MOCKED_ENVIRONMENT } from './common/mocks';

import CommonModule from './common/common';
import ComponentsModule from './components/components';
import reducers from './reducers';

const AppModule = angular.module('app', [
  ngRedux,
  CommonModule,
  ComponentsModule
]);

AppModule.config(($ngReduxProvider, ScEnvironmentsProvider) => {

  ScEnvironmentsProvider.setCurrentEnvironment(MOCKED_ENVIRONMENT); // TODO Remove after development phase

  $ngReduxProvider.createStoreWith(reducers);
});

export default AppModule.name;
