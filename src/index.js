import './vendor';
import angular from 'angular';
import ngRedux from 'ng-redux';
import reducers from './reducers';

import { ScEnvironmentsProvider } from 'solution-center-communicator';
import { MOCKED_ENVIRONMENT } from './common/mocks';

import Components from './components/components';
import Common from './common/common';
import './assets/styles/main.scss';

const solutionCenterNavigation =
        angular.module('solution-center-navigation', [
          ngRedux,
          'solutioncenter.login',
          'ngCookies',
          Components,
          Common
        ]);

solutionCenterNavigation.config(($ngReduxProvider, ScEnvironmentsProvider) => {
  $ngReduxProvider.createStoreWith(reducers);

  ScEnvironmentsProvider.setCurrentEnvironment(MOCKED_ENVIRONMENT); // TODO Remove after development phase
});

export default solutionCenterNavigation;
