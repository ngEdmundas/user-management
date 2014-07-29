UserManagementApp.factory('Admin',
  [          '$log', 'Groups', 'Users',
    function ($log,   Groups,   Users) {
      'use strict';

      $log.info('Admin service loaded');

      var a = {
        g: Groups,
        u: Users,

        init: function () {
        }
      };

      a.init();

      return a;
    }
  ]);