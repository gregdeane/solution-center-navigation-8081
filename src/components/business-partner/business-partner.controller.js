import * as Actions from '../../actions';

class BusinessPartnerController {
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

export default BusinessPartnerController;
