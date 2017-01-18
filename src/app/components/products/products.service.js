import * as Actions from '../../actions';

class ProductsService {
  constructor($ngRedux, VisibilityService) {
    $ngRedux.connect(this.mapStateToParams, Actions)(this);
    this.visibilityService = VisibilityService;
  }

  mapStateToParams(state) {
    return {
      selectedProductId: state.visibility.selectedProduct && state.visibility.selectedProduct.id,
      applicationsMenuShown: state.visibility.applicationsMenuShown
    };
  }

  // TODO This whole logic may be simplified when implementing the new UX requirement of not toggling the menus
  switchMenu(clickedProduct) {
    // If the submenu is opened
    if (this.applicationsMenuShown) {
      // If the clicked product is the one that was shown, close the submenu
      if (this.selectedProductId === clickedProduct.id) {
        this.visibilityService.dispatch('toggleApplicationsMenu');
        this.visibilityService.dispatch('resetSelectedProduct');
      }
      // If not, switch to the clicked one
      else {
        this.visibilityService.dispatch('changeSelectedProduct', clickedProduct);
      }
    }

    // If the submenu is closed, open it and update the shown product
    else {
      this.visibilityService.dispatch('toggleApplicationsMenu');
      this.visibilityService.dispatch('changeSelectedProduct', clickedProduct);
    }
  }
}

export default ProductsService;
