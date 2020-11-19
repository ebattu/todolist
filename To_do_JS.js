var app = angular.module('myapp',[])
app.controller("ctrl",['$scope',function($scope){
    $scope.tasks = [];
    $scope.addTask = function(){
        $scope.tasks.push($scope.taskname);
        $scope.taskname='';
    }
    
    $scope.removeTask = function(task){
        var index = $scope.tasks.indexOf(task);
        $scope.tasks.splice(index,1);

    }

}])
