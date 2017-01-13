import * as Actions from '../../actions';

class BusinessPartnerController {

  static mapStateToProps(state) {
    return {
      currentBusinessPartner: state.navigation.currentBusinessPartner,
      currentApplication: state.navigation.currentApplication
    };
  }

  constructor($ngRedux) {
    this.$ngRedux = $ngRedux;
  }

  $onInit() {
    this.$ngRedux.connect(
      BusinessPartnerController.mapStateToProps,
      Actions
    )(this);
  }
}

export default BusinessPartnerController;
