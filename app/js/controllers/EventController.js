'use strict';

eventsApp.controller('EventController', function EventController($scope,eventData) {

  $scope.sortorder = 'name'
  $scope.event = eventData

      $scope.upVoteSession = function(session) {
        session.upVoteCount++;
      }

      $scope.downVoteSession = function(session) {
        session.upVoteCount--;
      }

    }

  );