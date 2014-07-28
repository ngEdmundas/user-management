'use strict';

UserManagementApp.controller('GroupsController',
  [          '$scope', '$log', 'Groups',
    function ($scope,   $log,   Groups) {
      var gcLog = 'GroupsController';
      $log.info(gcLog, 'Groups controller loaded', Groups);

      $scope.groups = Groups;
   }
  ]
);
