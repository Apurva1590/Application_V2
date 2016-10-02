'use strict';

angular.module('bygamezApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
        
            // route for the about page
            .state('app.about', {
                url:'about',
                views: {
                    'content@': {
                        templateUrl : 'views/about.html',
                        controller  : 'AboutController'                  
                    }
                }
            })
        
            // route for the games page
                .state('app.games', {
                    url:'games',
                    views: {
                        'content@': {
                            templateUrl : 'views/games.html',
                            controller  : 'GamesController'                  
                        }
                    }
                })
        
        
            // route for the contact page
                .state('app.contact', {
                    url:'contact',
                    views: {
                        'content@': {
                            templateUrl : 'views/contact.html',
                            //controller  : 'GamesController'                  
                        }
                    }
                })
    
    
        $urlRouterProvider.otherwise('/');
    })
;
