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
            url: '/cms'
          }, {
            id: 2,
            name: 'Analytics',
            url: '/analytics'
          }]
        },
        {
          id: 2,
          name: 'Insights',
          applications: [{
            id: 3,
            name: 'Coplanner',
            url: '/coplanner'
          }]
        },
        {
          id: 3,
          name: 'Merchant center',
          applications: [{
            id: 4,
            name: 'Articles',
            url: '/articles'
          }, {
            id: 5,
            name: 'Orders',
            url: '/orders'
          }]
        }
      ];

      vm.user = {
        id: 1,
        firstName: 'Chuck',
        lastName: 'Norris',
        email: 'chuck.norris@solutions.zalando.com'
      };
    }
    ]);