import * as Actions from '../../actions';

class ProductsController {
  static mapStateToThis(state) {
    return {
      selectedProductId: state.visibility.selectedProductId,
      currentProductId: state.navigation.currentProductId,
      mobileMenuShown: state.visibility.mobileMenuShown,
      applicationsMenuShown: state.visibility.applicationsMenuShown
    };
  }

  constructor($ngRedux, stateHandlerService) {
    this.$ngRedux = $ngRedux;
    this.stateHandlerService = stateHandlerService;
  }

  $onInit() {
    this.$ngRedux.connect(
      ProductsController.mapStateToThis,
      Actions
    )(this);
  }

  switchMenu(clickedProductId) {
    // If the submenu is closed (which can only happen when in the Solution Center), open it
    if (!this.applicationsMenuShown) {
      this.stateHandlerService.dispatch('showApplicationsMenu');
    }

    // Switch view to the submenu of the clicked product
    this.stateHandlerService.dispatch('changeSelectedProductId', clickedProductId);
  }

  /**
   * Checks if the applications sub menu is shown according to:
   * - In desktop show only the applications of one product at a time:
   * -- First the selected product applications
   * -- Only the current product applications if nothing has been selected
   * - In mobile show the applications of all products
   * @param product
   * @returns {mock.state.visibility.mobileMenuShown|{}|*|boolean}
   */
  isApplicationSubMenuShown(product) {
    return this.mobileMenuShown || this.isProductSelected(product) ||
      (!this.selectedProductId && this.isCurrentProduct(product));
  }

  /**
   * Checks if the specified product is the one selected by the user by clicking it on the products menu
   * @param product
   * @returns {*|boolean}
   */
  isProductSelected(product) {
    return product && product.id === this.selectedProductId;
  }

  /**
   * Checks if the specified product is the product of the actual context the user is on
   * @param product
   * @returns {*|boolean}
   */
  isCurrentProduct(product) {
    return product && product.id === this.currentProductId;
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
