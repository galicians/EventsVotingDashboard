'use strict';

eventsApp.controller('EventController', function EventController($scope) {

  $scope.event = {
        name: 'Angular Boot Camp',
        date: '1/1/2013',
        time: '10:30 am',
        imageurl: '/img/angularJS.png',
        location: {
          address: 'MakersAcademy Headquartes',
          city: 'Montain View',
          province: 'CA'
        },
        sessions: [
          {
              name: 'Directives Masterclass',
              creatorName: 'Pablo',
              duration: '1 hr',
              level: 'Advanced',
              abstract: 'In this session you will lear the ins and outs of directives',
              upVoteCount: 0
          },
          {
              name: 'Scopes for fun',
              creatorName: 'Portabales',
              duration: '30 mins',
              level: 'Introductory',
              abstract: 'This session will take a closer look at scopes.',
              upVoteCount: 0
          },
          {
              name: 'Well Behaved Controllers',
              creatorName: 'makercoach',
              duration: '2 hours',
              level: 'intermediate',
              abstract: 'This session will take a closer look at Controllers.',
              upVoteCount: 0
          }
        ]
      }

      $scope.upVoteSession = function(session) {
        session.upVoteCount++;
      }

      $scope.downVoteSession = function(session) {
        session.upVoteCount--;
      }

    }

  );