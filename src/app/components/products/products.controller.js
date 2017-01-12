import * as Actions from '../../actions';

class ProductsController {
  static mapStateToProps(state) {
    return {
      selectedProduct: state.visibility.selectedProduct,
      currentProduct: state.navigation.currentProduct,
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

  /**
   * Checks if the applications sub menu is shown according to:
   * - In desktop show only the applications of one product at a time (unless the user toggles it):
   * -- First the selected product applications
   * -- Only the current product applications if nothing has been selected
   * - In mobile show the applications of all products
   * @param product
   * @returns {mock.state.visibility.mobileMenuShown|{}|*|boolean}
   */
  isApplicationSubMenuShown(product) {
    /*
      TODO
    return this.mobileMenuShown || (this.applicationsMenuShown &&
      (this.isProductSelected(product) ||
      (!this.selectedProduct && this.isCurrentProduct(product))));
      */

    return this.mobileMenuShown || this.isProductSelected(product) ||
      (!this.selectedProduct && this.isCurrentProduct(product));
  }

  /**
   * Checks if the specified product is the one selected by the user by clicking it on the products menu
   * @param product
   * @returns {*|boolean}
   */
  isProductSelected(product) {
    return product && this.selectedProduct && product.id === this.selectedProduct.id;
  }

  /**
   * Checks if the specified product is the product of the actual context the user is on
   * @param product
   * @returns {*|boolean}
   */
  isCurrentProduct(product) {
    return product && product.id === this.currentProduct;
  }

  /**
   * Checks if the menu button of the specified product has to be highlighted according to the UX rules
   * @param product
   * @returns {*|boolean}
   */
  isHighlighted(product) {
    return this.isProductSelected(product) || this.isCurrentProduct(product);
  }
}

export default ProductsController;
