UserManagementApp.factory('Users',
  [          '$log',
    function ($log) {
      'use strict';

      $log.info('Users service loaded');

      // http://the-croods.wikia.com/wiki/The_Croods_Wiki
      var u = {
        users: {
          1: {
            // http://the-croods.wikia.com/wiki/Grug_Crood
            name: 'Grug Crood',
            memberOf: [2, 9, 10]
//            memberOf: ['male', 'husband', 'father']
          },
          2: {
            name: 'Eep Crood',
            memberOf: [1, 8]
//            memberOf: ['female', 'child']
          },
          3: {
            name: 'Sandy Crood',
            memberOf: [1, 8]
//            memberOf: ['female', 'child']
          },
          4: {
            name: 'Guy',
            memberOf: [2, 13, 14]
//            memberOf: ['male', 'boyfriend', 'cro-magnon']
          },
          5: {
            name: 'Ugga Crood',
            memberOf: [1, 11, 12]
//            memberOf: ['female', 'mother', 'wife']
          },
          6: {
            name: 'Thunk Crood',
            memberOf: [2, 8]
//            memberOf: ['male', 'child']
          },
          7: {
            name: 'Gran',
            memberOf: [1, 7]
//            memberOf: ['female', 'grandmother']
          },
          8: {
            name: 'Belt',
            memberOf: [5, 4]
//            memberOf: ['sloth', 'animal']
          },
          9: {
            name: 'Krispy Bear',
            memberOf: [1, 4, 6]
//            memberOf: ['female', 'animal', 'fictional']
          }
        },

        init: function () {
        },

        getUsers: function () {
          $log.debug('getUsers', u.users);
          return u.users;
        },

        getUser: function (userId) {
          return u.users[userId];
        },

        addUser: function (user) {
          var uk = Object.keys(u.users);
          var id = Number(uk[uk.length - 1]) + 1;
          u.users[id] = {
            name: user.name,
            memberOf: []
          };
          $log.debug('addUser', user, uk, id, u);
        },

        deleteUser: function (userId) {
          delete u.users[userId];
        }
      };

      u.init();

      return u;
    }
  ]);