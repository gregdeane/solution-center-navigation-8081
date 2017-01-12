import * as Actions from '../../actions';

class NavigationService {
  constructor($ngRedux, $cookies, moduleConnectorService) {
    this.$ngRedux = $ngRedux;
    this.$cookies = $cookies;
    this.moduleConnectorService = moduleConnectorService;
  }

  /**
   * Loads the current context specified in the component parameters into the navigation state
   * @param applicationId
   * @param productId
   */
  loadCurrentContext(applicationId, productId) {
    this.dispatch('changeCurrentApplication', applicationId);
    this.dispatch('changeCurrentProduct', productId);

    // If there is an applicationId load the context and show the applications menu (S.C. does not have appId so far)
    if (applicationId) {
      this.dispatch('showApplicationsMenu');
    }
  }

  /**
   * Performs a call to the backend endpoint to retrieve the list of business partner that the user has access to
   * in the current application
   */
  getUserBusinessPartnersInApplication() {
    const currentApplication = this.getProp('navigation', 'currentApplication');
    const currentProduct = this.getProp('navigation', 'currentProduct');

    this.moduleConnectorService.getUserBusinessPartnersInApplication(currentProduct, currentApplication)
      .then((response) => {
        this.dispatch('updateAccessibleBusinessPartners', response.data);
        // TODO It will eventually be fetched from BE in business-partner-menu-controller
        this.dispatch('updateLastAccessedBusinessPartners', response.data.slice(0, 8));
      })
      .catch(() => {
        // TODO Log error
        this.dispatch('updateAccessibleBusinessPartners', []);
      });
  }

  /**
   * Handles the business partner selection, checking if any has been persisted in a previous visit
   *  - if so, it verifies that it is still valid in the current context and updates the state accordingly
   *  - otherwise it shows the business partner menu to allow the user to select one
   */
  handleBusinessPartner() {
    // Check if there is a business partner persisted from previous visits
    let businessPartnerId = this.$cookies.get('SC_BUSINESS_PARTNER');

    // If there is and has a type valid for the current application store it in the state
    if (this.isValidBusinessPartnerForApplication(businessPartnerId)) {
      // TODO Fetch business partner from BE
      let businessPartner = {id: businessPartnerId};

      this.dispatch('changeCurrentBusinessPartner', businessPartner);
    }

    // Otherwise show the business partner menu in order to choose one
    else {
      this.dispatch('resetCurrentBusinessPartner');
      this.dispatch('showBusinessPartnerMenu');
    }
  }

  /**
   * Checks if the user has access to a certain business partner in the current application
   * @param businessPartnerId
   * @returns {boolean}
   */
  isValidBusinessPartnerForApplication(businessPartnerId) {
    const accessibleBusinessPartners = this.getProp('businessPartners', 'accessibleBusinessPartners');

    return accessibleBusinessPartners.filter((businessPartner) => {
        return businessPartner.id === businessPartnerId;
      }).length > 0;
  }

  dispatch(action, parameter) {
    this.$ngRedux.dispatch(Actions[action](parameter));
  }

  getProp(type, prop) {
    return this.$ngRedux.getState()[type][prop];
  }
}

export default NavigationService;
