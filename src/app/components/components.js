import angular from 'angular';

import LogoButton from './logo-button';
import Products from './products';
import Applications from './applications';
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
    LogoButton,
    Products,
    Applications,
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
