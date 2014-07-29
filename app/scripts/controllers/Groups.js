'use strict';

UserManagementApp.controller('GroupsController',
  [          '$scope', '$log', 'Groups',
    function ($scope,   $log,   Groups) {
      var gcLog = 'GroupsController';
      $log.info(gcLog, 'Groups controller loaded', Groups);

      $scope.newGroup = {name: ''};
      $scope.g = Groups;

      $scope.addGroup = function () {
        Groups.addGroup($scope.newGroup);
        $scope.newGroup.name = '';
      };
    }
  ]
);
