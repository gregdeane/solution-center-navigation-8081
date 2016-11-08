import angular from 'angular';

import AppHeader from './app-header';
import Navigation from './navigation';
import Logo from './logo';

const componentsModule =
          angular.module('components', [
            AppHeader,
            Navigation,
            Logo
          ]);

export default componentsModule.name;
