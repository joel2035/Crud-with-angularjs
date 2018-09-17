 var app = angular.module("myApp", []);
 app.controller("mycontroller", function($scope) {
   $scope.newUser = {};
   $scope.clickUser = {};
   $scope.message = "";
   $scope.users = [{
       username: "rion",
       FullName: "tata",
       email: "tata@gmail.com"
     },
     {
       username: "papin",
       FullName: "toto",
       email: "papin@gmail.com"
     },
     {
       username: "marabou",
       FullName: "piment",
       email: "marabou@studely.com"
     }
   ];
   $scope.saveUser = function() {
     $scope.users.push($scope.newUser);
     $scope.newUser = {};
     $scope.message = "New User Add Successfully !"
   }
   $scope.selectUser = function(user) {
     $scope.clickUser = user;
   }
   $scope.updateUser = function() {
     $scope.message = " User Update Successfully !"
   };
   $scope.deleteUser = function() {
     $scope.users.splice($scope.users.indexOf($scope.clickUser), 1);
     $scope.message = " User Delete Successfully !"
   }
   $scope.clearMessage = function() {
     $scope.message = "";
   };

 });