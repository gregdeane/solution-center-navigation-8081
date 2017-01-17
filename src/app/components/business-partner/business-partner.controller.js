import * as Actions from '../../actions';

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

  /* TODO This is just a fiddle to show that common visibility actions can be accessed independently from
          different components but it must be implemented properly in a different issue, moving all the related
          files to the common directory and maybe writing an own dedicated service to access them
  toggleBusinessPartnerMenu() {
    let dispatchAction = Actions['toggleBusinessPartnerMenu'];
    this.$ngRedux.dispatch(dispatchAction());
  }
  */
}

export default BusinessPartnerController;
