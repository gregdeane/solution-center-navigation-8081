class BusinessPartnerController {
  constructor(businessPartnerService) {
    this.businessPartnerService = businessPartnerService;
  }

  isApplicationSelected() {
    return this.businessPartnerService.currentApplication;
  }

  hasCurrentBusinessPartner() {
    return this.businessPartnerService.currentBusinessPartner;
  }

  getCurrentBusinessPartnerName() {
    return this.businessPartnerService.currentBusinessPartner
        ? this.businessPartnerService.currentBusinessPartner.name : '';
  }

  toggleBusinessPartnerMenu() {
    this.businessPartnerService.toggleBusinessPartnerMenu();
  }
}

export default BusinessPartnerController;
