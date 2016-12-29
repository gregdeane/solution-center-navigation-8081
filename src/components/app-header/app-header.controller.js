class AppHeaderController {
  constructor(appHeaderService) {
    this.appHeaderService = appHeaderService;
  }

  isBusinessPartnerMenuShown() {
    return this.appHeaderService.businessPartnerMenuShown;
  }
}

export default AppHeaderController;
