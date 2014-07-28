/*jshint unused:false */
/*global UserManagement:true */

'use strict';

var underscore = angular.module('underscore', []);
underscore.factory('_', function () {
  return window._; // assumes underscore has already been loaded on the page
});
console.log('define module UserManagementApp', angular.module('ngMaterial'));
var UserManagementApp = angular.module('UserManagementApp',
  [ 'ngRoute',
    'ngMaterial',
    'ui.bootstrap',
    'underscore',
    'LocalStorageModule'
  ])
  .config([  '$routeProvider', 'localStorageServiceProvider',
    function ($routeProvider,   localStorageServiceProvider) {
      console.log('UserManagementApp config');
      localStorageServiceProvider.setPrefix('UserManagement');

      $routeProvider
        .when('', {
          redirectTo: '/admin'
        })
        .when('/', {
          redirectTo: '/admin'
        })
        .when('/admin', {
          templateUrl: '../../views/Admin.html',
          controller: 'AdminController'
        })
        .otherwise({
          redirectTo: '/admin'
        });
    }
  ])
  .run([     '$rootScope', '$location', '$log',
    function ($rootScope,   $location,   $log) {
      console.log('UerManagementApp run');
    }
  ]);
console.log('UserManagementApp defined');
