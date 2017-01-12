import * as Actions from '../../actions';

class BusinessPartnerMenuController {
  static mapStateToProps(state) {
    return {
      accessibleBusinessPartners: state.businessPartners.accessibleBusinessPartners,
      lastAccessedBusinessPartners: state.businessPartners.lastAccessedBusinessPartners,
      businessPartnerMenuShown: state.visibility.businessPartnerMenuShown
    };
  }

  constructor($ngRedux, $cookies) {
    this.$ngRedux = $ngRedux;
    this.$cookies = $cookies;
  }

  $onInit() {
    this.$ngRedux.connect(
      BusinessPartnerMenuController.mapStateToProps,
      Actions
    )(this);

    // TODO Fetch last accessed business partners from BE
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
