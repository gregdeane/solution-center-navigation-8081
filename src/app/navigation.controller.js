import { USER_1, USER_2, USER_3, USER_4, USER_5 } from './common/mocks';

class NavigationController {
  static mapStateToProps(state) {
    return {
      mobileMenuShown: state.visibility.mobileMenuShown,
      currentApplication: state.navigation.currentApplication,
      currentBusinessPartner: state.navigation.currentBusinessPartner,
      products: state.navigation.accessibleProducts
    };
  }

  constructor($ngRedux,
              navigationService,
              backendConnectorService,
              moduleConnectorService,
              ScAuthenticationService,
              NavigationActions) {

    this.$ngRedux = $ngRedux;
    this.navigationService = navigationService;
    this.backendConnectorService = backendConnectorService;
    this.moduleConnectorService = moduleConnectorService;
    this.scAuthenticationService = ScAuthenticationService;
    this.navigationActions = NavigationActions;
  }

  $onInit() {
    this.$ngRedux.connect(
      NavigationController.mapStateToProps,
      this.navigationActions
    )(this);

    this.navigationService.loadCurrentContext(this.applicationId, this.productId);

    // Allow mocking and skipping the backend endpoint calls only if the current environment allows override and
    // all the required parameters are set.
    if (this.backendConnectorService.isOverridePossible() && this.areAllMockedParametersSet()) {
      this.updateAccessibleBusinessPartners(this.userBusinessPartners);
      // TODO It will eventually be fetched from BE in business-partner-menu-controller
      this.updateLastAccessedBusinessPartners(this.accessibleBusinessPartners.slice(0, 8));
      this.navigationService.handleBusinessPartner();
    }

    // Otherwise load the stored data and require the rest of needed information from the backend
    else {
      // this.user = this.scAuthenticationService.getUser(); TODO Replace when solution-center-login handles new users
      this.user = USER_4;

      this.getAccessibleProducts();
      this.getUserBusinessPartnersInApplication()
        .then(() => this.navigationService.handleBusinessPartner());
    }
  }

  /*
   Products, user and business partners must be provided in order to allow skipping backend calls
   */
  areAllMockedParametersSet() {
    return !!this.products && !!this.user && !!this.userBusinessPartners;
  }
}

export default NavigationController;
