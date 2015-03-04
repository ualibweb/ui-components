angular.module('ualib.ui', [
    'ui.bootstrap.dropdown',
    'ui.components.templates',
    'megamenu',
    'page'
])
//Straight up stolen from angular-bootstrap project - https://github.com/angular-ui/bootstrap/blob/master/src/dropdown/dropdown.js
angular.module('ui.bootstrap.dropdown', [])

    .constant('dropdownConfig', {
        openClass: 'open'
    })

    .service('dropdownService', ['$document', function($document) {
        var openScope = null;

        this.open = function( dropdownScope ) {
            if ( !openScope ) {
                $document.bind('click', closeDropdown);
                $document.bind('keydown', escapeKeyBind);
            }

            if ( openScope && openScope !== dropdownScope ) {
                openScope.isOpen = false;
            }

            openScope = dropdownScope;
        };

        this.close = function( dropdownScope ) {
            if ( openScope === dropdownScope ) {
                openScope = null;
                $document.unbind('click', closeDropdown);
                $document.unbind('keydown', escapeKeyBind);
            }
        };

        var closeDropdown = function( evt ) {
            // This method may still be called during the same mouse event that
            // unbound this event handler. So check openScope before proceeding.
            if (!openScope) { return; }

            var toggleElement = openScope.getToggleElement();
            if ( evt && toggleElement && toggleElement[0].contains(evt.target) ) {
                return;
            }

            openScope.$apply(function() {
                openScope.isOpen = false;
            });
        };

        var escapeKeyBind = function( evt ) {
            if ( evt.which === 27 ) {
                openScope.focusToggleElement();
                closeDropdown();
            }
        };
    }])

    .controller('DropdownController', ['$scope', '$attrs', '$parse', 'dropdownConfig', 'dropdownService', '$animate', function($scope, $attrs, $parse, dropdownConfig, dropdownService, $animate) {
        var self = this,
            scope = $scope.$new(), // create a child scope so we are not polluting original one
            openClass = dropdownConfig.openClass,
            getIsOpen,
            setIsOpen = angular.noop,
            toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop;

        this.init = function( element ) {
            self.$element = element;

            if ( $attrs.isOpen ) {
                getIsOpen = $parse($attrs.isOpen);
                setIsOpen = getIsOpen.assign;

                $scope.$watch(getIsOpen, function(value) {
                    scope.isOpen = !!value;
                });
            }
        };

        this.toggle = function( open ) {
            return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
        };

        // Allow other directives to watch status
        this.isOpen = function() {
            return scope.isOpen;
        };

        scope.getToggleElement = function() {
            return self.toggleElement;
        };

        scope.focusToggleElement = function() {
            if ( self.toggleElement ) {
                self.toggleElement[0].focus();
            }
        };

        scope.$watch('isOpen', function( isOpen, wasOpen ) {
            $animate[isOpen ? 'addClass' : 'removeClass'](self.$element, openClass);

            if ( isOpen ) {
                scope.focusToggleElement();
                dropdownService.open( scope );
            } else {
                dropdownService.close( scope );
            }

            setIsOpen($scope, isOpen);
            if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
                toggleInvoker($scope, { open: !!isOpen });
            }
        });

        $scope.$on('$locationChangeSuccess', function() {
            scope.isOpen = false;
        });

        $scope.$on('$destroy', function() {
            scope.$destroy();
        });
    }])

    .directive('dropdown', function() {
        return {
            restrict: 'AC',
            controller: 'DropdownController',
            link: function(scope, element, attrs, dropdownCtrl) {
                dropdownCtrl.init( element );
            }
        };
    })

    .directive('dropdownToggle', function() {
        return {
            restrict: 'AC',
            require: '?^dropdown',
            link: function(scope, element, attrs, dropdownCtrl) {
                if ( !dropdownCtrl ) {
                    return;
                }

                dropdownCtrl.toggleElement = element;

                var toggleDropdown = function(event) {
                    event.preventDefault();

                    if ( !element.hasClass('disabled') && !attrs.disabled ) {
                        scope.$apply(function() {
                            dropdownCtrl.toggle();
                        });
                    }
                };

                element.bind('click', toggleDropdown);

                // WAI-ARIA
                element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
                scope.$watch(dropdownCtrl.isOpen, function( isOpen ) {
                    element.attr('aria-expanded', !!isOpen);
                });

                scope.$on('$destroy', function() {
                    element.unbind('click', toggleDropdown);
                });
            }
        };
    });
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