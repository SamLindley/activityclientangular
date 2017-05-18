angular.module("home").factory("homeService", ["$http", function ($http) {
    return {
        getActivities: function () {
            return $http.get("http://activityapi-2017.azurewebsites.net/excerciseAPI/webapi/activities")
        },
        postActivity: function (activity) {
            return $http.post("http://activityapi-2017.azurewebsites.net/excerciseAPI/webapi/activities/activity", activity)
        }

    }
}]);
