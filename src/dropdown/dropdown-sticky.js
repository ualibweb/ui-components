angular.module('ualib.ui')
    //TODO: Write documentation and examples
    .directive('dropdownSticky', [function(){
        return {
            restrict: 'AC',
            link: function(scope, elm){
                elm.bind('click', function(ev){
                    ev.preventDefault();
                    ev.stopPropagation();
                });

                scope.$on('$destroy', function(){
                    elm.unbind('click');
                })
            }
        }
    }]);