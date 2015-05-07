angular.module('ualib.ui')

  .directive('pageWithMenu', [function(){
    return{
      restrict: 'C',
      transclude: true,
        replace: true,
      templateUrl: 'page/templates/page.tpl.html',
      controller: function($scope, $element){
        var menu = $scope.menu = [];
        this.addSection = function(section){
          menu.push(section);
          console.log(section);
        }

          $element.addClass('loaded');
      }
    }
  }])

  .directive('pageSection', [function(){
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
      }
    }
  }]);