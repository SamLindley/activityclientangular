angular.module("home").controller("homeController", ["$scope", "homeService", "$route", function ($scope, homeService, $route) {

    var myActivity = {};

    $scope.scope = "THIS IS WORKING";

    homeService.getActivities().then(function (response) {
        $scope.activities = response.data;
        console.log(response.data);
    });
    
    $scope.add = function () {
        myActivity = {
            desc : $scope.description,
            duration : $scope.duration
        };
        console.log(myActivity);
        homeService.postActivity(myActivity).then(function (response) {
            $route.reload();
        })
    }

}]);
