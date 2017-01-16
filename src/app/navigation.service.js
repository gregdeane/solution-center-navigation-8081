import * as Actions from './actions';

class NavigationService {
  constructor($ngRedux, $cookies, moduleConnectorService, BusinessPartnerActions) {
    this.$ngRedux = $ngRedux;
    this.$cookies = $cookies;
    this.moduleConnectorService = moduleConnectorService;
    this.businessPartnerActions = BusinessPartnerActions;
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
    // TODO after all actions are in their final locations, remove this if and just use `this.businessPartnerActions`
    let dispatchAction = Actions[action] || this.businessPartnerActions[action];
    this.$ngRedux.dispatch(dispatchAction(parameter));
  }

  getProp(type, prop) {
    return this.$ngRedux.getState()[type][prop];
  }
}

export default NavigationService;
