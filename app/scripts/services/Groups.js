UserManagementApp.factory('Groups',
  [          '$log',
    function ($log) {
      'use strict';

      $log.info('Groups service loaded');

      var groups = {
        groups: {
          1: {
            name: 'g1',
            members: ['Grug', 'xxx']
          },
          2: {
            name: 'g2',
            members: ['Grug']
          },
          3: {
            name: 'g3',
            members: []
          }
        },

        init: function () {
        },

        getGroups: function () {
          $log.debug('getGroups', groups.groups);
          return groups.groups;
        },

        getGroup: function (groupId) {
          return users[groupId];
        }      };

      groups.init();

      return groups;
    }
  ]);