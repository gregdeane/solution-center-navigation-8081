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
}

export default ProductsController;
