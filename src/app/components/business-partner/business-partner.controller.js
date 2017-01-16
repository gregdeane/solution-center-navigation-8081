class BusinessPartnerController {

  static mapStateToProps(state) {
    return {
      currentBusinessPartner: state.navigation.currentBusinessPartner,
      currentApplication: state.navigation.currentApplication
    };
  }

  constructor($ngRedux, BusinessPartnerActions) {
    this.$ngRedux = $ngRedux;
    this.businessPartnerActions = BusinessPartnerActions;
  }

  $onInit() {
    this.$ngRedux.connect(
      BusinessPartnerController.mapStateToProps,
      this.businessPartnerActions
    )(this);
  }
}

export default BusinessPartnerController;
