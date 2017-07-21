(function(angular){

var rsapp=angular.module("BEApp",[]);
rsapp.controller("parentController",['$scope','$log','$rootScope',function($scope,$log,$rootScope){
$scope.WhoAmI="Sarath";
$scope.broadcastByParent=function(){

    $scope.$broadcast("parent","I'm ur parent");
}

$scope.$on("sibling1",function(event,data){

$scope.message=data;
console.log(data);
})


}]);

rsapp.controller("siblingController1",['$scope','$log','$rootScope',function($scope,$log,$rootScope){

$scope.$on("parent",function(event,data){

    $scope.WhoAmI=data;
});

$scope.emitToParent=function(){
$scope.$emit("sibling1","This from Sibling 1, I'm Ur Sibling");
}

$scope.$on("sibling2",function(event,data){

$scope.childmessage=data;

})


}]);

rsapp.controller("siblingController2",['$scope','$log','$rootScope',function($scope,$log,$rootScope){

$scope.$on("parent",function(event,data){
console.log("Data received By Sibling 2")
   console.log(data);
});

$scope.msgToSibling1=function(){

    $rootScope.$broadcast("sibling2","This is from SIbling2")
}

}]);


})(angular)