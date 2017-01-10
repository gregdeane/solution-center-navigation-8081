import './vendor';
import angular from 'angular';
import ngRedux from 'ng-redux';
import reducers from './reducers';

import Components from './components/components';
import Common from './common/common';
import './assets/styles/main.scss';

const solutionCenterNavigation =
          angular.module('solution-center-navigation', [
            ngRedux,
            'solutioncenter.login',
            Components,
            Common
          ]);

solutionCenterNavigation.config(($ngReduxProvider) => {
  $ngReduxProvider.createStoreWith(reducers);
});

export default solutionCenterNavigation;
