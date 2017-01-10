import * as Actions from '../../actions';

class BusinessPartnerMenuController {
  static mapStateToParams(state) {
    return {
      currentApplication: state.navigation.currentApplication,
      currentBusinessPartner: state.navigation.currentBusinessPartner,
      accessibleBusinessPartners: state.businessPartners.accessibleBusinessPartners,
      lastAccessedBusinessPartners: state.businessPartners.lastAccessedBusinessPartners,
      businessPartnerMenuShown: state.visibility.businessPartnerMenuShown
    };
  }

  constructor($ngRedux) {
    this.$ngRedux = $ngRedux;
  }

  $onInit() {
    $ngRedux.connect(
      this.mapStateToParams,
      Actions)
    (this);
  }

  selectBusinessPartner(businessPartner) {
    this.changeCurrentBusinessPartner(businessPartner);
    this.hideBusinessPartnerMenu();
  }
}

export default BusinessPartnerMenuController;
