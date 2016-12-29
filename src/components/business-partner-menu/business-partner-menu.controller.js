class BusinessPartnerMenuController {
  constructor(businessPartnerMenuService) {
    this.businessPartnerMenuService = businessPartnerMenuService;
  }

  selectBusinessPartner(businessPartner) {
    this.businessPartnerMenuService.selectBusinessPartner(businessPartner);
  }

  getAccessibleBusinessPartners() {
    return this.businessPartnerMenuService.accessibleBusinessPartners;
  }

  getLastAccessedBusinessPartners() {
    return this.businessPartnerMenuService.lastAccessedBusinessPartners;
  }
}

export default BusinessPartnerMenuController;
