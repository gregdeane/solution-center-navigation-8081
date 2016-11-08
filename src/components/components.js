import angular from 'angular';

import AppHeader from './app-header';
import Navigation from './navigation';
import LogoButton from './logo-button';
import Logo from './logo';

const componentsModule =
          angular.module('components', [
            AppHeader,
            Navigation,
            LogoButton,
            Logo
          ]);

export default componentsModule.name;
