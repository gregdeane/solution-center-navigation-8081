angular.module('demo', ['solution-center-navigation'])
    .controller('demoController', [function () {
      'use strict';

      var vm = this;

      vm.products = [
        {
          id: 1,
          name: 'Content',
          applications: [{
            id: 1,
            name: 'CMS',
            url: '/cms',
            businessPartnerTypes: ['BRAND', 'SUPPLIER']
          }, {
            id: 2,
            name: 'Analytics',
            url: '/analytics',
            businessPartnerTypes: ['BRAND']
          }]
        },
        {
          id: 2,
          name: 'Insights',
          applications: [{
            id: 3,
            name: 'Coplanner',
            url: '/coplanner',
            businessPartnerTypes: ['SUPPLIER']
          }]
        },
        {
          id: 3,
          name: 'Merchant center',
          applications: [{
            id: 4,
            name: 'Articles',
            url: '/articles',
            businessPartnerTypes: ['MERCHANT']
          }, {
            id: 5,
            name: 'Orders',
            url: '/orders',
            businessPartnerTypes: ['MERCHANT']
          }]
        }
      ];

      vm.userBusinessPartners = [{
        id: 1,
        name: 'Adidas',
        types: ['BRAND', 'MERCHANT', 'SUPPLIER']
      }, {
        id: 2,
        name: 'Nike',
        types: ['BRAND', 'SUPPLIER']
      }, {
        id: 3,
        name: 'FourFlavor',
        types: ['MERCHANT']
      }, {
        id: 4,
        name: 'WarehouseOne',
        types: ['MERCHANT']
      }, {
        id: 5,
        name: 'GREENALITY',
        types: ['MERCHANT']
      }, {
        id: 6,
        name: 'Lea Trade Srl',
        types: ['SUPPLIER']
      }, {
        id: 7,
        name: 'Hirsch Fashion GmbH',
        types: ['SUPPLIER']
      }, {
        id: 8,
        name: 'Reebok',
        types: ['BRAND']
      }, {
        id: 9,
        name: 'Vans',
        types: ['BRAND']
      }, {
        id: 10,
        name: 'Ray-Ban',
        types: ['BRAND']
      }, {
        id: 11,
        name: 'Tommy Hilfiger',
        types: ['BRAND']
      }, {
        id: 12,
        name: 'Eterna',
        types: ['MERCHANT']
      }, {
        id: 13,
        name: 'Roberto Collina SRL',
        types: ['SUPPLIER']
      }, {
        id: 14,
        name: 'fashion4home GmbH',
        types: ['SUPPLIER']
      }];

      vm.user = {
        id: 1,
        firstName: 'Chuck',
        lastName: 'Norris',
        email: 'chuck.norris@solutions.zalando.com'
      };
    }
    ]);