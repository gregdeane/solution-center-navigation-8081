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
import BusinessPartnerMenu from './business-partner-menu';
import User from './user';
import UserMenu from './user-menu';
import Help from './help';
import Search from './search';

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
            BusinessPartnerMenu,
            User,
            UserMenu,
            Help,
            Search
          ]);

export default componentsModule.name;
