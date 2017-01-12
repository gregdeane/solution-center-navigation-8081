import * as Actions from '../../actions';

class ApplicationsController {
  static mapStateToProps(state) {
    return {
      selectedProductId: state.visibility.selectedProduct && state.visibility.selectedProduct.id,
      currentApplication: state.navigation.currentApplication,
      currentBusinessPartner: state.navigation.currentBusinessPartner
    };
  }

  constructor($ngRedux, $window) {
    this.$ngRedux = $ngRedux;
    this.$window = $window;
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

    this.hideAllMenus();
    this.$window.location.href = url;
  }

  isCurrentApplication(applicationId) {
    return this.currentApplication === applicationId;
  }
}

export default ApplicationsController;
