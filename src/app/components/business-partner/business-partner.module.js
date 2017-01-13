import BusinessPartnerComponent from './business-partner.component';
import BusinessPartnerMenuModule from './business-partner-menu/business-partner-menu.module';

const BusinessPartnerModule =
  angular.module('components.business-partner', [
    BusinessPartnerMenuModule
  ])
  .component('businessPartner', BusinessPartnerComponent);

export default BusinessPartnerModule.name;
