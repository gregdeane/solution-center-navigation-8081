class NavigationController {
  constructor(backendConnectorService,
              moduleConnectorService,
              userConnectorService,
              ScAuthenticationService) {

    this.backendConnectorService = backendConnectorService;
    this.moduleConnectorService = moduleConnectorService;
    this.userConnectorService = userConnectorService;
    this.scAuthenticationService = ScAuthenticationService;

    // Perform the backend endpoints calls if the current environment does not allow override or
    // if any of the required parameters is not set.
    // Otherwise use the values provided by the client application instead.
    if (!this.backendConnectorService.isOverridePossible() && !this.areAllRequiredParametersSet()) {
      this.user = this.scAuthenticationService.getUser();
      this.getProducts();
      this.getUserBusinessPartners(this.user && this.user.id);
    }
  }

  getProducts() {
    this.moduleConnectorService.getProducts()
        .then((response) => {
          this.products = response.products;
        })
        .catch(() => {
          // TODO Log error
          this.products = [];
        });
  }

  getUserBusinessPartners(userId) {
    this.userConnectorService.getUserBusinessPartners(userId)
        .then((response) => {
          this.userBusinessPartners = response.businessPartners;
        })
        .catch(() => {
          // TODO Log error
          this.userBusinessPartners = [];
        });
  }

  /*
   Products, user and business partners must be provided in order to allow skipping backend calls
   */
  areAllRequiredParametersSet() {
    return this.products && this.user && this.userBusinessPartners;
  }
}

export default NavigationController;
