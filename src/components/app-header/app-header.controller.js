class AppHeaderController {
  constructor(appHeaderService) {
    this.appHeaderService = appHeaderService;
  }

  showBusinessPartnerMenu() {
    return this.appHeaderService.showBusinessPartnerMenu();
  }
}

export default AppHeaderController;
