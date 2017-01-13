import BusinessPartnerActions from './business-partner.actions';
import BusinessPartnerComponent from './business-partner.component';
import BusinessPartnerMenuModule from './business-partner-menu/business-partner-menu.module';

const BusinessPartnerModule =
  angular.module('components.business-partner', [
    BusinessPartnerMenuModule
  ])
  .factory('BusinessPartnerActions', BusinessPartnerActions)
  .component('businessPartner', BusinessPartnerComponent);

export default BusinessPartnerModule.name;
