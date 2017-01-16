import BusinessPartnerMenuComponent from './business-partner-menu.component';

const BusinessPartnerMenuModule =
  angular.module('components.business-partner-menu', [])
  .component('businessPartnerMenu', BusinessPartnerMenuComponent);

export default BusinessPartnerMenuModule.name;
