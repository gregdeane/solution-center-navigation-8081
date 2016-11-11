import * as Actions from '../../actions';

class BusinessPartnerMenuController {
  constructor($ngRedux) {
    $ngRedux.connect(this.mapStateToParams, Actions)(this);
  }

  mapStateToParams(state) {
    return {
      currentApplication: state.navigation.currentApplication,
      currentBusinessPartner: state.navigation.currentBusinessPartner,
      accessibleBusinessPartners: state.businessPartners.accessibleBusinessPartners,
      lastAccessedBusinessPartners: state.businessPartners.lastAccessedBusinessPartners
    };
  }

  selectBusinessPartner(businessPartner) {
    this.changeCurrentBusinessPartner(businessPartner);
    this.hideBusinessPartnerMenu();
    this.updateBusinessPartnerSearchResults([]);
  }
}

export default BusinessPartnerMenuController;
