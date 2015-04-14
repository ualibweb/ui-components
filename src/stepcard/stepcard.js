angular.module('ualib.ui')
    .directive('stepCard', function(){
        return {
          restrict: 'EA',
          transclude: true,
          replace: true,
          scope: {
            heading: '@'
          },
          templateUrl: 'stepcard/templates/stepCard.tpl.html',
          controller: function($scope){

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