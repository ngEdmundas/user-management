UserManagementApp.factory('Users',
  [          '$log',
    function ($log) {
      'use strict';

      $log.info('Users service loaded');

      var users = {
        users: {
          1: {
            name: 'Grug',
            memberOf: ['g1', 'g2']
          },
          2: {
            name: 'xxx',
            memberOf: ['g1']
          },
          3: {
            name: 'zzz',
            memberOf: []
          }
        },

        init: function () {
        },

        getUsers: function () {
          $log.debug('getUsers', users.users);
          return users.users;
        },

        getUser: function (userId) {
          return users[userId];
        }
      };

      users.init();

      return users;
    }
  ]);