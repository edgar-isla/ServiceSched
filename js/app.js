(function(){
    'use strict';

    angular.module('basicApp', [
        "ui.router",
        "navController",
        "homeController",
        "homeService",
        "homeDirectives",
        "ngAnimate",
        "ngStorage"
    ])

    .config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {

            // define all app states (pages)
            $stateProvider
                .state("home", {
                    url: "/home",
                    templateUrl: "templates/home.html",
                    controller: "homeController as hc"
                })
                .state("alex", {
                    url: "/alex",
                    templateUrl: "templates/EmpSched/Alex.html"
                })
                .state("brian", {
                    url: "/brian",
                    templateUrl: "templates/EmpSched/Brian.html"
                })
                .state("britt", {
                    url: "/britt",
                    templateUrl: "templates/EmpSched/Britt.html"
                })
                .state("colton", {
                    url: "/colton",
                    templateUrl: "templates/EmpSched/Colton.html"
                })
                .state("dalton", {
                    url: "/dalton",
                    templateUrl: "templates/EmpSched/Dolton.html"
                })
                .state("edgar", {
                    url: "/edgar",
                    templateUrl: "templates/EmpSched/Edgar.html"
                })
                .state("malek", {
                    url: "/malek",
                    templateUrl: "templates/EmpSched/Malek.html"
                })
                .state("mitch", {
                    url: "/mitch",
                    templateUrl: "templates/EmpSched/Mitch.html"
                })
                .state("max", {
                    url: "/max",
                    templateUrl: "templates/EmpSched/Max.html"
                }) .state("steve", {
                    url: "/steve",
                    templateUrl: "templates/EmpSched/Steve.html"
                })
                .state("about", {
                    url: "/about",
                    templateUrl: "templates/about.html"
                });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise("/home");
        }]);

}());
