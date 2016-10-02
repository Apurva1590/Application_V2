'use strict';

angular.module('bygamezApp')
   
    .controller('IndexController', ['$scope', 'mainFactory', function($scope, mainFactory){
            
            $scope.game1 = {};
            $scope.showGame1 = false;
            $scope.message="Loading ...";
            mainFactory.getGame(0)
            .then(
                function(response){
                    $scope.game1 = response.data;
                    $scope.showGame1 = true;
                    
                },
                function(response){
                   $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );   
        
            $scope.game2 = {};
            $scope.showGame2 = false;
            $scope.message="Loading ...";
            mainFactory.getGame(1)
            .then(
                function(response){
                    $scope.game2 = response.data;
                    $scope.showGame2 = true;
                    
                },
                function(response){
                   $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
        
            $scope.game3 = {};
            $scope.showGame3 = false;
            $scope.message="Loading ...";
            mainFactory.getGame(2)
            .then(
                function(response){
                    $scope.game3 = response.data;
                    $scope.showGame3 = true;
                },
                function(response){
                   $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
        
            $scope.game4 = {};
            $scope.showGame4 = false;
            $scope.message="Loading ...";
            mainFactory.getGame(3)
            .then(
                function(response){
                    $scope.game4 = response.data;
                    $scope.showGame4 = true;
                },
                function(response){
                   $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );

    }])

    .controller('AboutController', ['$scope', 'infoFactory', function($scope, infoFactory){
        
        $scope.info = {};
        $scope.showInfo = false;
        $scope.message="Loading ...";
        infoFactory.getInfo(0)
        .then(
            function(response){
                $scope.info = response.data;
                $scope.showInfo = true;
            },
            function(response){
                $scope.message = "Error: "+response.status + " " + response.statusText;
            }
        );
    
    }])


    .controller('GamesController', ['$scope', 'gamesFactory', 'mainFactory', function($scope, gamesFactory, mainFactory){
        
        $scope.gameInfo1 = {};
        $scope.showGameInfo1 = false;
        $scope.message = "Loding ...";
        gamesFactory.gameDetail(0)
        .then(
            function(response){
                $scope.gameInfo1 = response.data;
                $scope.showGameInfo1 = true;
            },
            function(response){
                $scope.message = "Error: "+response.status + " " + response.statusText;
            }
        );
        
        $scope.gameInfo2 = {};
        $scope.showGameInfo2 = false;
        $scope.message = "Loding ...";
        gamesFactory.gameDetail(1)
        .then(
            function(response){
                $scope.gameInfo2 = response.data;
                $scope.showGameInfo2 = true;
            },
            function(response){
                $scope.message = "Error: "+response.status + " " + response.statusText;
            }
        );
        
        $scope.gameInfo3 = {};
        $scope.showGameInfo3 = false;
        $scope.message = "Loding ...";
        gamesFactory.gameDetail(2)
        .then(
            function(response){
                $scope.gameInfo3 = response.data;
                $scope.showGameInfo3 = true;
            },
            function(response){
                $scope.message = "Error: "+response.status + " " + response.statusText;
            }
        );
        
        $scope.gameInfo4 = {};
        $scope.showGameInfo4 = false;
        $scope.message = "Loding ...";
        gamesFactory.gameDetail(3)
        .then(
            function(response){
                $scope.gameInfo4 = response.data;
                $scope.showGameInf4 = true;
            },
            function(response){
                $scope.message = "Error: "+response.status + " " + response.statusText;
            }
        );
        
        $scope.gameInfo5 = {};
        $scope.showGameInfo5 = false;
        $scope.message = "Loding ...";
        gamesFactory.gameDetail(4)
        .then(
            function(response){
                $scope.gameInfo5 = response.data;
                $scope.showGameInfo5 = true;
            },
            function(response){
                $scope.message = "Error: "+response.status + " " + response.statusText;
            }
        );
        
        $scope.gameInfo6 = {};
        $scope.showGameInfo6 = false;
        $scope.message = "Loding ...";
        gamesFactory.gameDetail(5)
        .then(
            function(response){
                $scope.gameInfo6 = response.data;
                $scope.showGameInfo6 = true;
            },
            function(response){
                $scope.message = "Error: "+response.status + " " + response.statusText;
            }
        );
        
        $scope.gameInfo7 = {};
        $scope.showGameInfo7 = false;
        $scope.message = "Loding ...";
        gamesFactory.gameDetail(6)
        .then(
            function(response){
                $scope.gameInfo7 = response.data;
                $scope.showGameInfo7 = true;
            },
            function(response){
                $scope.message = "Error: "+response.status + " " + response.statusText;
            }
        );
        
        $scope.gameInfo8 = {};
        $scope.showGameInfo8 = false;
        $scope.message = "Loding ...";
        gamesFactory.gameDetail(7)
        .then(
            function(response){
                $scope.gameInfo8 = response.data;
                $scope.showGameInfo8 = true;
            },
            function(response){
                $scope.message = "Error: "+response.status + " " + response.statusText;
            }
        );
        
        
        $scope.oneGame1 = {};
        $scope.showOneGame1 = false;
        $scope.message = "Loading...";
            mainFactory.getGame(0)
            .then(
                function(response){
                    $scope.oneGame1 = response.data;
                    $scope.showOneGame1 = true;
                    
                },
                function(response){
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );   
        
            $scope.oneGame2 = {};
            $scope.showOneGame2 = false;
            $scope.message = "Loading...";
            mainFactory.getGame(1)
            .then(
                function(response){
                    $scope.oneGame2 = response.data;
                    $scope.showOneGame2 = true;
                },
                function(response){
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
        
            $scope.oneGame3 = {};
            $scope.showOneGame3 = false;
            $scope.message = "Loading...";
            mainFactory.getGame(2)
            .then(
                function(response){
                    $scope.oneGame3 = response.data;
                    $scope.showOneGame3 = true;   
                },
                function(response){
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
        
            $scope.oneGame4 = {};
            $scope.showOneGame4 = false;
            $scope.message = "Loading...";
            mainFactory.getGame(3)
            .then(
                function(response){
                    $scope.oneGame4 = response.data;
                    $scope.showOneGame4 = true; 
                    
                },
                function(response){
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
        
    
    }])





;
