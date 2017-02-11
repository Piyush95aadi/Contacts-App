var contactModule = angular.module('contactModule', ['ngRoute', 'ngAnimate']);

/*Route*/
contactModule.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  // $locationProvider.html5Mode(true);
  $routeProvider
  .when('/contacts', {
    templateUrl: 'views/contacts.html',
    controller: 'displayContactsController'
  })
  .when('/createContacts', {
    templateUrl: 'views/createContacts.html',
    controller: 'createContactsControler'
  })
  .when('/editContact', {
    templateUrl: 'views/editContact.html',
    controller: 'editContactController'
  }).otherwise({
    redirectTo: "/"
  })
}]);

/*Controllers*/
contactModule.controller("displayContactsController", ['$scope', '$location', function($scope, $location){
  $scope.contacts = ["Piyush", "Archit"];
}]);

contactModule.controller("createContactsControler", ['$scope', '$location', function($scope, $location){

}]);

contactModule.controller("editContactController", ['$scope', '$location', function($scope, $location){

}]);
