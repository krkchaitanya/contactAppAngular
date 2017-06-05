var myApp=angular.module("myApp",["ngRoute"]).run(["$rootScope",function($rootScope){
    $rootScope.mainName="chai";
}]);



myApp.config(["$routeProvider",function($routeProvider){

  $routeProvider
    
    .when("/",{
        templateUrl:"main.html",
        controller:"mainController"
    });
    
}]);




myApp.controller("mainController",["$scope",function($scope){
    
    
    $scope.newUser={};

    $scope.person=[
        
        {name:"mike",email:"mikeeee@gmail.com"},
        {name:"jack",email:"jackkk@gmail.com"},
        {name:"krist",email:"kristtt@gmail.com"}
    ];
    

    
    $scope.savedata=function(){
      $scope.person.push($scope.newUser);
        $scope.newUser={};
    };
    
    
    $scope.editdata=function(human){
        console.log(human);
        $scope.clickeduser=human;
    };
    
    
    $scope.updatedata=function(){
    
        
    };
    $scope.deleteuser=function(){
      
      $scope.person.splice($scope.person.indexOf($scope.clickeduser),1);
        
    };
    
}]);