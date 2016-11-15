import * as Actions from '../../actions';

class ApplicationsController {
  constructor($ngRedux, applicationsService) {

    console.log(this.applications);
    this.applicationsService = applicationsService;

    $ngRedux.connect(this.mapStateToParams, Actions)(this);

    //this.applications = this.applicationsService.getCurrentProductApplications(this.products, this.selectedProductId);
  }

  mapStateToParams(state) {
    return {
      selectedProductId: state.visibility.selectedProduct && state.visibility.selectedProduct.id,
      currentApplicationId: state.navigation.currentApplication && state.navigation.currentApplication.id,
      currentBusinessPartner: state.navigation.currentBusinessPartner
    };
  }

  navigateToApplication(clickedItem) {
    this.hideBusinessPartnerMenu();

    // TODO This should be fetched from a BE endpoint which returns the Product to which a given Application belongs
    const newContext = this.applicationsService.getNewContextAfterNavigation(clickedItem, this.products);

    const {nextProduct: nextProduct, nextApplication: nextApplication} = newContext;

    this.changeCurrentProduct(nextProduct);
    this.changeCurrentApplication(nextApplication);

    const accessibleBusinessPartnersInApplication = this.applicationsService.getAccessibleBusinessPartnersInApplication(nextApplication, this.userBusinessPartners);

    this.updateAccessibleBusinessPartners(accessibleBusinessPartnersInApplication);
    this.updateLastAccessedBusinessPartners(
        this.applicationsService.getLastAccessedBusinessPartnersInApplication(accessibleBusinessPartnersInApplication));

    // TODO This following code might need to be moved to the constructor of the Header component whenever routing comes
    // into place and it will be possible to initialize the header already from a service provider and not from the Solution Center

    // If when navigating to an application there is no current business partner or if there is but its types are not
    // among the types managed by that application we show the business partner menu
    if (!this.applicationsService.isValidBusinessPartnerForApplication(nextApplication, this.currentBusinessPartner)) {
      // TODO It must also check if the user has access to that concrete business partner which is carried over in the new application
      this.resetCurrentBusinessPartner();
      this.showBusinessPartnerMenu();
    }
  }
}

export default ApplicationsController;
