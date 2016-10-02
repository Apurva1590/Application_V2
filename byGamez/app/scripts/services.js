'use strict';

angular.module('bygamezApp')
    
    .constant("baseURL","http://localhost:3000/")

    .service('mainFactory',['$http', 'baseURL', function($http,baseURL){
    
        this.getGame = function (index) { 
            return $http.get(baseURL+"games/"+index);
        };
    
    }])


    .service('infoFactory',['$http', 'baseURL', function($http,baseURL){
    
            this.getInfo = function(index){
                return $http.get(baseURL+"ourInfo/"+index);
            };
    
    }])

    .service('gamesFactory',['$http', 'baseURL', function($http,baseURL){
    
        this.gameDetail = function(index){
            return $http.get(baseURL+"gameInfo/"+index);
        };
    
    }])

;

