import angular from 'angular';
import ngRedux from 'ng-redux';
import reducers from './reducers';

import Components from './components/components';
import './assets/styles/main.scss';

const solutionCenterNavigation =
          angular.module('solution-center-navigation', [
            ngRedux,
            Components
          ]);

solutionCenterNavigation.config(($ngReduxProvider) => {
  $ngReduxProvider.createStoreWith(reducers);
});

export default solutionCenterNavigation;