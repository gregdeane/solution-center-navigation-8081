import angular from 'angular';

import AppHeader from './app-header';
import Navigation from './navigation';
import LogoButton from './logo-button';
import Logo from './logo';
import Products from './products';
import Applications from './applications';

const componentsModule =
          angular.module('components', [
            AppHeader,
            Navigation,
            LogoButton,
            Logo,
            Products,
            Applications
          ]);

export default componentsModule.name;
