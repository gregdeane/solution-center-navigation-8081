class ProductsController {
  constructor(productsService) {
    this.productsService = productsService;
  }

  switchMenu(clickedProduct) {
    this.productsService.switchMenu(clickedProduct);
  }

  showApplicationsMenu() {
    return this.productsService.showApplicationsMenu();
  }

  isProductSelected(product) {
    return product && product.id === this.productsService.selectedProductId;
  }
}

export default ProductsController;
