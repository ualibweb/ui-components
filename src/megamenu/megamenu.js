angular.module('megamenu', [])

    .directive('megamenu', [function(){
        return {
            restrict: 'EAC',
            scope: {
                link: '@',
                brand: '@',
                brandImage: '@',
                inverse: '@'
            },
            replace: true,
            transclude: true,
            templateUrl: 'megamenu/templates/megamenu.tpl.html',
            link: function(scope, elm, attrs){
                var navbar = {};
                if (angular.isUndefined(scope.link)) scope.link = '#';
                if (angular.isUndefined(scope.brand)) scope.brand = 'Brand';
                navbar.style = angular.isUndefined(scope.inverse) ? 'navbar-inverse' : 'navbar-default';

                scope.navbar = navbar;
            }
        }
    }])

    .directive('megamenuNavbar', [function(){
        return {
            restrict: 'EAC',
            replace: true,
            transclude: true,
            templateUrl: 'megamenu/templates/megamenu-navbar.tpl.html'
        }
    }])

    .directive('megamenuDropdown', [function(){
        return {
            restrict: 'EAC',
            scope: {
                title: '@',
                link: '@',
                icon: '@'
            },
            replace: true,
            transclude: true,
            templateUrl: 'megamenu/templates/megamenu-dropdown.tpl.html',
            link: function(scope){
                if (angular.isUndefined(scope.link)) scope.link = '#';
            }
        }
    }])

    .directive('megamenuButton', [function(){
        return {
            restrict: 'EAC',
            scope: {
                link: '@'
            },
            replace: true,
            transclude: true,
            templateUrl: 'megamenu/templates/megamenu-button.tpl.html',
            link: function(scope){
                if (angular.isUndefined(scope.link)) scope.link = '#';
            }
        }
    }])