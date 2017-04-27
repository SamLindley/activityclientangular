angular.module("home").factory("homeService", ["$http", function ($http) {
    return {
        getActivities: function () {
            return $http.get("http://localhost:8080/exercise-services/webapi/activities")
        },
        postActivity: function (activity) {
            return $http.post("http://localhost:8080/exercise-services/webapi/activities/activity", activity)
        }

    }
}]);
