import * as Actions from '../../actions';

class ProductsService {
  constructor($ngRedux) {
    $ngRedux.connect(this.mapStateToParams, Actions)(this);
  }

  mapStateToParams(state) {
    return {
      selectedProductId: state.visibility.selectedProduct && state.visibility.selectedProduct.id,
      applicationsMenuShown: state.visibility.applicationsMenuShown,
      currentProductId: state.navigation.currentProduct && state.navigation.currentProduct.id
    };
  }

  switchMenu(clickedProduct) {
    // If the submenu is opened
    if (this.applicationsMenuShown) {
      // If the clicked product is the one that was shown, close the submenu
      if (this.selectedProductId === clickedProduct.id) {
        this.toggleApplicationsMenu();
        this.resetSelectedProduct();
      }
      // If not, switch to the clicked one
      else {
        this.changeSelectedProduct(clickedProduct);
      }
    }

    // If the submenu is closed, open it and update the shown product
    else {
      this.toggleApplicationsMenu();
      this.changeSelectedProduct(clickedProduct);
    }
  }

  showApplicationsMenu() {
    return this.applicationsMenuShown;
  }
}

export default ProductsService;