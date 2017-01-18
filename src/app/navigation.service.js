import * as Actions from './actions';

class NavigationService {
  constructor(
    $ngRedux, $cookies, moduleConnectorService, BusinessPartnerActions,
    NavigationActions, VisibilityService) {
    this.$ngRedux = $ngRedux;
    this.$cookies = $cookies;
    this.moduleConnectorService = moduleConnectorService;
    this.businessPartnerActions = BusinessPartnerActions;
    this.navigationActions = NavigationActions;
    this.visibilityService = VisibilityService;
  }

  /**
   * Loads the current context specified in the component parameters into the navigation state
   * @param applicationId
   * @param productId
   */
  loadCurrentContext(applicationId, productId) {
    // TODO Add some kind of verification here in case parameters are not correctly provided?
    this.dispatch('changeCurrentApplication', applicationId);
    this.dispatch('changeCurrentProduct', productId);

    // If there is an applicationId load the context and show the applications menu (S.C. does not have appId so far)
    if (applicationId) {
      this.visibilityService.dispatch('showApplicationsMenu');
    }
  }

  /**
   * Handles the business partner selection, checking if any has been persisted in a previous visit
   *  - if so, it verifies that it is still valid in the current context and updates the state accordingly
   *  - otherwise it shows the business partner menu to allow the user to select one
   */
  handleBusinessPartner() {
    const accessibleBusinessPartners = this.getProp('businessPartners', 'accessibleBusinessPartners');

    // If the user has access to ONLY one business partner, we automatically assign it and disable the
    // business partner selection menu since he will not have a chance to choose another one
    if (accessibleBusinessPartners.length === 1) {
      this.dispatch('changeCurrentBusinessPartner', accessibleBusinessPartners[0]);
      this.visibilityService.dispatch('disableBusinessPartnerMenu');
    }

    else {
      // Check if there is a business partner persisted from previous visits
      let businessPartnerCookie = this.$cookies.get('SC_BUSINESS_PARTNER');
      let businessPartnerId = businessPartnerCookie && JSON.parse(businessPartnerCookie).id;

      // If there is and has a type valid for the current application keep it as current business partner
      if (this.isValidBusinessPartnerForApplication(accessibleBusinessPartners, businessPartnerId)) {
        this.dispatch('getBusinessPartnerById', businessPartnerId);
      }

      // Otherwise show the business partner menu to allow the user to choose one
      else {
        this.visibilityService.dispatch('showBusinessPartnerMenu');
      }
    }
  }

  /**
   * Checks if the user has access to a certain business partner in the current application
   * @param businessPartnerId
   * @returns {boolean}
   */
  isValidBusinessPartnerForApplication(accessibleBusinessPartners, businessPartnerId) {
    return accessibleBusinessPartners.filter((businessPartner) => {
        return businessPartner.id === businessPartnerId;
      }).length > 0;
  }

  dispatch(action, parameter) {
    // TODO after all actions are in their final locations, remove this if and just use `this.businessPartnerActions`
    let dispatchAction = Actions[action] || this.businessPartnerActions[action] || this.navigationActions[action];
    this.$ngRedux.dispatch(dispatchAction(parameter));
  }

  getProp(type, prop) {
    return this.$ngRedux.getState()[type][prop];
  }
}

export default NavigationService;
