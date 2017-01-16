class BusinessPartnerController {

  static mapStateToThis(state) {
    return {
      currentBusinessPartner: state.businessPartners.currentBusinessPartner,
      currentApplication: state.navigation.currentApplication
    };
  }

  constructor($ngRedux, BusinessPartnerActions) {
    this.$ngRedux = $ngRedux;
    this.businessPartnerActions = BusinessPartnerActions;
  }

  $onInit() {
    this.$ngRedux.connect(
      BusinessPartnerController.mapStateToThis,
      this.businessPartnerActions
    )(this);
  }
}

export default BusinessPartnerController;
