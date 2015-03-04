angular.module('page', [])

    .directive('page', [function(){
        return{
            restrict: 'EAC',
            transclude: true,
            templateUrl: 'page/templates/page.tpl.html',
            controller: function($scope){
                var menu = $scope.menu = [];
                this.addSection = function(section){
                    menu.push(section);
                    console.log(section);
                }
            }
        }
    }])

    .directive('pageSection', [function(){
        return {
            require: '^page',
            restrict: 'AEC',
            transclude: true,
            scope: {
                title: '@'
            },
            templateUrl: 'page/templates/page-section.tpl.html',
            link: function(scope, elm, attrs, Ctrl){
                var title = angular.isDefined(scope.title) ? scope.title : elm.find('h2').text();
                scope.section = title.replace(/[\s\-\\/"'&]+/g, '_');
                Ctrl.addSection({title: title, link: scope.section});
            }
        }
    }]);