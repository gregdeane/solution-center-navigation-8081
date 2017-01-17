class BusinessPartnerService {

  constructor(VisibilityService) {
    this.visibilityService = VisibilityService;
  }

  hideBusinessPartnerMenu() {
    this.visibilityService.dispatch('hideBusinessPartnerMenu');
  }

}

export default BusinessPartnerService;
