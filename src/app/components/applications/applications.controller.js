import * as Actions from '../../actions';

class ApplicationsController {
  static mapStateToProps(state) {
    return {
      selectedProductId: state.visibility.selectedProduct && state.visibility.selectedProduct.id,
      currentApplication: state.navigation.currentApplication,
      currentBusinessPartner: state.navigation.currentBusinessPartner
    };
  }

  constructor($ngRedux, $window, VisibilityService) {
    this.$ngRedux = $ngRedux;
    this.$window = $window;
    this.visibilityService = VisibilityService;
  }

  $onInit() {
    this.$ngRedux.connect(
      ApplicationsController.mapStateToProps,
      Actions)
    (this);
  }

  navigateToApplication(url) {
    if (!url) {
      return;
    }

    this.visibilityService.dispatch('hideAllMenus');
    this.$window.location.href = url;
  }

  isCurrentApplication(applicationId) {
    return this.currentApplication === applicationId;
  }
}

export default ApplicationsController;
