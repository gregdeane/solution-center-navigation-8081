import * as Actions from '../../actions';

class ApplicationsController {
  static mapStateToThis(state) {
    return {
      selectedProductId: state.visibility.selectedProduct && state.visibility.selectedProduct.id,
      currentApplicationId: state.navigation.currentApplicationId,
      currentBusinessPartner: state.navigation.currentBusinessPartner
    };
  }

  constructor($ngRedux, $window, stateHandlerService) {
    this.$ngRedux = $ngRedux;
    this.$window = $window;
    this.stateHandlerService = stateHandlerService;
  }

  $onInit() {
    this.$ngRedux.connect(
      ApplicationsController.mapStateToThis,
      Actions)
    (this);
  }

  navigateToApplication(url) {
    if (!url) {
      return;
    }

    this.$window.location.href = url;
  }

  isCurrentApplication(applicationId) {
    return this.currentApplicationId === applicationId;
  }
}

export default ApplicationsController;
