import * as Actions from '../../actions';

class BusinessPartnerService {
  constructor($ngRedux) {
    $ngRedux.connect(this.mapStateToParams, Actions)(this);
  }

  mapStateToParams(state) {
    return {
      currentBusinessPartner: state.navigation.currentBusinessPartner,
      currentApplication: state.navigation.currentApplication
    };
  }
}

export default BusinessPartnerService;