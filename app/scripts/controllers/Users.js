'use strict';

UserManagementApp.controller('UsersController',
  [          '$scope', '$log', 'Users', 'Groups',
    function ($scope,   $log,   Users,   Groups) {
      var ucLog = 'UsersController';
      $log.info(ucLog, 'Users controller loaded', Users);

      $scope.users = Users;
      $scope.groups = Groups;
      $scope.list = {
        showGroups: -1
      };

      $scope.assignGroup = function (group, user) {
        $scope.list.showGroups = -1;
      }
    }
  ]
);
