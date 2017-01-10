import angular from 'angular';

import BusinessPartnerMenuComponent from './business-partner-menu.component';

const businessPartnerMenuModule =
          angular.module('components.business-partner-menu', [])
              .component('businessPartnerMenu', BusinessPartnerMenuComponent);

export default businessPartnerMenuModule.name;
