'use strict';

UserManagementApp.controller('AdminController',
  [          '$scope', '$log',
    function ($scope,   $log) {
      var acLog = 'AdminController';
      $log.info(acLog, 'Admin route invoked');

      $scope.init = function () {
        $log.debug('Admin init');
      };

      $scope.init();
    }
  ]);

