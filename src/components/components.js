import angular from 'angular';

import AppHeader from './app-header';
import Navigation from './navigation';
import LogoButton from './logo-button';
import Logo from './logo';
import Products from './products';
import Applications from './applications';
import Menu from './menu';
import MenuItem from './menu-item';
import BusinessPartner from './business-partner';
import User from './user';
import Help from './help';

const componentsModule =
          angular.module('components', [
            AppHeader,
            Navigation,
            LogoButton,
            Logo,
            Products,
            Applications,
            Menu,
            MenuItem,
            BusinessPartner,
            User,
            Help
          ]);

export default componentsModule.name;
