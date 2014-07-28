'use strict';

UserManagementApp.controller('AdminController',
  [          '$scope', '$log', '$materialDialog', '$modal', 'Users', 'Groups', 'Members',
    function ($scope,   $log,   $materialDialog,   $modal,   Users,   Groups,   Members) {
      var acLog = 'AdminController';
      $log.info(acLog, 'Admin route invoked', Users);

      $scope.users = Users.users;

      $scope.init = function () {

      };

      $scope.init();
    }
  ]);

