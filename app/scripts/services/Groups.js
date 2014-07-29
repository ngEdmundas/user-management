UserManagementApp.factory('Groups',
  [          '$log',
    function ($log) {
      'use strict';

      $log.info('Groups service loaded');

      var g = {
        groups: {
          1: {
            name: 'female',
            members: [2, 3, 5, 7, 9]
//            members: ['Eep Crood', 'Sandy Crood', 'Ugga Crood', 'Gran', 'Krispy Bear']
          },
          2: {
            name: 'male',
            members: [1, 4, 6]
//            members: ['Grug Crood', 'Guy', 'Thunk Crood']
          },
          3: {
            name: 'human',
            members: []
          },
          4: {
            name: 'animal',
            members: [8, 9]
//            members: ['Belt', 'Krispy Bear']
          },
          5: {
            name: 'sloth',
            members: [8]
//            members: ['Belt']
          },
          6: {
            name: 'fictional',
            members: [9]
//            members: ['Krispy Bear']
          },
          7: {
            name: 'grandmother',
            members: [7]
//            members: ['Gran']
          },
          8: {
            name: 'child',
            members: [2, 3, 6]
//            members: ['Eep Crood', 'Sandy Crood', 'Thunk Crood']
          },
          9: {
            name: 'husband',
            members: [1]
//            members: ['Grug Crood']
          },
          10: {
            name: 'father',
            members: [1]
//            members: ['Grug Crood']
          },
          11: {
            name: 'mother',
            members: [5]
//            members: ['Ugga Crood']
          },
          12: {
            name: 'wife',
            members: [5]
//            members: ['Ugga Crood']
          },
          13: {
            name: 'boyfriend',
            members: [4]
//            members: ['Guy']
          },
          14: {
            name: 'cro-magnon',
            members: [4]
//            members: ['Guy']
          }
        },

        init: function () {
        },

        getGroups: function () {
          $log.debug('getGroups', g.groups);
          return g.groups;
        },

        getGroup: function (groupId) {
          return g.groups[groupId];
        },

        addGroup: function (group) {
          var gk = Object.keys(g.groups);
          var id = Number(gk[gk.length - 1]) + 1;
          g.groups[id] = {
            name: group.name,
            members: []
          };
          $log.debug('addGroup', group, gk, id, g);
        },

        deleteGroup: function (groupKey) {
          var m = g.groups[groupKey].members;
          if (!m || m.length === 0) {
            delete g.groups[groupKey];
          }
        }
      };

      g.init();

      return g;
    }
  ]);