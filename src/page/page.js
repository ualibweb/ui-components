angular.module('ualib.ui')

  .directive('page', [function(){
    return{
      restrict: 'EA',
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
      restrict: 'EA',
      transclude: true,
      scope: {
        title: '@',
        icon: '@'
      },
      templateUrl: 'page/templates/page-section.tpl.html',
      link: function(scope, elm, attrs, Ctrl){
        var title = angular.isDefined(scope.title) ? scope.title : elm.find('h2').text();
        var icon = scope.icon || false;
        scope.section = title.replace(/[\s\-\\/"'&]+/g, '_');
        Ctrl.addSection({title: title, icon: icon, link: scope.section});
      }
    }
  }]);