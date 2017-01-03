import angular from 'angular';
import ngRedux from 'ng-redux';
import 'angular-cookies';
import 'ngstorage';
import 'angular-jwt';
import 'solution-center-communicator';
import 'solution-center-login';
import reducers from './reducers';

import Components from './components/components';
import Common from './common/common';
import './assets/styles/main.scss';

const solutionCenterNavigation =
          angular.module('solution-center-navigation', [
            ngRedux,
            'solutioncenter.login',
            'solutioncenter.communicator',
            Components,
            Common
          ]);

solutionCenterNavigation.config(($ngReduxProvider) => {
  $ngReduxProvider.createStoreWith(reducers);
});

export default solutionCenterNavigation;
