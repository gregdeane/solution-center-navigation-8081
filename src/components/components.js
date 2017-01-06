import angular from 'angular';

import Navigation from './navigation';
import LogoButton from './logo-button';
import Logo from './logo';
import Products from './products';
import Applications from './applications';
import Menu from './menu';
import MenuItem from './menu-item';
import BusinessPartner from './business-partner';
import BusinessPartnerMenu from './business-partner-menu';
import Shortcuts from './shortcuts';
import User from './user';
import UserMenu from './user-menu';
import Users from './users';
import Help from './help';
import Search from './search';

const componentsModule =
          angular.module('components', [
            Navigation,
            LogoButton,
            Logo,
            Products,
            Applications,
            Menu,
            MenuItem,
            BusinessPartner,
            BusinessPartnerMenu,
            Shortcuts,
            User,
            Users,
            UserMenu,
            Help,
            Search
          ]);

export default componentsModule.name;
