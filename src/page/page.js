angular.module('ualib.ui')

  .directive('pageSections', [function(){
    return{
      restrict: 'C',
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

  .directive('section', [function(){
    return {
      require: '^pageSections',
      restrict: 'EC',
      transclude: true,
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