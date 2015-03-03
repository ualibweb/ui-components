angular.module('stepCard', [])
    .directive('stepCard', function(){
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: 'stepcard/templates/stepCard.tpl.html',
            controller: function($scope){
                $scope.cardData = {};
                $scope.cardData.title = "";
                $scope.cardData.items = [];
                this.counter = -1;
                this.addCard = function(card) {
                    if ($scope.cardData.title.length == 0)
                        $scope.cardData.title = card;
                    else {
                        if (typeof $scope.cardData.items[this.counter] == 'undefined')
                            $scope.cardData.items[this.counter] = [];
                        $scope.cardData.items[this.counter].push(card);
                        switch ($scope.cardData.items.length){
                            case 1:
                                $scope.cardData.class = 'col-sm-12';
                                break;
                            case 2:
                                $scope.cardData.class = 'col-sm-6';
                                break;
                            default:
                                $scope.cardData.class = 'col-sm-4';
                                break;
                        }
                    }
                    console.dir($scope.cardData);
                };
                this.incCounter = function(){
                    this.counter++;
                };
            }
        };
    })

    .directive('step', function() {
        return {
            require: '^stepCard',
            restrict: 'E',
            transclude: true,
            controller: function(){
            },
            link: function(scope, element, attrs, cardCtrl) {
                cardCtrl.incCounter();
                element.detach();
            },
            templateUrl: 'stepcard/templates/step.tpl.html'
        };
    })
    .directive('subStep', function() {
        return {
            require: ['^stepCard','^step'],
            restrict: 'E',
            link: function(scope, element, attrs, controllers) {
                controllers[0].addCard(element.html());
                element.detach();
            }
        };
    });