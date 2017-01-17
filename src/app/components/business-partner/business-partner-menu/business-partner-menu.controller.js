class BusinessPartnerMenuController {
  static mapStateToProps(state) {
    return {
      accessibleBusinessPartners: state.businessPartners.accessibleBusinessPartners,
      lastAccessedBusinessPartners: state.businessPartners.lastAccessedBusinessPartners,
      businessPartnerMenuShown: state.visibility.businessPartnerMenuShown,
      businessPartnerMenuDisabled: state.visibility.businessPartnerMenuDisabled
    };
  }

  constructor($ngRedux, $cookies, BusinessPartnerActions, BusinessPartnerService) {
    this.$ngRedux = $ngRedux;
    this.$cookies = $cookies;
    this.businessPartnerActions = BusinessPartnerActions;
    this.businessPartnerService = BusinessPartnerService;
  }

  $onInit() {
    this.$ngRedux.connect(
      BusinessPartnerMenuController.mapStateToProps,
      this.businessPartnerActions
    )(this);

    // TODO Fetch last accessed business partners from BE
  }

  selectBusinessPartner(businessPartner) {
    this.changeCurrentBusinessPartner(businessPartner);
    this.$cookies.put('SC_BUSINESS_PARTNER', businessPartner);
    this.businessPartnerService.hideBusinessPartnerMenu();
  }

  showLastAccessedSection() {
    return this.lastAccessedBusinessPartners && this.lastAccessedBusinessPartners.length > 0
  }
}

export default BusinessPartnerMenuController;
