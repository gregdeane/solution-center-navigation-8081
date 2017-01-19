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

  }]);
