import angular from 'angular';

import LogoButton from './logo-button';
import Products from './products';
import Applications from './applications';
import BusinessPartnerModule from './business-partner/business-partner.module';
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
    BusinessPartnerModule,
    Shortcuts,
    User,
    Users,
    UserMenu,
    Help,
    Search
  ]);

export default componentsModule.name;
