'use strict';

UserManagementApp.controller('UsersController',
  [          '$scope', '$log', 'Users', 'Groups',
    function ($scope,   $log,   Users,   Groups) {
      var ucLog = 'UsersController';
      $log.info(ucLog, 'Users controller loaded', Users);

      $scope.u = Users;
      $scope.g = Groups;

      $scope.list = {
        showGroups: -1
      };

      $scope.newUser = {name: ''};

      $scope.showGroups = function (index) {
        $scope.list.showGroups = index;
      };

      $scope.hideGroups = function () {
        $scope.list.showGroups = -1;
      };

      $scope.addUser = function () {
        Users.addUser($scope.newUser);
        $scope.newUser.name = '';
      };

      $scope.deleteUser = function (userId) {
        $log.debug('deleteUser', userId, Users);
        var user = Users.getUser(userId);
        var m = user.memberOf;
        if (m) {
          $log.debug('deleteUser if', m, userId);
          for (var i = 0; i < m.length; i++) {
            var gm = Groups.groups[m[i]].members;
            var gmx = gm.indexOf(parseInt(userId));
            $log.debug('deleteUser for', i, gm, gmx);
            gm.splice(gmx, 1);
          }
        }
        $scope.hideGroups();
        Users.deleteUser(userId);
      };

      $scope.checkMember = function (gkey, user) {
        return (user.memberOf.indexOf(parseInt(gkey)) > -1);
      };

      $scope.assignGroup = function (gkey, ukey) {
        Groups.groups[gkey].members.push(parseInt(ukey));
        Users.users[ukey].memberOf.push(parseInt(gkey));
        $scope.list.showGroups = -1;
      }
    }
  ]
);
