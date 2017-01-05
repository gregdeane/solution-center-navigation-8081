import * as Actions from '../../actions';

class ApplicationsService {
  constructor($ngRedux) {
    $ngRedux.connect(this.mapStateToParams, Actions)(this);
  }

  mapStateToParams(state) {
    return {
      selectedProductId: state.visibility.selectedProduct && state.visibility.selectedProduct.id,
      currentApplicationId: state.navigation.currentApplication && state.navigation.currentApplication.id,
      currentBusinessPartner: state.navigation.currentBusinessPartner
    };
  }

  getCurrentApplicationId() {
    return this.currentApplicationId;
  }

  navigateToApplication(selectedApplication, products, userBusinessPartners) {
    this.hideBusinessPartnerMenu();

    const newContext = this.getNewContextAfterNavigation(products, selectedApplication);
    const {nextProduct: nextProduct, nextApplication: nextApplication} = newContext;

    this.changeCurrentProduct(nextProduct);
    this.changeCurrentApplication(nextApplication);

    const accessibleBusinessPartnersInApplication =
              this.getAccessibleBusinessPartnersInApplication(nextApplication, userBusinessPartners);
    this.updateAccessibleBusinessPartners(accessibleBusinessPartnersInApplication);
    // TODO Change this when BE endpoint is ready
    this.updateLastAccessedBusinessPartners(
        this.getLastAccessedBusinessPartnersInApplication(accessibleBusinessPartnersInApplication));

    // TODO This following code might need to be moved to the constructor of the Header component whenever routing comes
    // into place and it will be possible to initialize the header already from a service provider and not from the Solution Center

    // If when navigating to an application there is no current business partner or
    // if there is but its types are not among the types managed by that application
    // then we show the business partner menu
    if (!this.isValidBusinessPartnerForApplication(nextApplication, this.currentBusinessPartner)) {
      // TODO It must also check if the user has access to that concrete business partner which is carried over in the new application
      this.resetCurrentBusinessPartner();
      this.showBusinessPartnerMenu();
    }
  }

  getNewContextAfterNavigation(products, clickedItem) {
    let result, nextApplication = '', nextProduct;
    nextProduct = products.filter((product) => {
      result = product.applications.filter((application) => {
        return application.id === clickedItem.id;
      });

      if (result.length > 0) {
        nextApplication = result[0];
        return true;
      }

      return false;
    })[0];

    return {
      nextProduct: nextProduct,
      nextApplication: nextApplication
    }
  }

  getAccessibleBusinessPartnersInApplication(application, userBusinessPartners) {
    if (!application) {
      return [];
    }

    return userBusinessPartners.filter((businessPartner) => {
      return this.isValidBusinessPartnerForApplication(application, businessPartner);
    });
  }

  getLastAccessedBusinessPartnersInApplication(accessibleBusinessPartnersInApplication) {
    // TODO This will be fetched from a backend endpoint
    return accessibleBusinessPartnersInApplication.slice(0, 10);
  }

  isValidBusinessPartnerForApplication(application, businessPartner) {
    // TODO This method will also need to check if the businessPartner has access to that application even if the type is valid
    if (!application || !businessPartner) {
      return false;
    }

    return businessPartner.types.filter((type) => {
          return application.businessPartnerTypes.includes(type);
        }).length > 0;
  }
}

export default ApplicationsService;
