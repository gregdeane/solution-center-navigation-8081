import angular from 'angular';

import ProductsComponent from './products.component';
import ProductsService from './products.service';

const productsModule =
          angular.module('components.products', [])
              .component('products', ProductsComponent)
              .service('productsService', ProductsService);

export default productsModule.name;
