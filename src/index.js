import angular from 'angular';

import Components from './components/components';
import './assets/styles/main.scss';

const solutionCenterNavigation = angular.module('solution-center-navigation', [
  Components
]);

export default solutionCenterNavigation;