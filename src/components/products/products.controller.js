import * as Actions from '../../actions';

class ProductsController {
  static mapStateToProps(state) {
    return {
      selectedProductId: state.visibility.selectedProduct && state.visibility.selectedProduct.id,
      applicationsMenuShown: state.visibility.applicationsMenuShown,
      currentProductId: state.navigation.currentProduct && state.navigation.currentProduct.id,
      mobileMenuShown: state.visibility.mobileMenuShown
    };
  }

  constructor($ngRedux, productsService) {
    this.$ngRedux = $ngRedux;
    this.productsService = productsService;
  }

  $onInit() {
    this.$ngRedux.connect(
      ProductsController.mapStateToProps,
      Actions
    )(this);
  }

  switchMenu(clickedProduct) {
    this.productsService.switchMenu(clickedProduct);
  }

  isProductSelected(product) {
    return product && product.id === this.selectedProductId;
  }
}

export default ProductsController;
