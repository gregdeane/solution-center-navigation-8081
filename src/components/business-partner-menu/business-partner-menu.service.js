import * as Actions from '../../actions';

class BusinessPartnerMenuService {
  constructor($ngRedux) {
    $ngRedux.connect(this.mapStateToParams, Actions)(this);
  }

  mapStateToParams(state) {
    return {
      currentApplication: state.navigation.currentApplication,
      currentBusinessPartner: state.navigation.currentBusinessPartner,
      accessibleBusinessPartners: state.businessPartners.accessibleBusinessPartners,
      lastAccessedBusinessPartners: state.businessPartners.lastAccessedBusinessPartners,
      businessPartnerMenuShown: state.visibility.businessPartnerMenuShown
    };
  }

  selectBusinessPartner(businessPartner) {
    this.changeCurrentBusinessPartner(businessPartner);
    this.hideBusinessPartnerMenu();
  }
}

export default BusinessPartnerMenuService;
