angular.module('ualib.ui')

    .run(['$rootScope', '$document', '$location', '$timeout', function($rootScope, $document, $location, $timeout) {
        if(!window.history || !history.replaceState) {
            return;
        }

        $rootScope.$on('PageWithMenu:loaded', function(){
            var anchor = $location.hash() || $location.path().split('/')[1];
            if (anchor){
                $timeout(function(){
                    $document.scrollToElement(angular.element(document.getElementById(anchor)));
                }, 200);
            }
        });
        $rootScope.$on('duScrollspy:becameActive', function($event, $element, $target){
            //Automaticly update location
            var hash = $element.find('a').eq(0).prop('hash');
            if (hash) {
                history.replaceState(null, null, hash);
            }
        });
    }])

  .directive('pageWithMenu', [function(){
    return{
      restrict: 'C',
      transclude: true,
      replace: true,
      templateUrl: 'page/templates/page.tpl.html',
      controller: ['$scope', '$element', function($scope, $element){
        var menu = $scope.menu = [];
        this.addSection = function(section){
          menu.push(section);
        };

        $element.addClass('loaded');
      }]
    }
  }])

  .directive('pageSection', ['$rootScope', function($rootScope){
    return {
      require: '^pageWithMenu',
      restrict: 'EC',
      transclude: true,
        replace: true,
      scope: {
        title: '@',
        icon: '@'
      },
      templateUrl: 'page/templates/page-section.tpl.html',
      link: function(scope, elm, attrs, Ctrl){
        var titleElm = elm.find('h2')[0];
        if (titleElm){
            var title = angular.isDefined(scope.title) ? scope.title : titleElm.textContent;
            var icon = scope.icon || false;
            scope.section = title.replace(/[\s\-\\/"'&]+/g, '_');
            Ctrl.addSection({title: title, icon: icon, link: scope.section});
        }
          $rootScope.$broadcast('PageWithMenu:loaded');
      }
    }
  }]);