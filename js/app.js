(function(){
    'use strict';

    angular.module('basicApp', [
        "firebase",
        "ui.router",
        "navController",
        "homeController",
        "homeService",
        "homeDirectives",
        "ngAnimate",
        "ngStorage",
        "printController",
        "ui.bootstrap",
        "angucomplete"
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
                .state("print", {
                    url: "/print",
                    templateUrl: "templates/print.html"
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
                    templateUrl: "templates/EmpSched/Dalton.html"
                })
                .state("edgar", {
                    url: "/edgar",
                    templateUrl: "templates/EmpSched/Edgar.html"
                })
                .state("malek", {
                    url: "/malek",
                    templateUrl: "templates/EmpSched/Malek.html"
                })
                .state("josh", {
                    url: "/josh",
                    templateUrl: "templates/EmpSched/Josh.html"
                })
                .state("Max", {
                    url: "/Max",
                    templateUrl: "templates/EmpSched/Max.html"
                })
                .state("about", {
                    url: "/about",
                    templateUrl: "templates/about.html"
                });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise("/home");
        }]);

}());
