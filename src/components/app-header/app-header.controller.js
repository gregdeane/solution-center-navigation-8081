class AppHeaderController {
  constructor(appHeaderService,
              backendConnectorService,
              moduleConnectorService,
              userConnectorService,
              ScAuthenticationService) {

    this.appHeaderService = appHeaderService;
    this.backendConnectorService = backendConnectorService;
    this.moduleConnectorService = moduleConnectorService;
    this.userConnectorService = userConnectorService;
    this.scAuthenticationService = ScAuthenticationService;

    // We allow clients to skip the calls to our backend endpoints only in Integration environments and if all the
    // component parameters (products, user and business partners) are set
    if (!this.backendConnectorService.isIntegrationEnvironment()
        || !this.products || !this.user || !this.userBusinessPartners) {
      this.user = this.scAuthenticationService.getUser();
      this.products = this.getProducts();
      this.userBusinessPartners = this.getUserBusinessPartners(this.user && this.user.id);
    }
  }

  isBusinessPartnerMenuShown() {
    return this.appHeaderService.businessPartnerMenuShown;
  }

  getProducts() {
    let products = [];

    this.moduleConnectorService.getProducts()
        .then((response) => {
          products = response.products;
        }, () => {
          // TODO Log error
          products = [];
        });

    return products;
  }

  getUserBusinessPartners(userId) {
    let userBusinessPartners = [];

    this.userConnectorService.getUserBusinessPartners(userId)
        .then((response) => {
          userBusinessPartners = response.businessPartners;
        }, () => {
          // TODO Log error
          userBusinessPartners = [];
        });

    return userBusinessPartners;
  }
}

export default AppHeaderController;
