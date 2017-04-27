
angular.module("app").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider){
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.template.html",
        controller: "homeController"
    }).otherwise("/");
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);