import angular from 'angular';

import BusinessPartnerComponent from './business-partner.component';

const businessPartnerModule =
          angular.module('components.business-partner', [])
              .component('businessPartner', BusinessPartnerComponent);

export default businessPartnerModule.name;
