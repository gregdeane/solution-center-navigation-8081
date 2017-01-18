angular.module('demo', ['solution-center-navigation'])
  .controller('demoController', [function () {
    'use strict';

    var vm = this;

    vm.user = {
      id: 1,
      firstName: 'Chuck',
      lastName: 'Norris',
      email: 'chuck.norris@solutions.zalando.com'
    };

    vm.applicationId = 'app1';
    vm.productId = 'prod1';

    vm.products = [
      {
        id: 'prod1',
        name: 'Product 1',
        applications: [
          {
            id: 'app1',
            name: 'app1',
            productId: 'prod1',
            url: '',
            icon: 'string',
            businessPartnerRoles: [
              'MERCHANT'
            ]
          },
          {
            id: 'app2',
            name: 'app2',
            productId: 'prod1',
            url: '',
            icon: 'string',
            businessPartnerRoles: [
              'MERCHANT'
            ]
          }
        ]
      },
      {
        id: 'prod2',
        name: 'Product 2',
        applications: [
          {
            id: 'app3',
            name: 'app3',
            productId: 'prod2',
            url: 'string',
            icon: 'string',
            businessPartnerRoles: [
              'LOGISTICS_PROVIDER'
            ]
          }
        ]
      }
    ];

    // vm.products = [
    //   {
    //     id: 0,
    //     name: 'Demo',
    //     applications: [{
    //       id: 0,
    //       name: 'Demo',
    //       businessPartnerRoles: ['BRAND']
    //     }]
    //   },
    //   {
    //     id: 1,
    //     name: 'Content',
    //     applications: [{
    //       id: 1,
    //       name: 'CMS',
    //       url: '/cms',
    //       businessPartnerRoles: ['BRAND', 'SUPPLIER']
    //     }, {
    //       id: 2,
    //       name: 'Analytics',
    //       url: '/analytics',
    //       businessPartnerRoles: ['BRAND']
    //     }]
    //   },
    //   {
    //     id: 2,
    //     name: 'Insights',
    //     applications: [{
    //       id: 3,
    //       name: 'Coplanner',
    //       url: '/coplanner',
    //       businessPartnerRoles: ['SUPPLIER']
    //     }]
    //   },
    //   {
    //     id: 3,
    //     name: 'Merchant center',
    //     applications: [{
    //       id: 4,
    //       name: 'Articles',
    //       url: '/articles',
    //       businessPartnerRoles: ['MERCHANT']
    //     }, {
    //       id: 5,
    //       name: 'Orders',
    //       url: '/orders',
    //       businessPartnerRoles: ['MERCHANT']
    //     }]
    //   }
    // ];

    vm.userBusinessPartners = [
      {
        "id": "60887f47-fe49-4cb7-8008-bb78089d045a",
        "name": "DADA",
        "roles": [
          "LOGISTICS_PROVIDER",
          "MERCHANT"
        ]
      },
      {
        "id": "973f100e-7088-45c9-bf8a-39e443ac7bb5",
        "name": "1A Versand",
        "roles": [
          "LOGISTICS_PROVIDER",
          "MERCHANT"
        ]
      }
    ];

    // vm.userBusinessPartners = [{
    //   id: 1,
    //   name: 'Adidas',
    //   roles: ['BRAND', 'MERCHANT', 'SUPPLIER']
    // }, {
    //   id: 2,
    //   name: 'Nike',
    //   roles: ['BRAND', 'SUPPLIER']
    // }, {
    //   id: 3,
    //   name: 'FourFlavor',
    //   roles: ['MERCHANT']
    // }, {
    //   id: 4,
    //   name: 'WarehouseOne',
    //   roles: ['MERCHANT']
    // }, {
    //   id: 5,
    //   name: 'GREENALITY',
    //   roles: ['MERCHANT']
    // }, {
    //   id: 6,
    //   name: 'Lea Trade Srl',
    //   roles: ['SUPPLIER']
    // }, {
    //   id: 7,
    //   name: 'Hirsch Fashion GmbH',
    //   roles: ['SUPPLIER']
    // }, {
    //   id: 8,
    //   name: 'Reebok',
    //   roles: ['BRAND']
    // }, {
    //   id: 9,
    //   name: 'Vans',
    //   roles: ['BRAND']
    // }, {
    //   id: 10,
    //   name: 'Ray-Ban',
    //   roles: ['BRAND']
    // }, {
    //   id: 11,
    //   name: 'Tommy Hilfiger',
    //   roles: ['BRAND']
    // }, {
    //   id: 12,
    //   name: 'Eterna',
    //   roles: ['MERCHANT']
    // }, {
    //   id: 13,
    //   name: 'Roberto Collina SRL',
    //   roles: ['SUPPLIER']
    // }, {
    //   id: 14,
    //   name: 'fashion4home GmbH',
    //   roles: ['SUPPLIER']
    // }];
  }
  ]);
