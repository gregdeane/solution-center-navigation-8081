class BusinessPartnerController {

  static mapStateToThis(state) {
    return {
      currentBusinessPartner: state.businessPartners.currentBusinessPartner,
      currentApplication: state.navigation.currentApplication,
      businessPartnerMenuDisabled: state.visibility.businessPartnerMenuDisabled
    };
  }

  constructor($ngRedux, BusinessPartnerActions, VisibilityService) {
    this.$ngRedux = $ngRedux;
    this.businessPartnerActions = BusinessPartnerActions;
    this.visibilityService = VisibilityService;
  }

  $onInit() {
    this.$ngRedux.connect(
      BusinessPartnerController.mapStateToThis,
      this.businessPartnerActions
    )(this);
  }

  toggleBusinessPartnerMenu() {
    this.visibilityService.dispatch('toggleBusinessPartnerMenu');
  }
}

export default BusinessPartnerController;
