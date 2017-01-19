class BusinessPartnerController {

  static mapStateToThis(state) {
    return {
      currentBusinessPartner: state.businessPartners.currentBusinessPartner,
      currentApplicationId: state.navigation.currentApplicationId,
      businessPartnerMenuDisabled: state.visibility.businessPartnerMenuDisabled
    };
  }

  constructor($ngRedux, BusinessPartnerActions, stateHandlerService) {
    this.$ngRedux = $ngRedux;
    this.businessPartnerActions = BusinessPartnerActions;
    this.stateHandlerService = stateHandlerService;
  }

  $onInit() {
    this.$ngRedux.connect(
      BusinessPartnerController.mapStateToThis,
      this.businessPartnerActions
    )(this);
  }

  toggleBusinessPartnerMenu() {
    this.stateHandlerService.dispatch('toggleBusinessPartnerMenu');
  }
}

export default BusinessPartnerController;
