import angular from 'angular';

import BusinessPartnerMenuComponent from './business-partner-menu.component';
import BusinessPartnerMenuService from './business-partner-menu.service';

const businessPartnerMenuModule =
          angular.module('components.business-partner-menu', [])
              .component('businessPartnerMenu', BusinessPartnerMenuComponent)
              .service('businessPartnerMenuService', BusinessPartnerMenuService);

export default businessPartnerMenuModule.name;
