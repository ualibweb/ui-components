angular.module('page', [])

    .directive('page', [function(){
        return{
            restrict: 'EAC',
            transclude: true,
            scope: {},
            templateUrl: 'page/page.tpl.html',
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
            scope: {},
            templateUrl: 'page/page-section.tpl.html',
            link: function(scope, elm, attrs, Ctrl){
                var title = elm.find('h1').text();
                scope.section = title.replace(/[\s\-\\/"'&]+/g, '_');
                Ctrl.addSection({title: title, link: scope.section});
            }
        }
    }]);