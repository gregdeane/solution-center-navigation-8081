class BusinessPartnerMenuController {
  static mapStateToThis(state) {
    return {
      accessibleBusinessPartners: state.businessPartners.accessibleBusinessPartners,
      lastAccessedBusinessPartners: state.businessPartners.lastAccessedBusinessPartners,
      businessPartnerMenuShown: state.visibility.businessPartnerMenuShown,
      businessPartnerMenuDisabled: state.visibility.businessPartnerMenuDisabled
    };
  }

  constructor($ngRedux, $cookies, BusinessPartnerActions, stateHandlerService) {
    this.$ngRedux = $ngRedux;
    this.$cookies = $cookies;
    this.businessPartnerActions = BusinessPartnerActions;
    this.stateHandlerService = stateHandlerService;
  }

  $onInit() {
    this.$ngRedux.connect(
      BusinessPartnerMenuController.mapStateToThis,
      this.businessPartnerActions
    )(this);

    // TODO Fetch last accessed business partners from BE
  }

  selectBusinessPartner(businessPartner) {
    this.changeCurrentBusinessPartner(businessPartner);
    this.$cookies.put('SC_BUSINESS_PARTNER_ID', businessPartner.id);
    this.stateHandlerService.dispatch('hideBusinessPartnerMenu');
  }

  showLastAccessedSection() {
    return this.lastAccessedBusinessPartners && this.lastAccessedBusinessPartners.length > 0
  }
}

export default BusinessPartnerMenuController;
