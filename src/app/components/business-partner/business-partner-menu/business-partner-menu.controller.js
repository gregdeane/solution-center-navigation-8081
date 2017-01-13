class BusinessPartnerMenuController {
  static mapStateToProps(state) {
    return {
      accessibleBusinessPartners: state.businessPartners.accessibleBusinessPartners,
      lastAccessedBusinessPartners: state.businessPartners.lastAccessedBusinessPartners,
      businessPartnerMenuShown: state.visibility.businessPartnerMenuShown
    };
  }

  constructor($ngRedux, $cookies, BusinessPartnerActions) {
    this.$ngRedux = $ngRedux;
    this.$cookies = $cookies;
    this.businessPartnerActions = BusinessPartnerActions;
  }

  $onInit() {
    this.$ngRedux.connect(
      BusinessPartnerMenuController.mapStateToProps,
      this.businessPartnerActions
    )(this);

    // TODO Fetch last accessed business partners from BE
    // TODO YOU SHOULDN'T NEED TO FETCH FROM BE. THIS DATA SHOULD ALREADY BE IN THE STORE
  }

  selectBusinessPartner(businessPartner) {
    this.changeCurrentBusinessPartner(businessPartner);
    this.$cookies.put('SC_BUSINESS_PARTNER', businessPartner);
    this.hideBusinessPartnerMenu();
  }

  showLastAccessedSection() {
    return this.lastAccessedBusinessPartners && this.lastAccessedBusinessPartners.length > 0
  }
}

export default BusinessPartnerMenuController;
