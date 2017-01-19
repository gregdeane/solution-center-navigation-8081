import angular from 'angular';

import ProductsComponent from './products.component';

const productsModule =
          angular.module('components.products', [])
              .component('products', ProductsComponent);

export default productsModule.name;
