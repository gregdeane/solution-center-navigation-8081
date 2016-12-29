import angular from 'angular';

import BusinessPartnerComponent from './business-partner.component';
import BusinessPartnerService from './business-partner.service';

const businessPartnerModule =
          angular.module('components.business-partner', [])
              .component('businessPartner', BusinessPartnerComponent)
              .service('businessPartnerService', BusinessPartnerService);

export default businessPartnerModule.name;
