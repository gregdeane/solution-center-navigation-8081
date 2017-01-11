import * as Actions from '../../actions';

class BusinessPartnerMenuController {
  static mapStateToProps(state) {
    return {
      accessibleBusinessPartners: state.businessPartners.accessibleBusinessPartners,
      lastAccessedBusinessPartners: state.businessPartners.lastAccessedBusinessPartners,
      businessPartnerMenuShown: state.visibility.businessPartnerMenuShown
    };
  }

  constructor($ngRedux) {
    this.$ngRedux = $ngRedux;
  }

  $onInit() {
    this.$ngRedux.connect(
      BusinessPartnerMenuController.mapStateToProps,
      Actions
    )(this);
  }

  selectBusinessPartner(businessPartner) {
    this.changeCurrentBusinessPartner(businessPartner);
    this.hideBusinessPartnerMenu();
  }
}

export default BusinessPartnerMenuController;
