'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function(moment, alert) {
	 var vm = this;

    //These variables MUST be set as a minimum for the calendar to work
    vm.calendarView = 'day';
    vm.viewDate = new Date();
    vm.events = [
      {
        title: 'An event',
        type: 'warning',
        startsAt: new Date(2014,5,1,1)
      }, {
        title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
        type: 'info',
        startsAt: new Date(2013,5,1,1)
      }, {
        title: 'This is a really long event title that occurs on every year',
        type: 'important',
       startsAt: new Date(2015,5,1,1)
      }
    ];

    vm.isCellOpen = true;

    vm.eventClicked = function(event) {
      alert.show('Clicked', event);
    };

    vm.eventEdited = function(event) {
      alert.show('Edited', event);
    };

    vm.eventDeleted = function(event) {
      alert.show('Deleted', event);
    };

    vm.eventTimesChanged = function(event) {
      alert.show('Dropped or resized', event);
    };

    vm.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };
}]);