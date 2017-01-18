class BusinessPartnerMenuController {
  static mapStateToThis(state) {
    return {
      accessibleBusinessPartners: state.businessPartners.accessibleBusinessPartners,
      lastAccessedBusinessPartners: state.businessPartners.lastAccessedBusinessPartners,
      businessPartnerMenuShown: state.visibility.businessPartnerMenuShown,
      businessPartnerMenuDisabled: state.visibility.businessPartnerMenuDisabled
    };
  }

  constructor($ngRedux, $cookies, BusinessPartnerActions, VisibilityService) {
    this.$ngRedux = $ngRedux;
    this.$cookies = $cookies;
    this.businessPartnerActions = BusinessPartnerActions;
    this.visibilityService = VisibilityService;
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
    this.$cookies.put('SC_BUSINESS_PARTNER', JSON.stringify(businessPartner));
    this.visibilityService.dispatch('hideBusinessPartnerMenu');
  }

  showLastAccessedSection() {
    return this.lastAccessedBusinessPartners && this.lastAccessedBusinessPartners.length > 0
  }
}

export default BusinessPartnerMenuController;
